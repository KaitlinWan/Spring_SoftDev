var c = document.getElementById("slate");
var ctx = c.getContext("2d")
var drawn = false;

var draw = document.getElementById("draw")

draw.addEventListener('click', function(e) {
  ctx.fillStyle = "blue";
  ctx.fillRect(0,0,c.width,c.height);
})

var butt= document.getElementById("clear")

butt.addEventListener('click', function(e) {
  if (drawn == true){ // only if has stuff on canvas will it clear
  ctx.clearRect(0,0,600,300);
  console.log(e);
  drawn = false;
}
else{
  e.preventDefault()
  console.log("Can't clear! Nothing to be cleared!")
}
}
);

var dot = 0;

var toggle = document.getElementById("toggle")

toggle.addEventListener('click', function(e) {
if(dot==0){
  dot = 1;
  toggle.innerHTML = "Dot"
  console.log(dot);
}
else{
  dot = 0;
  toggle.innerHTML = "Rectangle"
  console.log(dot);
}
}
)

// var br = c.getBoundingClientRect()
// x = br.left
// y = br.top
c.addEventListener('click', function(e){
  if(dot==0){
    ctx.fillStyle = "red";
    ctx.fillRect(e.offsetX, e.offsetY, 30,30);
    drawn = true;
  }
  if(dot==1){
    ctx.fillStyle = "green"
    ctx.beginPath();
    ctx.ellipse(e.offsetX ,e.offsetY, 15,15, 0,0, 2 * Math.PI);
    ctx.fill();
    drawn = true;
  }
})
