const ticks = [ 'Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité' ];

export const reverseData = array => array.slice(0).reverse();

// export const axisDomain = ([dataMin, dataMax]) => {
//   const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax));
//   return [-absMax, absMax];
// };

export const tickFormatter = tick => ticks[tick - 1];