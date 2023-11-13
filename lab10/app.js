"use strict";

let formEl = document.getElementById("container");
formEl.addEventListener("submit",handleSubmit);

function handleSubmit (e){
    e.preventDefault()
    let personName = e.target.query.value;
    console.log(personName)
    fetch(`https://api.agify.io/?name=${personName}`) 
    .then(response => response.json())
    .then(data => render(data)) 
    .catch(error => console.error(error));
}

function render (value) {
    let divEl = document.getElementById("big")
//    let headEl = document.createElement("h2")
//     headEl.textContent = value
//     divEl.appendChild(headEl)
if(value.age === null){
    let headEl = document.createElement("h3");
    divEl.appendChild(headEl);
    headEl.textContent = "We cannot predict the age for this name please make sure you entered a valid name and try again"
}
else{
    let ulEl = document.createElement("ul");
    divEl.appendChild(ulEl);
    let liEl1 = document.createElement("li");
    liEl1.textContent= `Name: ${value.name}`;
    ulEl.appendChild(liEl1);
    let liEl2 = document.createElement("li")
    liEl2.textContent= `Age: ${value.age}`
    ulEl.appendChild(liEl2)
}
}

