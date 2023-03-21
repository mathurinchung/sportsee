/**
 * Calculates the viewport width (in pixels) for a given target width (in pixels) assuming a 1440px viewport width.
 * @param { number } target - The target width (in pixels).
 * @returns { number } The viewport width (in pixels).
 */
export const getVW = target => {
  const context = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  return (target * context) / 1440;
};