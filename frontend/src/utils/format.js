/**
 * Formats a number with comma separators.
 * @param { number } x - The number to format.
 * @returns { string } The formatted number as a string.
 */
export const formatNumber = x => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');