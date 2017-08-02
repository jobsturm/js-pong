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
            height: 5,
            layer: 3, 
            color: "#e8e8e8",
            weight: 0,
            angle: 0,
            mob: self,
            offsetLeft: 25,
            offsetTop: 25,
            centerLeft: 5,
            centerTop: 2.5,
            usedBy: "paddle"
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