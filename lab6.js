// constructor question (last one)
let arr = []
let count = 0
function Animal (name,type,age,isAdopted=true,favoriteFood= []){
    this.name = name;
    this.type=type;
    this.age = age;
    this.isAdopted = isAdopted;
    this.favoriteFood = favoriteFood
    this.isFavorite = function () {
        if (this.favoriteFood.length) {
            return this.favoriteFood.length
        }
        else {
            return null
        }
    }
    arr.push(this)
}
function isPet (any) {
    for(let obj = 0; obj<any.length; obj++){
        if(['cat','dog','rabbit'].includes(arr[obj].type)){
            
            count ++
        }
    }
    return count
}


let animal1 = new Animal('cc','monkey',2,true,['milk','lamb','chicken'])
console.log(animal1.isFavorite())
console.log(animal1.isAdopted);

// before the last (prototype method)

function Person (name,gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.age = function(){
let date = new Date()
let age =date.getFullYear() - this.birthYear
return age
}

let person1 = new Person ('tasneem','female',1998)
console.log(person1.age());

// second question

function checkProperty(obj, pro){
    console.log(Object.keys(obj))
    for(let i=0; i<Object.keys(obj).length; i++){
        if (Object.keys(obj)[i]===pro){
            return true
        }
        else {
            continue
        }
    }
    return false
}
console.log(checkProperty({name:"Think And Grow Rich", author:"Napoleon Hill", releaseDate:1937}, 'releaseDate'));


