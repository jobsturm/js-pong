const deliver = (shape) => {
    pong.canvas.ctx.beginPath();
    pong.canvas.ctx.rect(shape.left, shape.topCanvas, shape.width, shape.height);
    pong.canvas.ctx.fillStyle = shape.color;
    pong.canvas.ctx.fill();
}