// Hamburger

//      Variables

var hamIconCont = document.getElementsByClassName("ham-icon");
var hamLines = document.getElementsByClassName("ham-icon"); // (3 lines)
var hamMenu = document.getElementById("ham-menu");
var menuOn = false;


for (let i = 0; i < hamIconCont.length; i++) {
  hamIconCont[i].addEventListener("click", function () {

    if (menuOn == false) {
      hamMenu.style.visibility = "visible";
      menuOn = true;
    }
    else {
      hamMenu.style.visibility = "hidden";
      menuOn = false;
  
    }

  })
}

// projects Hover

//    Variables

var projImgArray = document.getElementsByClassName("proj-img");
var projImgContainer = document.getElementsByClassName("proj-container");
var hoverButton = document.getElementsByClassName("hover-button");
var hoverBackground = document.getElementsByClassName("hover-text");




