console.log("working");
//Q1. access element having id  name as text
let element1 = document.getElementById("text");
console.log(element1);

//Q2. access element having tagnama h1
let element2 = document.getElementsByTagName("h1");
console.log(element2);

//Q3. access element having class name as box
let element3 = document.getElementsByClassName("box");
console.log(element3);

//Q4.change hello to hello world

let element4 = document.getElementById("hello");
element4.innerText = "Hello World";

//Q5. change direction of card 
function changeDirection(){
    let element5 = document.getElementsByClassName("flex-container");
    element5[0].style.flexDirection = "column";
}