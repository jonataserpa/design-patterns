
export default class Order {

    bank: string;

    constructor(bank: string) {
        this.bank = bank;
    }
    
    async getBank() {
        return this.bank;
    }
}