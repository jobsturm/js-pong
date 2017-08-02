class Ranged extends Equipment {
    constructor (data) {
        super(data);
        this.ammo         = data.ammo;
        this.ammoType     = data.ammoType;
        this.maxAmmo      = data.maxAmmo;
        this.damage       = data.damage;
        this.range        = data.range;
        this.fireCooldown = data.fireCooldown;
        this.recoil       = data.recoil;
        this.reloadSpeed  = data.reloadSpeed;
        this.magazineSize = data.magazineSize;
        this.bulletSpeed  = data.bulletSpeed;
        this.usedBy       = data.usedBy;
        
        this.fireingAllowed = true; 
    }
    
    setTarget () {
        if (this.usedBy === "paddle") {
            this.pointTowardsMouse();
        } else {
            // find target script, part of AI, will build later.
        }
    }
    
    equipmentTypeUpdate () { 
        if (this.usedBy === "paddle") {
            this.setTarget();
            if (pong.mouseDown === true) this.checkFireAllowed();
        }
    }
    
    checkFireAllowed () {
        if (this.fireingAllowed === true) {
            this.fire();
            this.fireingAllowed = false;
            
            setTimeout(() => {
                this.fireingAllowed = true;
            }, this.fireCooldown);            
            return 'Allowed';
        } else {
            return 'Disallowed'
        }
    } 
    
    fire () {
        new Bullet (this, ammoTypes[this.ammoType]);
    }    
    
    pointTowardsMouse () { 
        var angleTowardsMouse = Math.atan2(pong.mouseY - this.topCanvas, pong.mouseX - this.left) * 180 / Math.PI;
        this.angle = angleTowardsMouse;
    }    
}