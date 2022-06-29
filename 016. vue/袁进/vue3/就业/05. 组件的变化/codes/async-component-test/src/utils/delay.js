import getRandom from "./getRandom"

export default (duration = getRandom(1000, 3000)) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  })
}