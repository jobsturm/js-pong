class Jump {
    constructor (mob) {
        this.mob = mob;
        this.maxHeight = mob.maxHeight;
        this.goingUp = false;
    }
    startJump () {
        if (this.mob.grounded === false) return "already jumping";
        this.mob.grounded = false;
        this.goingUp = true;
    }
    update () {
        // When the downward velocity goes higher than the upwards one,
        // the mob will go down.
        this.mob.setTop(this.mob.top += 16);
    }
    endJump () {
        this.goingUp = false;
    }    
}