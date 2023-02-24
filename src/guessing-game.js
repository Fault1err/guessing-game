class GuessingGame {
    constructor() {
        this.guessing;
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessing = Math.round((this.min + this.max) / 2);
        return this.guessing; 
    }

    lower() {
        this.max = this.guessing;
    }

    greater() {
this.min = this.guessing;
    }
}

module.exports = GuessingGame;
