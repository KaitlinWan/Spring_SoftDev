var canvas = document.getElementById('slate');
console.log(canvas)
var ctx = canvas.getContext('2d');
console.log(ctx);
var box = true;
var circle = false;


function erase() {
  var canvas = document.getElementById('slate');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 600, 600);
  //document.getElementById("slate").style.display = "none";
}

function tog() {
  if (box) {
    box = false;
    circle = true;
    console.log("box: " + box)
    console.log("circle " + circle)
  } else {
    circle = false;
    box = true;
    console.log("box: " + box)
    console.log("circle " + circle)
  }
}


canvas.addEventListener("click", function (point) {
  console.log(point);
  var r = canvas.getBoundingClientRect();
  var x = point.clientX - r.left;
  var y = point.clientY - r.top;
  if (box === true) {
    ctx.fillRect(x - 25, y - 25, 5, 5);
  }
  else {
    ctx.beginPath();
    ctx.ellipse(point.clientX - canvas.offsetLeft, point.clientY - canvas.offsetTop , 3, 3, 0, 0, 2 * Math.PI);
    ctx.fill();
  }
})
