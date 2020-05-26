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
let newList;
let listView;
let sections;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
listView = document.getElementById("navbar__list");
sections = document.getElementsByTagName("section");
// Add links
for (i = 0; i < sections.length; i++) {
   newList = document.createElement("li");
  newList.innerHTML =
    '<a href ="#" class="menu__link " data-section="' +
    sections[i].getAttribute("id") +
    '">' +
    sections[i].getAttribute("id") +
    "</a>";
     listView.appendChild(newList);
}


// to hide and show NavBar//
navScroll = window.pageXOffset;
let timer = null;

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
    header.onmouseover = function (){
        console.log("mouseover");
        if (timer !== null) {
            clearTimeout(timer);
          }
        this.style = "display: absolute;";
    };
    timer = setTimeout(function () {
      header.style = "display: none;";
    }, 800);
  }

};

// Add class 'active' to section when near top of viewport

// Add listener
let scrollFun = function (e) {
    e.preventDefault();
   let sec_id = this.getAttribute("data-section");
    let sec = document.getElementById(sec_id);
    sec.scrollIntoView();
    // Set class active
    sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++){
     sections[i].classList.remove("your-active-class") 
     sec.classList.add('keyframes');
     sec.classList.add("your-active-class");
    }
    return false;
  };
  let elements = document.getElementsByClassName("menu__link");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", scrollFun, false);
}

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin EventsscrollIntoView
 * 
*/

// Build menu 
// duild New Section
let str='<section id="section4" data-nav="Section 4">';
          str+=  '<div class="landing__container>';
             str+= '<h2>Section </h2>';
               str+='<ol><li>One</li><li>Two</li><li>Three</li><li>Four</li><li>Five</li></ul></div></section>';

document.getElementsByTagName('main').appendChild(str);

// Scroll to section on link click

// Set sections as active

