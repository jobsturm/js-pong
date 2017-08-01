class BaseMob extends Shape {
    constructor (width, height, color, weight) {
        super(width, height, color, weight);
        this.width    = width;
        this.height   = height;
        this.color    = color;
        this.weight   = weight;
        this.grounded = false;
        this.setPhysics();
        this.setActions();
    }
    
    setPhysics () {
        this.gravity = new Gravity(this);
    }
    
    setActions () {
        this.jump = new Jump(this);
    }
    
    updatePhysics () {
        this.gravity.update();
        if (this.top <= 0) { 
            this.grounded = true; 
            this.jump.endJump(); 
        } 
    }
    
    // movement
    moveLeft () {
        this.setLeft(this.left - this.settings.movementSpeedHorizontal);
    }
    moveRight () {
        this.setLeft (this.left + this.settings.movementSpeedHorizontal);
    }
}