pong.paddleFactory = {};
pong.paddleFactory.settings = {
    width: 50,
    height: 10,
    color: "#d05151"
};
pong.paddleFactory.init = () => {
    pong.paddle = new Paddle (pong.paddleFactory.settings.width, pong.paddleFactory.settings.height, pong.paddleFactory.settings.color);
};
 