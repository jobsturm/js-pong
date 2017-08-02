class Equipment extends Shape {
    constructor (data) {
        super(data.width, data.height, data.color, data.layer, data.angle, data.centerTop, data.centerLeft);
        this.name   = data.name;
        this.width  = data.width;
        this.height = data.height;
        this.color  = data.color;
        this.layer  = data.layer;
        this.angle  = data.angle;
        this.centerLeft = data.centerLeft || this.width / 2;
        this.centerTop  = data.centerTop || this.height / 2;        
        
        this.mob        = data.mob;
        this.type       = data.type;
        this.offsetLeft = data.offsetLeft;
        this.offsetTop  = data.offsetTop;
        this.addToDrawList();
    } 
    
    update () {
        this.setLeft(this.mob.left + this.offsetLeft);
        this.setTop(this.mob.top + this.offsetTop);
    }
}