// I keep this file to keep track of what I can learn from this project
// There are also two solutions and functions from Stackoverflow in _libs/check-within-circle.js
// furthermore the watch function came from Stackoverflow as well.

// This function makes it posible to .remove() an element, which removes it from the DOM.
// Came from:
// http://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

