  /**
 * Creates a new array with the first and last elements of the original array moved
 * to the end and beginning, respectively.
 *
 * @param { Array } data - The original array to modify.
 * @returns { Array } - A new array with the modified elements.
 */
export const newArray = array => [ { type: 'fictional', ...array[array.length - 1] }, ...array, { type: 'fictional', ...array[0] } ];