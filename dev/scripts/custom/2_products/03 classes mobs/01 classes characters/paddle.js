class Paddle extends BaseMob {
    constructor (width, height, color, weight, layer) {
        super(width, height, color, weight, layer);
        
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
        this.equipmentList = [new Equipment(75, 5, 3, "#ffffff", this, "weapon", 25, 25, 10, 2.5)]
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