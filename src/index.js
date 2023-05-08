import "./styles.css";
console.log("hello....");
const canvas = document.getElementById("canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");

  ctx.fillRect(10, 10, 300, 300);
  ctx.clearRect(50, 50, 50, 50);
  ctx.fillRect(5, 5, 60, 60);
  ctx.clearRect(25, 25, 50, 50);

  ctx.strokeRect(30, 30, 30, 30);
  ctx.clearRect(0, 0, 500, 500);
}
