//Kaitlin Wan
//SoftDev2 pd6
//K10 -- Connect the Dots
//2019-03-13w

var p = document.getElementById("vimage");
var c = document.getElementById("but_clear");
var requestID = 0;
prev = 0;

var draw = function(e) {
  var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", 20);
  dot.setAttribute("fill", "red");
  dot.setAttribute("stroke", "black");
  p.appendChild(dot)
  prev = dot

  dot.addEventListener('click', function(e) {
    //e.preventDefault();
    if (dot.getAttribute("fill") == "red") {
      dot.setAttribute("fill", "green");
    } else {
      p.removeChild(e.target);
      var x = Math.floor(Math.random() * p.getAttribute("width"));
      var y = Math.floor(Math.random() * p.getAttribute("height"));
      draw(x, y)
    }
    e.stopPropagation();
  })

};


var clear = function(e) {
  while (p.lastChild) {
    p.removeChild(p.lastChild);
  }
  prev = 0
};

p.addEventListener('click', draw);
c.addEventListener("click", clear);
