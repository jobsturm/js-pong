const pong = {};

const loaded = () => {
    pong.target = document.getElementsByClassName("canvas-holder")[0];
    pong.fpsTarget = document.getElementsByClassName("fps")[0];
    pong.canvas = new CanvasElement(pong.target);
    pong.canvas.place();
    pong.paddleFactory.init();
    mouseEvents();
    keyEvents();
    startLoop();
    watchList();
}