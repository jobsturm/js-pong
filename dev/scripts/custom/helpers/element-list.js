class ElementList {
    constructor (elementSelectors) {
        this.elementSelectors = elementSelectors;
        this.elementsByName = {};
        if (elementSelectors) this.getElements();
    }
    
    getElements () {
        for (elementData of this.elementSelectors) {
            this.elementsByName[elementData.name] = document.querySelectorAll(elementData.selector)[0];
        }
    }
}