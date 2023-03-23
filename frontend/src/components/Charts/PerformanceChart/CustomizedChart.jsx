/**
 * An array of strings representing the ticks to be displayed on the chart.
 * 
 * @type {Array<string>}
 */
const ticks = [ 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité' ];

/**
 * Returns a new array with the elements in reverse order.
 * 
 * @param {Array} array - The array to be reversed.
 * @returns {Array} A new array with the elements in reverse order.
 */
export const reverseData = array => array.slice(0).reverse();

/**
 * Returns the string representing the tick at the given index.
 * 
 * @param {number} tick - The index of the tick to be formatted.
 * @returns {string} The string representing the tick at the given index.
 */
export const tickFormatter = tick => ticks[tick - 1];