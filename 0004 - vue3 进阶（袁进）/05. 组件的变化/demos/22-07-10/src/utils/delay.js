import getRandom from "./getRandom";

function delay(duration = getRandom(1000, 3000)) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

export default delay;