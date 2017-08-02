const mouseEvents = () => {
    window.addEventListener("mousemove", (ev) => {
        pong.mouseX = ev.offsetX;
        pong.mouseY = ev.offsetY;
    });
    window.addEventListener("mousedown", (ev) => {
        pong.mouseDown = true;
    });
    window.addEventListener("mouseup", (ev) => {
        pong.mouseDown = false;
    });
};