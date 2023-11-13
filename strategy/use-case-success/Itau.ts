import CalcRateStrategyInterface from "./CalcRateStrategyInterface";
import Order from "./Order";

export default class Itau implements CalcRateStrategyInterface {

    async getCalcRateInteres(order: Order) {
        return await order.getTotal() * 20;
    }
}