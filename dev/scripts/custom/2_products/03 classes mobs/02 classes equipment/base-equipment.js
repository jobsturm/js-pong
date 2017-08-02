class Equipment extends Shape {
    constructor (width, height, layer, color, mob, type, positionTop, positionLeft, centerTop, centerLeft) {
        super(width, height, color);
        this.width    = width;
        this.height   = height;
        this.color    = color;
        this.layer    = layer;
        
        this.mob        = mob;        
        this.type       = type;
        this.offsetLeft = positionLeft - centerLeft;
        this.offsetTop  = positionTop - centerTop;
        this.addToDrawList();
    } 
    
    update () {
        this.setLeft(this.mob.left + this.offsetLeft);
        this.setTop(this.mob.top + this.offsetTop);
    }
}