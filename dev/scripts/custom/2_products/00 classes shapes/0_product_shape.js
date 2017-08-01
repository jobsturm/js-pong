class Shape {
    constuctor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.init();
    }
    init () {
        this.setWidth(this.width);
        this.setHeight(this.height);
        this.setColor(this.color);
    } 
    
    // base-down functions
    setTop (y) {
        this.top = y;
        this.topCanvas = pong.canvas.height - y - this.height;
    } 
    setLeft (x) {
        this.left = x;
    }
    
    setWidth (width) {
        this.width = width;
    }
    setHeight (height) {
        this.height = height;
    }
    setColor (color) {
        this.color = color;
    }
} 