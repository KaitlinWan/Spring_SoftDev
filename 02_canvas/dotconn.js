var c = document.getElementById("playground");
var ctx = c.getContext("2d")
var drawn = false;
var prevX, prevY;

var butt= document.getElementById("clear")

butt.addEventListener('click', function(e) {
  if (drawn == true){ // only if has stuff on canvas will it clear
  ctx.clearRect(0,0,600,600);
  console.log(e);
  drawn = false;
}
else{
  //prevents default function:wont clear if nothing to clear
  e.preventDefault()
  console.log("Can't clear! Nothing to be cleared!")
}
}
);

// var br = c.getBoundingClientRect()
// x = br.left
// y = br.top
c.addEventListener('click', function(e){
  if (drawn == false){
    ctx.fillStyle = "green"
    //prevents accumulation of pathways (i.e., clicking three spots wont create triangle outline)
    ctx.beginPath();
    ctx.ellipse(e.offsetX ,e.offsetY, 15,15, 0,0, 2 * Math.PI);
    ctx.fill();
    console.log(e.offsetX, e.offsetY)
    prevX = e.offsetX
    prevY = e.offsetY
    drawn = true;
  }
  else{
    ctx.beginPath();
    ctx.ellipse(e.offsetX ,e.offsetY, 15,15, 0,0, 2 * Math.PI);
    ctx.fill();
    ctx.lineTo(prevX,prevY)
    ctx.stroke();

    prevX = e.offsetX
    prevY = e.offsetY



  }
  })
