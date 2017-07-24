// Made by Job Sturm.
// this script is written to fix the 100vh viewport annoyance.
// let's say the browser window scales on mobile, there is a
// jump that happens. Which we don't want. There for we lock the height.

var heightFixSettings = {
    selector: "data-fix-height"
}

class HeightElement {
    constructor (el) {
        this.el = el;
        this.vh = this.el.getAttribute(heightFixSettings.selector);
        this._getPixelHeight();
        this._applyHeight();
    }
    _getPixelHeight () {
        this.pixelHeight = window.innerHeight * (this.vh / 100);
    }
    _applyHeight () {
        this.el.style.height = this.pixelHeight + "px";
    }
}

class HeightFix {
    constructor () {
        // settings
        this.selector = "[" + heightFixSettings.selector + "]";
        this._get();
        this._sendElements();
        this._bindEvents();
    }
    _get () {
        this.elements = document.querySelectorAll(this.selector);   
    }
    _sendElements () {
        this.elements.forEach(this._setHeight);
    }
    _setHeight (el) {
        el.fixHeight = new HeightElement(el);
    }
    _bindEvents () {
        window.addEventListener("resize", () => {
           this._sendElements(); 
        });
    }
}