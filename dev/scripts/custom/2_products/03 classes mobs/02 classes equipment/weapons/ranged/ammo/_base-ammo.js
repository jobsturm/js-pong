class Bullet extends Ball {
    constructor (weaponFiredFrom, ammoType) {
        super(ammoType.width, ammoType.height, ammoType.color, ammoType.weight, ammoType.layer, ammoType.angle, ammoType.centerTop, ammoType.centerLeft);
        this.weaponFiredFrom = weaponFiredFrom;
        this.ammoType = ammoType;
        this.distanceMoved = 0;
        this.fire();
        this.update(); 
    }
    
    fire () {
        this.setLeft(this.weaponFiredFrom.left);
        this.setTop(this.weaponFiredFrom.top);
        this.angleTravelingTowards = this.weaponFiredFrom.angle;
        this.setAngle(this.angleTravelingTowards);
        
    }
    
    update () {
        this.distanceMoved += this.weaponFiredFrom.bulletSpeed;
        var newPoint = findNewPoint(this.left, this.top, this.angleTravelingTowards, this.distanceMoved);
        this.distanceLeft = newPoint.x;
        this.distanceTop = newPoint.y;
        
        this.setLeft(this.distanceLeft);
        this.setTop(this.distanceTop);
    } 
}