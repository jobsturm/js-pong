class Ball extends Shape {
    constructor (width, height, color) {
        super(width, color);
        this.radius = width;
        this.color = color;        
        this.init();
        this.setTop();
        this.setLeft();
    }
    setTop (y) {
        this.topCanvas = pong.canvas.height - y - this.height;
    } 
    setLeft (x) {
        this.left = 0;
    }
}