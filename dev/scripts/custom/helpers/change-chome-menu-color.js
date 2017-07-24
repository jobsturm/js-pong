var setChromeMenuColor = (color) => {
//    <meta name="theme-color" content="#DC3522" />
    var currentMeta = document.querySelectorAll("meta[name='theme-color']")[0];
    currentMeta.remove();
    
    var head = document.getElementById("head");
    var newMetaTag = `<meta name="theme-color" content="${color}" />`;
    var htmlMetaTag = document.createElement("div");
    htmlMetaTag.innerHTML = newMetaTag;
    htmlMetaTag = htmlMetaTag.firstElementChild;
    
    head.appendChild(htmlMetaTag);
}