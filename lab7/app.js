'use strict';

let animals = [];
let arr = ['Name','Type','Age','Adopted']
let deleteRows = prompt("Do you want to filter the adopted animals ? yes/no")
console.log(deleteRows);
function Animal (name,type,age,isAdopted=true){
    this.name = name;
    this.type=type;
    this.age = age;
    this.isAdopted = isAdopted;
    animals.push(this)
}
let animal1 = new Animal ('Sally','cat',2,true)
let animal2 = new Animal ('Goofy','dog',1,false)
let animal3 = new Animal ('Gigi','horse',10,false)
let animal4 = new Animal ('Lilly','dog',3,true)
let animal5 = new Animal ('Gerald','dog',2,false)
let animal6 = new Animal ('Tom','cat',1,false)

let tableEl = document.createElement("table")
tableEl.style.border = "solid black"
tableEl.style.width = "60%"

document.body.appendChild(tableEl)
function tableHeader () {
let head = document.createElement('thead')
head.style.border = 'solid black'
tableEl.appendChild(head)
for (let i = 0; i<arr.length; i++){
    let thead = document.createElement('th')
    head.appendChild(thead)
    thead.style.border = 'solid black'
    thead.style.fontSize = "larger"
    thead.textContent = arr[i]
}
}
function tableBody () {
for(let i = 0; i<animals.length;i++){
    let trEl = document.createElement('tr')
    tableEl.appendChild(trEl)
    trEl.style.border = 'solid black'
    
    for (let j =0; j<Object.values(animals[i]).length; j++){
        let tdEl = document.createElement('td')
        trEl.appendChild(tdEl)
        tdEl.style.border = 'solid black'
        tdEl.style.textAlign = 'center'
        tdEl.style.fontSize = "large"
        tdEl.textContent = Object.values(animals[i])[j]
    }
    if (deleteRows.toLocaleLowerCase() === "yes"){
        console.log("hello");
        if(animals[i].isAdopted) {
            tableEl.removeChild(trEl)
        }
    }


}
}



tableHeader();
tableBody();






