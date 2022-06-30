import getRandom from "./getRandom";
const root = document.getElementById("root");
setInterval(() => {
  root.style.background = `rgba(
    ${getRandom(100, 255)},
    ${getRandom(100, 255)},
    ${getRandom(100, 255)},
    ${Math.random()})`;
}, 66);
