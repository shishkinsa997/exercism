/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * @param {number | undefined} num
 */
export const cookingStatus = (num) => {
  return num === 0 ? 'Lasagna is done.' : !num ? 'You forgot to set the timer.' : 'Not done, please wait.'
}
/**
 * @param {string[]} layers
 * @param {number | undefined} time
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}
/**
 * @param {string[]} layers
 */

export const quantities = function (layers) {
  return {
    noodles: layers.filter((el) => el === 'noodles').length * 50,
    sauce: layers.filter((el) => el === 'sauce').length * 0.2,
  };
}
/**
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList.at(-1))
}
/**
 * @param {Record<string, number>} recipe
 * @param {Number} count
 */
export const scaleRecipe = (recipe, count = 2) => {
  const copy = {...recipe};
  for (let key in copy) {
    copy[key] *= count;
    copy[key] /= 2;
  }
  return copy;
}