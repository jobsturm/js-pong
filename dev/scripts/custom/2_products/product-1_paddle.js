class Paddle extends Shape {
    constructor (width, height, color) {
        super(width, height, color);
        this.width = width;
        this.height = height;
        this.color = color;        
        this.init();
        this.setTop();
        this.setLeft();
    }
    setTop (y) {
        this.top = pong.canvas.height - this.height;
    } 
    setLeft (x) {
        this.left = 0;
    }
}