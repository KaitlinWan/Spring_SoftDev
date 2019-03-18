//Kaitlin Wan
//SoftDev2 pd6
//K10 -- Connect the Dots
//2019-03-13w

var p = document.getElementById("vimage");
var c = document.getElementById("but_clear");
prev = 0;

var draw = function(e){

  var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", 20);
  dot.setAttribute("fill", "magenta");
  dot.setAttribute("stroke", "black");
  p.appendChild(dot)

  //if (prev != 0){
    //  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      //line.setAttribute("x1", prev.getAttribute( "cx" ) );
      //line.setAttribute("y1", prev.getAttribute("cy") );
      //line.setAttribute("x2", e.offsetX);
      //line.setAttribute("y2", e.offsetY);
      //line.setAttribute("stroke", "black");
      //p.appendChild(line);
    //}

    // Prev holds dot just added
    prev = dot
};


var clear = function(e) {
  while (p.lastChild) {
    p.removeChild(p.lastChild);
  }
  prev = 0
};



p.addEventListener('click', draw);
c.addEventListener("click", clear);
