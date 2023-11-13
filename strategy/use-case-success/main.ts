import CalcRate from "./CalcRate";
import Itau from "./Itau";
import Order from "./Order";
import Santander from "./Santander";

async function init() {
    console.log('Calculando........');
    const order = new Order(10);
    const bank = new Itau();
    const calc = new CalcRate(bank);
    console.log('Total: ', await calc.calcRate(order));
    console.log('Calculo finalizado........');
}


init();