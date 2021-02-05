/**
 * json-search.js
 * Ruslan Bessarab
 * 02.04.2021
 * This js file search for name in json object
 */

//Declaring JSON object
let people = [
    {
        name: "Ruslan Bessarab",
        sex: "m",
        born: "1999",
        died: "2099",
        father: "Evgenii Bessarab",
        mother: "Elena Bessarab"
    },
    {
        name: "Artem Zdorenko",
        sex: "m",
        born: "2004",
        died: "2099",
        father: "Nikolay Zdorenko",
        mother: "Lyubov Zdorenko"
    },
    {
        name: "Jane Doe",
        sex: "f",
        born: "1876",
        died: "1956",
        father: "Petreus de Milliano",
        mother: "Sophia van Damme"
    },
    {
        name: "Jane Ramirez",
        sex: "f",
        born: "1102",
        died: "-",
        father: "Themistocles Merovech",
        mother: "Amara Floro"
    },
    {
        name: "James Bond",
        sex: "m",
        born: "1904",
        died: "1999",
        father: "Kail Bond",
        mother: "Olga Bond"
    },
];

//declaring result and button
let results = document.getElementById("results");
let button = document.getElementById("button");

//when button is clicked, check for similar name from input with json data
button.onclick = input;

//checks user's input and compare to json data
function input() {
    //clear function for emptying h4 tag
    clear();
    let input = document.getElementById("input").value;

    //array for putting name there
    let test = [];
    for(person of people) {
        if(person.name.toLowerCase().includes(input.toLowerCase())) {
            results.innerHTML += ("Name: " + person.name + "<br>");
            results.innerHTML += ("Sex: " + person.sex + "<br>");
            results.innerHTML += ("Born: " + person.born + "<br>");
            results.innerHTML += ("Died: " + person.died + "<br>");
            results.innerHTML += ("Father: " + person.father + "<br>");
            results.innerHTML += ("Mother: " + person.mother + "<br><br>");
            test.push(person.name);
        }
    }
    //if there is no name in array, display a message
    if(test.length == 0) {
        results.innerHTML = "No person found.";
    }
}

function clear() {
    results.innerHTML = "";
}