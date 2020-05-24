/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let showThis = true;
let li;
let navScroll;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//to hide and show section//
function showSection() {
  if (document.getElementById("section0").click) {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
  } else if (document.getElementById("section2").click) {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section3").style.display = "none";
  } else {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
  }
  showSection();
}

/*****/
// to hide and show NavBar//
navScroll = window.pageXOffset;
var timer = null;

window.onscroll = function () {
  

  var header = document.getElementsByClassName("page__header")[0];
  if (timer !== null) {
    clearTimeout(timer);
  }
  console.log(window.scrollY);
  if (window.scrollY == 0) {
    header.style = "display: block;";
  } else {
    header.style = "display: absolute;";
    header.onmouseover = function(){
        console.log("mouseover");
        if (timer !== null) {
            clearTimeout(timer);
          }
        this.style = "display: absolute;";
    };
    timer = setTimeout(function () {
      header.style = "display: none;";
    }, 1000);
  }

  //   navScroll = currentScroll;
};



// sections collapsible

let secColla = document.getElementsByClassName("landing__container");
let i;

for (i = 0; i < secColla.length; i++) {
  secColla[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

var listView = document.getElementById("navbar__list");
var sections = document.getElementsByTagName("section");
// Add links
for (i = 0; i < sections.length; i++) {
  var newList = document.createElement("li");
  newList.innerHTML =
    '<a href ="#" class="nav-link" data-section="' +
    sections[i].getAttribute("id") +
    '">' +
    sections[i].getAttribute("id") +
    "</a>";
  listView.appendChild(newList);
}

// Add listener
var scrollFun = function (e) {
  e.preventDefault();
  var sec_id = this.getAttribute("data-section");
  var sec = document.getElementById(sec_id);
  sec.scrollIntoView();
  // Set class active
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++)
    sections[i].classList.remove("active");
  sec.classList.add("active");
  
  // window.location = "#" + sec_id;
  return false;
};
//
var elements = document.getElementsByClassName("nav-link");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", scrollFun, false);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

