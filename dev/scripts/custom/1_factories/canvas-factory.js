class CanvasElement {
    constructor (targetElement) {   
        this.targetElement = targetElement;
        this.width = targetElement.offsetWidth;
        this.height = targetElement.offsetHeight;
        this.targetElement = targetElement;
        const self = this;
        window.addEventListener("resize", () => {this.resize()});
    }

    create () {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");
    }
    
    place () {
        if (this.canvas === undefined) this.create();
        this.targetElement.appendChild(this.canvas);
    }
    
    resize () {
        this.width = this.targetElement.offsetWidth;
        this.height = this.targetElement.offsetHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;        
    }
}