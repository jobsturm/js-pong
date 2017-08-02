class Gun extends Ranged {
    constructor (data) { 
        super(data);
        this.usedBy = data.usedBy;
        this.type = "Gun";
        this.setTarget();
    }
} 