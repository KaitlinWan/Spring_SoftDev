//Kaitlin Wan
//SoftDev2 pd6
//K10 -- Connect the Dots
//2019-03-13w

var p = document.getElementById("vimage");
var c = document.getElementById("but_clear");
var m = document.getElementById("but_move");
var k = document.getElementById("switch");
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

var animate = function() {
  window.cancelAnimationFrame(requestID);
  var i;
  var children = p.children;
  for (i = 0; i < children.length; i++) {
    var circle = children[i];
    var r = circle.getAttribute("r");
    var cx = parseInt(circle.getAttribute("cx")) + parseInt(circle.getAttribute("xVel"));
    var cy = parseInt(circle.getAttribute("cy")) + parseInt(circle.getAttribute("yVel"));
    var xVel = parseInt(circle.getAttribute("xVel"));
    var yVel = parseInt(circle.getAttribute("yVel"));

    if (cx > p.getAttribute("width") - r || cx < r) circle.setAttribute("xVel", xVel * -1);
    if (cy > p.getAttribute("height") - r || cy < r) circle.setAttribute("yVel", yVel * -1);

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
  }
  requestID1 = window.requestAnimationFrame(animate);
};

m.addEventListener('click', animate);

var clear = function(e) {
  while (p.lastChild) {
    p.removeChild(p.lastChild);
  }
  prev = 0
};


var switchC = function(e){

  var dots = p.children;
  var i;
  for (i = 0; i < dots.length; i++) {
    var d = dots[i];
    color = d.getAttribute("fill")

    if (color == "red") {
      d.setAttribute("fill", "green")
    }
    else{
      d.setAttribute("fill", "red")
    }

}
}


p.addEventListener('click', draw);
c.addEventListener("click", clear);
k.addEventListener('click', switchC);
