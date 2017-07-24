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