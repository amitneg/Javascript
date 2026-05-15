let interval;

const startBtn = document.querySelector(".left button");
const stopBtn = document.querySelector(".Right button");
const box = document.querySelector(".box");

function randomColor() {
  const letters = "0123456789abcdef";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour;
}

startBtn.addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(() => {
   box.style.backgroundColor = randomColor();
  }, 300);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});