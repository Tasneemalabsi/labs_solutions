'use strict';
let container = document.getElementById('container')
container.style.display="flex"
container.style.justifyContent = "space-between"
container.style.flexWrap = "wrap"
let newArr = []
if (localStorage.getItem('items') != null){
     newArr = JSON.parse(localStorage.getItem('items'))
}
else {
var book1 = new Book ('Desert Solitaire',200,'https://www.powells.com/portals/0/images/9780671695880.jpg',true)
var book2 = new Book ("The Handmaid's tale",100,'https://www.powells.com/portals/0/images/9780385490818.jpg',false)
var book3 = new Book ('The Left Hand of Darkness',80,'https://www.powells.com/portals/0/images/9780441007318.jpg',true)
var book4 = new Book ('Poems',90,'https://www.powells.com/portals/0/images/9780374532369.jpg',true)
var book5 = new Book ('To Kill a Mockingbird',100,'https://www.powells.com/portals/0/images/9780061120084.jpg',false)
var book6 = new Book ('The Wind-Up Bird Chronicle',120,'https://www.powells.com/portals/0/images/9780679775430.jpg',true)
}
function Book (name, price=1, image, available=true ){
    this.name = name;
    this.price = price;
    this.image = image;
    this.available = available;
    newArr.push(this)
}



function renderBooks (a){

for(let i = 0; i<a.length; i++){
let divEl = document.createElement('div')
container.appendChild(divEl)
let imageEl = document.createElement('img')
divEl.appendChild(imageEl)
let nameEl = document.createElement('h3')
divEl.appendChild(nameEl)
let priceEl = document.createElement('h4')
divEl.appendChild(priceEl)
    imageEl.src = a[i].image
    imageEl.alt = a[i].name
    nameEl.textContent = a[i].name
    priceEl.textContent = "price: "+a[i].price
}


}
renderBooks(newArr)

let formEl = document.getElementById('myForm');

formEl.addEventListener('submit', newBook)

function newBook () {
    e.preventDefault()
    let check = true
    let addedItems = []
    let bookName = e.target.name.value;
    let bookImage = e.target.image.value;
    let bookPrice = e.target.price.value;
    let availableBook = document.getElementById("true");
    let notAvailable = document.getElementById("false");

    if (availableBook.checked){
        var newBook = new Book (bookName, bookPrice,bookImage,  check)
    }
    else if (notAvailable.checked){
    
        var newBook = new Book (bookName, bookPrice, bookImage, !check)
    }
    addedItems.push(newBook)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    saveToLocalStorage(newArr)
    readFromLocalStorage(newArr)
    renderBooks(newArr)
    
}

function saveToLocalStorage(newArr){
localStorage.setItem('items',JSON.stringify(newArr))
}
function readFromLocalStorage(arr){
    let obj = JSON.parse(localStorage.getItem('items'))
    if (obj !==null) {
        console.log('hello',obj)
        arr=obj
    }
    else {
        arr;
    }
}

let selectEl = document.getElementById('filter');
selectEl.style.marginBottom="10px"
selectEl.style.width = '200px'
selectEl.style.height = '30px'
selectEl.style.fontSize = 'medium'
selectEl.addEventListener('change',handleChange)
function handleChange(e){
    e.preventDefault();
    let filteredItems = []
    let expiredItems = []
    for(let i =0; i<newArr.length; i++){
        if (newArr[i].available){
            filteredItems.push(newArr[i])
        }
        else {
            expiredItems.push(newArr[i])
        }
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if(e.target.value == "available"){
    renderBooks(filteredItems)}
    else if (e.target.value == "expired"){
        renderBooks(expiredItems)
    }
    else {
        renderBooks(newArr)
    }

}
