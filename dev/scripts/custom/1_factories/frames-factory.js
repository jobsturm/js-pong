pong.fps = 0;

const startLoop = () => {
    pong.frameNumber = 0;
    pong.fpsCount = 0;
    frame();
    
    setInterval(() => {
        pong.fps = pong.fpsCount;
        pong.fpsCount = 0;
        pong.drawCanvasData();
    }, 1000);
}

// everything that needs updating will be in here:
const frame = () => {
    window.requestAnimationFrame(() => {
        pong.frameNumber += 1;
        pong.fpsCount += 1;
        pong.canvas.ctx.clearRect(0, 0, pong.canvas.width, pong.canvas.height);
        
        // updates
        pong.paddle.update();
        
        // delivery
        deliverPaddle();
        
        // frame again!
        frame();
    });
}