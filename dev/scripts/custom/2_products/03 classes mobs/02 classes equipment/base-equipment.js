class Equipment extends Shape {
    constructor (width, height, layer, color, type, positionTop, positionLeft) {
        super(width, height, color);
        this.width    = width;
        this.height   = height;
        this.color    = color;
        this.layer    = layer;
        
        this.type = type;
        this.offsetLeft = positionLeft;
        this.offsetTop = positionTop;
        this.addToDrawList();
    }
    
    update () {
    }
}