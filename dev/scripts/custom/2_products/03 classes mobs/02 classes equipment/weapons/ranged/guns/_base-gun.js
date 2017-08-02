class Gun extends Equipment {
    constructor (data) { 
        super(data);
        this.usedBy = data.usedBy;
        this.type = "Gun";
        this.setTarget();
    }
    
    setTarget () {
        if (this.usedBy === "paddle") {
            this.pointGunTowardsMouse();
        } else {
            // find target script, part of AI, will build later.
        }
    }
    
    equipmentTypeUpdate () {
        if (this.usedBy === "paddle") {
            this.setTarget();
        }
    }
    
    pointGunTowardsMouse () { 
        var angleTowardsMouse = Math.atan2(pong.mouseY - this.topCanvas, pong.mouseX - this.left) * 180 / Math.PI;
        this.angle = angleTowardsMouse;
    }
} 