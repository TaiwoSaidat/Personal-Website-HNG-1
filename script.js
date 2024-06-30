
class sample {
    constructor(trial) {
        this.trial = trial; 
    }
    
    start() {
    console.log(this.trial + " is starting")
    }
}

let mySample = new sample("TaiwoSaidat")

mySample.start();