var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");
var div = document.getElementById("planets1");

function output(planetArr) {
planetArr.forEach (function(planet){
    el.innerHTML += `<div>${planet}</div>`;
});}

let uppers = planets.map(function(planets) {
    return planets.charAt(0).toUpperCase() + planets.slice(1);
 });
 let newPlanet = planets.filter(function(planets){
     return planets.includes("e")
    
    });
    //output(newPlanet);

 el.innerHTML = `<div>${uppers}</div>`;
 div.innerHTML = `<div>${newPlanet}</div>`;

 var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"].reduce(function(previous, current){
    return previous + " " + current;
 });

 console.log(words);





console.log(uppers);
console.log(newPlanet);





 //Use the forEach method to add the name of each planet
 //to a div element in your HTML with an id of "planets".

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

//var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];