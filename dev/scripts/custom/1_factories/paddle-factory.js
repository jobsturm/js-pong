pong.paddleFactory = {};
pong.paddleFactory.settings = {
    width: 50, // px
    height: 50, // px
    color: "#d05151", // hex
    movementSpeedHorizontal: 10, // px
    weight: 2,
    layer: 2
};
pong.paddleFactory.init = () => {
    pong.paddle = new Paddle (pong.paddleFactory.settings.width, 
                              pong.paddleFactory.settings.height, 
                              pong.paddleFactory.settings.color, 
                              pong.paddleFactory.settings.weight,
                              pong.paddleFactory.settings.layer);
    pong.paddle.addToDrawList();
};
 