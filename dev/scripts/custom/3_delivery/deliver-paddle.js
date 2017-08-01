const deliverPaddle = () => {
    pong.canvas.ctx.beginPath();
    pong.canvas.ctx.rect(pong.paddle.left, pong.paddle.topCanvas, pong.paddle.width, pong.paddle.height);
    pong.canvas.ctx.fillStyle = pong.paddle.color;
    pong.canvas.ctx.fill();
}