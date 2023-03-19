'use strict';

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit",handleSearch);
let cardContainer = document.getElementById("cardscontainer")
let components = [];
let arr = []
let obj = localStorage.getItem("drinks")
if ( obj != null){
    console.log("hi")
    arr = JSON.parse(obj)
}
function handleSearch (e) {
    e.preventDefault()
    let searchValue = e.target.search.value;

    let water = document.getElementById("water");
    let orangeJuice = document.getElementById("orangeJuice");
    let coffee = document.getElementById("coffee");
    components.push(water, orangeJuice, coffee)
    console.log(searchValue.toLowerCase())
    for(let i = 0; i<components.length; i++ ){
        console.log(components[i])
        if(components[i].getElementsByTagName("div")[0].getElementsByTagName("h5")[0].textContent.toLowerCase() === searchValue.toLowerCase()){
            cardContainer.style.visibility = "hidden";
            components[i].style.visibility = "visible";
            break;
        }
    }
}

function Drink (name, price, imageUrl){
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    arr.push(this)
}

let createForm = document.getElementById("createForm");
createForm.addEventListener("submit", handleCreate)
function handleCreate(e){
    e.preventDefault()
    let newName = e.target.drinkName.value;
    let newImage = e.target.imageURL.value;
    let newPrice = e.target.drinkPrice.value;
    let newDrink = new Drink(newName, newPrice, newImage);
    for(let i=(arr.length)-1; i<arr.length; i++){
        let newCard = document.createElement("div");
        cardContainer.appendChild(newCard);
        newCard.setAttribute("class","card")
        newCard.style.width = "18rem";
        newCard.style.height = "300px"
        let cardImage = document.createElement("img");
        newCard.appendChild(cardImage);
        cardImage.src = arr[i].imageUrl;
        cardImage.setAttribute("class","card-img-top");
        cardImage.setAttribute("alt","Card image cap");
        cardImage.setAttribute("height","200px")
        cardImage.setAttribute("width","25px")
        let cardBody = document.createElement("div");
        newCard.appendChild(cardBody);
        cardBody.setAttribute("class","card-body");
        let cardHeading = document.createElement("h5");
        cardBody.appendChild(cardHeading);
        cardHeading.textContent = arr[i].name;
        cardHeading.setAttribute("class","card-title")
        let cardPara = document.createElement("p")
        cardBody.appendChild(cardPara)
        cardPara.textContent = `Price: ${arr[i].price}$`;
        cardPara.setAttribute("class","card-text");
        components.push(newCard)

    }
    saveToLocalStorage(arr)
}
function saveToLocalStorage(arr){
    localStorage.setItem("drinks", JSON.stringify(arr))
}




