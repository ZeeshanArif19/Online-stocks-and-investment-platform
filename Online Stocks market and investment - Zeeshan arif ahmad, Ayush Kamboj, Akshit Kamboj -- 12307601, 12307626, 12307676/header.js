window.onscroll = function() {myFunction()};

var header = document.getElementById("sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("navigation");
  } else {
    header.classList.remove("navigation");
  }
}