export default class Santander {

    bank: string;

    constructor(bank: string) {
        this.bank = bank;
    }
    
    getRateInterest() {
        return 10;
    }
}