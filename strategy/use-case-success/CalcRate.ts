import CalcRateStrategyInterface from "./CalcRateStrategyInterface";
import Itau from "./Itau";
import Order from "./Order";
import Santander from "./Santander";

export default class CalcRate {

    calc;

    constructor(calcRateStrategyInterface: CalcRateStrategyInterface) {
        this.calc = calcRateStrategyInterface;
    }

    async calcRate(order: Order) {
        return this.calc.getCalcRateInteres(order);

    }
}