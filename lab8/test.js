function Person (name,age){
    this.name = name;
    this.age = age
}
Person.prototype.grade = function () {
    return 34
}
let obj = new Person ('tasneem',24)
console.log(obj.grade())


let obj2 = {}


obj2.name = function () {
    return 'fadi'
}
console.log(obj2.name())