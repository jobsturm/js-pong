class Ball extends Shape {
    constructor (width, height, color, weight, layer, angle, centerTop, centerLeft) {
        super(width, height, color, layer, centerTop, centerLeft);
        this.width      = width;
        this.height     = height;
        this.color      = color;
        this.layer      = layer;
        this.weight     = weight;
        this.angle      = angle;
        this.centerLeft = centerLeft || width / 2;
        this.centerTop  = centerTop || height / 2;
        this.shape = "ball"; 
        this.init();
        this.addToDrawList();
    }
}