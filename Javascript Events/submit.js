let form = document.getElementById("myform");
let imageInp = document.getElementById("image")
let nameInp = document.getElementById("name")
let container = document.getElementById("container")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    let img = document.createElement("img")
    img.src = imageInp.value
    container.appendChild(img)
    let myName = document.createElement("h3");
    myName.textContent = nameInp.value;
    container.appendChild(myName)

}