class Gravity {
    constructor (mob) {
        this.mob = mob;
        this.velocity = 0;
    }
    update () {
        if (this.mob.top - (this.mob.weight * this.velocity) < 0) { 
            this.mob.grounded = true;
            this.mob.jump.endJump();
        }
        if (this.mob.grounded === true) {
            this.mob.setTop(0);
            this.velocityReset();
        } else {
            this.velocity += 0.2;
            this.mob.setTop(this.mob.top - (this.mob.weight * this.velocity));
        }
    }
    velocityReset () {
        this.velocity = 0;
    }
} 