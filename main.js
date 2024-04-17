const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const r = 50;

function init() {
  drawHexagon(r, r);
}
init();

function drawHexagon(x, y) {
  ctx.beginPath();
  ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = "rgba(0, 0, 155, 0.8)";
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.globalCompositeOperation = "source-out";
}
