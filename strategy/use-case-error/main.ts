import CalcRate from "./CalcRate";
import Order from "./Order";

async function init() {
    console.log('Calculando........');
    const order = new Order("Santander");
    const calc = new CalcRate();
    console.log('Total: ', await calc.calcRate(order));
    console.log('Calculo finalizado........');
}


init();