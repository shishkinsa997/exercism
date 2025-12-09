/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const PIZZAS = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
}

const EXTRAS = {
  ExtraSauce: 1,
  ExtraToppings: 2,
}
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    return PIZZAS[pizza];
  }
  const lastExtra = extras.pop();
  return EXTRAS[lastExtra] + pizzaPrice(pizza, ...extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  // return pizzaOrders.reduce((acc, curr) => {
  //   return acc + pizzaPrice(curr.pizza, ...curr.extras);
  // }, 0);
  let total = 0;
  for (let i = 0; i < pizzaOrders.length; i++) {
    const order = pizzaOrders[i];
    total += pizzaPrice(order.pizza, ...order.extras);
  }
  return total;
}
