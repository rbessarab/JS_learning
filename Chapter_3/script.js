/*
Ruslan Bessarab
script.js
 */

//declaring variable to access them later
let button = document.getElementById("button");
let input = document.getElementById("number");
let result = document.getElementById("results");

//call the function when button is clicked
button.onclick = heeHaw;

//checks if the input is positive integer
//and prints values from 0 to user's number
function heeHaw() {
    let userNumber = input.value;
    //validating input
    if(userNumber < 0 || isNaN(userNumber)) {
        result.innerHTML = "Positive Integer Required";
    }
    else {
        result.textContent = "";
    }

    //based on input prints values
    for (let i = 1; i <= userNumber; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            result.innerHTML += "Hee Haw!<br>";
        }
        else if(i % 3 == 0) {
            result.innerHTML += "Hee!<br>";
        }
        else if(i % 5 == 0) {
            result.innerHTML += "Haw!<br>";
        }
        else {
            result.innerHTML += (i + "<br>");
        }
    }
}