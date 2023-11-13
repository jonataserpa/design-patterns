export default class Itau {

    bank: string;

    constructor(bank: string) {
        this.bank = bank;
    }
    
    async getRateInterest() {
        return 20;
    }
}