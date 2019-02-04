var c = document.getElementById("playground");
var ctx = c.getContext("2d")
var drawn = false;
var prevX, prevY;

var butt = document.getElementById("clear")

butt.addEventListener('click', function(e) {
  if (drawn == true){
    // only if has stuff on canvas will it clear
  ctx.clearRect(0,0,600,600);
  console.log(e);
  drawn = false;
}
else{
  //prevents default function: wont clear if nothing to clear
  e.preventDefault()
  console.log("Can't clear! Nothing to be cleared!")
}
}
);

//click: main function to create circle and lines
c.addEventListener('click', function(e){
  var x = e.offsetX;
  var y = e.offsetY;
  ctx.fillStyle = "green"
  if (drawn == false){
    //prevents accumulation of pathways
    //(i.e., clicking three spots wont create triangle outline)
    prevX = x
    prevY = y
    drawn = true;
  }
  else{
    //only draws lines IF previously drawn before
    ctx.beginPath();
    ctx.moveTo(prevX,prevY)
    ctx.lineTo(x,y)
    ctx.stroke();
    //After drawing line, sets new prevX and prevY for the next
    //time someone clicks
    prevX = x
    prevY = y
  }
  //no matter what, a circle will be drawn when there is a click
  ctx.beginPath();
  ctx.ellipse(x,y, 15,15, 0,0, 2 * Math.PI);
  ctx.fill();
  })
