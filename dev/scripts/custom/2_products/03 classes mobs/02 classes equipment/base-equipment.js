class Equipment extends Shape {
    constructor (width, height, color, weight, layer, angle, mob, type, positionTop, positionLeft, centerTop, centerLeft) {
        super(width, height, color, layer, weight, angle, centerTop, centerLeft);
        this.width  = width;
        this.height = height;
        this.color  = color;
        this.layer  = layer;
        this.angle  = angle;
        this.centerLeft = centerLeft || width / 2;
        this.centerTop  = centerTop || height / 2;        
        
        this.mob        = mob;        
        this.type       = type;
        this.offsetLeft = positionLeft;
        this.offsetTop  = positionTop;
        this.addToDrawList();
    } 
    
    update () {
        this.setLeft(this.mob.left + this.offsetLeft);
        this.setTop(this.mob.top + this.offsetTop);
    }
}