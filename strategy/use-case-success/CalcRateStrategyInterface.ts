import Order from "./Order";

export default interface CalcRateStrategyInterface {
    getCalcRateInteres(order: Order);
}