// get the button elements 
// document is the log 
// use css selector 
var onButton = document.querySelector('button[name="on"]');
var offButton = document.querySelector('button[name="off"]');

// log the elements to the console
console.log(onButton);
console.log(offButton);

// get the lightbulb element
var lightbulb = document.querySelector('.lightbulb');

// log element to the console again
console.log(lightbulb);



// add event listener to on button
onButton.addEventListener('click', () => {

    // add the is-on class to lightbulb element
lightbulb.classList.add('is-on');

});

//add event listener to off button
offButton.addEventListener('click', () => {

//REMOVE add class element
    lightbulb.classList.remove('is-on');


})