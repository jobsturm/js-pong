class Gun extends Equipment {
    constructor (width, height, color, ammo, reloadSpeed, fireRate) {
        super(width, height, color, layer);
        
        this.ammo = ammo;
        this.reloadSpeed = reloadSpeed;
        this.fireRate = fireRate;
    }
}