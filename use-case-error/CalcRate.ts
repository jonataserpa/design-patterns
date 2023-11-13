import Itau from "./Itau";
import Order from "./Order";
import Santander from "./Santander";

export default class CalcRate {

    bank: string;

    async calcRate(order: Order) {
        if (await order.getBank() === "Santander") {
            const bank = new Santander(order.bank);
            return bank.getRateInterest();
        } else if (await order.getBank() === "Itau") {
            const bank = new Itau(order.bank);
            return bank.getRateInterest();
        }
    }
}