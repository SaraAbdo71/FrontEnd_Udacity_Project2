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
let sec = document.getElementById;
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
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
}

// build Section
function createSection4() {
  let secMain = document.getElementById("Fmain");
  let secAdd = document.createElement("section");
  let hAdd = document.createElement("h2");
  let divAdd = document.createElement("div");
  let pAdd = document.createElement("p");
  secAdd.setAttribute("id", "section4");
  secAdd.setAttribute("data-nav", "Section 4");
  divAdd.classList.add("landing__container");
  hAdd.innerHTML = "Section 4";
  pAdd.appendChild(
    document.createTextNode(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti."
    )
  );
  divAdd.appendChild(hAdd);
  divAdd.appendChild(pAdd);
  secAdd.appendChild(divAdd);
  secMain.appendChild(secAdd);
}

// build the nav
listView = document.getElementById("navbar__list");
sections = document.getElementsByTagName("section");

function createNavBar() {
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
}

createSection4();
createNavBar();

// to hide and show NavBar//
navScroll = window.pageXOffset;
let timer = null;

window.onscroll = function () {
  var items = document.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    var elementTarget = document.getElementById("section" + (i + 1));
    if (
      // to set active class to nav item with section
      window.scrollY >= elementTarget.offsetTop - 10 &&
      window.scrollY < elementTarget.offsetTop + elementTarget.offsetHeight - 10
    ) {
      items[i].classList.add("active1");
      elementTarget.classList.add("your-active-class");
    } else {
      items[i].classList.remove("active1");
      elementTarget.classList.remove("your-active-class");
    }
  }

  /**
   * Heaer display toggle
   */
  var header = document.getElementsByClassName("page__header")[0];
  if (timer !== null) {
    clearTimeout(timer);
  }
  if (window.clientY < 50) {
    header.style = "display: block;";
  } else {
    header.style = "display: absolute;";
    header.onmouseover = function () {
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
window.onmousemove = function (e) {
  if (e.clientY < 50) {
    var header = document.getElementsByClassName("page__header")[0];
    header.style = "display: block;";
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
  var sections = document.getElementsByTagName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("your-active-class");
    sec.classList.add("keyframes");
    sec.classList.add("your-active-class");
  }
  return false;
};
let elements = document.getElementsByClassName("menu__link");
for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", scrollFun, false);
}

/**
 * End Main Functions
 * Begin EventsscrollIntoView
 *
 */


