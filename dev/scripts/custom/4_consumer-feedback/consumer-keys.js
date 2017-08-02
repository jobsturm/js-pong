// KEYCODES
//  ^ = 38
//  < = 37
//  > = 39
//  V = 40

//  W = 87
//  A = 65
//  S = 68
//  D = 83

pong.keys = {
    left: false,
    top: false,
    right: false,
    down: false
};

const keyEvents = () => {
    window.addEventListener("keydown", (ev) => {
        // LEFT
        if (ev.keyCode === 65) pong.keys.left = true;
        // UP
        if (ev.keyCode === 87) pong.keys.up = true;
        // RIGHT
        if (ev.keyCode === 68) pong.keys.right = true;
        // BOTTOM
        if (ev.keyCode === 83) pong.keys.down = true;
    });
    window.addEventListener("keyup", (ev) => {
        // LEFT
        if (ev.keyCode === 65) pong.keys.left = false;
        // UP
        if (ev.keyCode === 87) pong.keys.up = false;
        // RIGHT
        if (ev.keyCode === 68) pong.keys.right = false;
        // BOTTOM
        if (ev.keyCode === 83) pong.keys.down = false;                           
    });
} 