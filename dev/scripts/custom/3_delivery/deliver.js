const deliver = (shape) => {
    pong.canvas.ctx.beginPath();
    drawRotatedRect(shape.left, shape.topCanvas, shape.width, shape.height, shape.angle, shape.centerLeft, shape.centerTop);
    pong.canvas.ctx.fillStyle = shape.color;
    pong.canvas.ctx.fill();
}


const drawRotatedRect = (x,y,width,height,degrees,centerLeft, centerTop) => {
    if (!centerLeft) centerLeft = width / 2;
    if (!centerTop) centerTop = height / 2;
    // first save the untranslated/unrotated context
    pong.canvas.ctx.save();

    pong.canvas.ctx.beginPath();
    // move the rotation point to the center of the rect
    pong.canvas.ctx.translate( x+centerLeft, y+centerTop );
    // rotate the rect
    pong.canvas.ctx.rotate(degrees*Math.PI/180);

    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    pong.canvas.ctx.rect( -centerLeft, -centerTop, width,height);

    pong.canvas.ctx.fillStyle="gold";
    pong.canvas.ctx.fill();

    // restore the context to its untranslated/unrotated state
    pong.canvas.ctx.restore();

}
