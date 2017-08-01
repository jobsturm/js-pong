class Paddle extends BaseMob {
    constructor (width, height, color, weight) {
        super(width, height, color, weight);
        
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
        console.log(this);
    }
    update () {
        const self = this;
        this.updatePhysics();
        
        // controls 
        if (pong.keys.left  === true) self.moveLeft();
        if (pong.keys.right === true) self.moveRight();
        if (pong.keys.up    === true) self.jump.startJump();
        
        if (self.jump.goingUp === true) {
            this.jump.update();
        }
    }        
} 