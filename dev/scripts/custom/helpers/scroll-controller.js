var disableScroll = () => {
    var elements = document.querySelectorAll(".scroll-disable");
    
    elements.forEach((el) => {
        disableScrollOnElement(el);
    })
}

var disableScrollOnElement = (el) => {
    el.style.overflow = "hidden";
}

var enableScroll = () => {
    var elements = document.querySelectorAll(".scroll-disable");
    
    elements.forEach((el) => {
        enableScrollOnElement(el);
    })
}

var enableScrollOnElement = (el) => {
    el.style.overflow = "";
}