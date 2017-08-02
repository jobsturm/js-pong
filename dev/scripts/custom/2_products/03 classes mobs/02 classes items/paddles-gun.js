class Gun extends Shape {
    constructor (width, height, color, ammo, reloadSpeed, fireRate) {
        super(width, height, color);
        
        this.ammo = ammo;
        this.reloadSpeed = reloadSpeed;
        this.fireRate = fireRate;
    }
}