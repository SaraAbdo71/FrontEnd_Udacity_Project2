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
let showThis=true;
let li;

let navSroll;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//to hide and show section//
function showSection ()
{
    if(document.getElementById('section1').click){
        document.getElementById('section2').style.display='none' ;
        document.getElementById('section3').style.display='none';
    }
    else if(document.getElementById('section2').click)
    {
        document.getElementById('section1').style.display='none' ;
        document.getElementById('section3').style.display='none';
    }
    else{
        document.getElementById('section1').style.display='none' ;
        document.getElementById('section2').style.display='none';
    }

}
showSection();

/*****/
// to hide and show NavBar//
navSroll= window.pageXOffset;
window.onscroll= function(){
    let currentScroll= window.pageXOffset;
    if(navSroll > currentScroll){
        document.querySelector('.page__heaer').style.top ='0';
    }
    else {
        document.querySelector('.page__heaer').style.top ='-50px';
   }
   navSroll =currentScroll;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createListItem(text) {
    li = document.createElement('li');
    li.textContent=text;
    return li;
}
console.log(li);

function appendChildren (parent, childern){
    childern.forEach(function (child){
        parent.appendChild(child);
    });
    }
    console.log(appendChildren);

    const myList =document.getElementById('navbar__list');
    let items= [
        createListItem=('First'),
        createListItem=('Second'),
        createListItem=('Third')
    ];

    appendChildren(myList,items);

    createListItem.setAttribute('id','section1');

    console.log( createListItem);
    console.log(appendChildren(mylist,items));

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


