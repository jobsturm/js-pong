// KEYCODES
//  < = 37
//  ^ = 38
//  > = 39
//  V = 40

pong.keys = {
    left: false,
    top: false,
    right: false,
    down: false
};

const keyEvents = () => {
    window.addEventListener("keydown", (ev) => {
        // LEFT
        if (ev.keyCode === 37) pong.keys.left = true;
        // TOP
        if (ev.keyCode === 38) pong.keys.up = true;
        // RIGHT
        if (ev.keyCode === 39) pong.keys.right = true;
        // BOTTOM
        if (ev.keyCode === 40) pong.keys.down = true;
    });
    window.addEventListener("keyup", (ev) => {
        // LEFT
        if (ev.keyCode === 37) pong.keys.left = false;
        // TOP
        if (ev.keyCode === 38) pong.keys.up = false;
        // RIGHT
        if (ev.keyCode === 39) pong.keys.right = false;
        // BOTTOM
        if (ev.keyCode === 40) pong.keys.down = false;                            
    });
} 