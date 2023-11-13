
export default class Order {

    total: number;

    constructor(total: number) {
        this.total = total;
    }
    
    async getTotal() {
        return this.total;
    }
}