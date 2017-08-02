const mouseEvents = () => {
    window.addEventListener("mousemove", (ev) => {
        pong.mouseX = ev.offsetX;
        pong.mouseY = ev.offsetY;
    });
};