const getRandom = (min, max) => {
  return Math.round((max - min) * Math.random() + min)
}
// window.getRandom = getRandom;
export default getRandom;