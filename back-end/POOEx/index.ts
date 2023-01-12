import Client from "./Client";
import Item from "./Item";
import Order from "./Order";



const client = new Client('João');

const coxinha = new Item('Coxinha', 2);
const donut = new Item('donut', 3);
const pizzaSlice = new Item('Pizza Slice', 5);

const order = new Order(client, [coxinha, donut, pizzaSlice], 'dinheiro', 0.5);

console.log(order)
console.log('Soma dos pedidos', order.sumOrder());
console.log('Preço final com disconto', order.totalDiscount());