export const getVW = target => {
  const context = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  return (target * context) / 1440;
};