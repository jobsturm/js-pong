class Shape {
    constuctor (width, height, color, layer, angle, centerTop, centerLeft) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.layer = layer;
        this.angle = angle;
        this.centerLeft = centerLeft || width / 2;
        this.centerTop  = centerTop || height / 2;    
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
    
    // add to draw list
    addToDrawList () {
        const self = this;
        pong.shapes.push({
            shape: this,
            layer: this.layer
        });
        
        // move this later, because right now it's inefficient
        pong.shapes.sort(layer);
    }    
} 