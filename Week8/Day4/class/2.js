class TV {
    constructor(brand, channel=1, volume=50) {
        this.brandTV = brand;
        this.channelTV = channel;
        this.volumeTV = volume
    }

    increase() {
        this.volumeTV += 1
    }

    decrease() {
        this.volumeTV -= 1
    }

}

const LG = new TV('LG')
LG.increase()
console.log(LG)

class smartTV extends TV {
    constructor(brand, channel, volume, Netflix=true) {
        super(brand, channel, volume);
        this.Netflix = Netflix
    }

    increase() {
        this.volumeTV += 10
    }

}

