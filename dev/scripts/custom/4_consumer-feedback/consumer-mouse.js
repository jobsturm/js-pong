const mouseEvents = () => {
    window.addEventListener("mousemove", (ev) => {
        pong.mouseX = ev.offsetX;
        
        if (pong.mouseX < 0) {
            pong.mouseX = 0;
        }
        
        // shootin stuff here
    });
};