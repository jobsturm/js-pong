class Paddle extends BaseMob {
    constructor (width, height, color, weight, layer, angle, centerTop, centerLeft) {
        super(width, height, color, weight, layer, angle, centerTop, centerLeft);
        
        // settings
        this.settings = pong.paddleFactory.settings;
        
        // storage
        this.storage = {};
        
        // basics
        this.name = "Paddle";
        
        // start it up
        this.init();
        this.setTop(100);
        this.setLeft(200);
        this.setPaddlesEquipement();
        this.addToDrawList();        
    }
    
    setPaddlesEquipement () {
        const self = this;
        const paddlesGun = {
            name: "Paddles gun",
            width: 75,
            height: 10,
            layer: 3, 
            color: "#e8e8e8",
            weight: 0,
            angle: 0,
            mob: self,
            offsetLeft: 15, 
            offsetTop: 25,
            centerLeft: 15,
            centerTop: 5,
            usedBy: "paddle",
            ammo: 500,
            ammoType: "bullet",
            maxAmmo: 500,
            damage: 10,
            range: 100,
            bulletSpeed: 5,
            fireCooldown: 20, // time between each shot in ms
            recoil: 0,
            reloadSpeed: 200,
            magazineSize: 30
        }
        
        this.equipmentList = [new Gun(paddlesGun)];
    }
    
    update () {
        const self = this;
        
        // controls 
        if (pong.keys.left  === true) self.moveLeft();
        if (pong.keys.right === true) self.moveRight();
        if (pong.keys.up    === true) self.jump.startJump();
        if (self.jump.goingUp === true) {
            this.jump.update();        
        }
        
        this.updatePhysics();        
    }        
} 