class Stomp {
    constructor (damage) {
    }
    startStomp () {
        if (this.storage.jump.jumping === false) return "not jumping";
        console.log("STOMP, in the name of love");
    }
}