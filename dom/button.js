// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");
// const box = document.querySelector(".box");

// let colorInterval;

// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// startBtn.addEventListener("click", () => {
//   if (!colorInterval) {
//     colorInterval = setInterval(() => {
//       box.style.backgroundColor = getRandomColor();
//     }, 500);
//   }
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(colorInterval);
//   colorInterval = null;
// });

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const box = document.querySelector(".box");

let colorInterval;

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  };

  startBtn.addEventListener("click",()=>{
if(!colorInterval){
   colorInterval= setInterval(()=>{
box.style.backgroundColor=getRandomColor()

  },300)
}
  })
  stopBtn.addEventListener("click",()=>{
    clearInterval(colorInterval)
    colorInterval=null;
  })

