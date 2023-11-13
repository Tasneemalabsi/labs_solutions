let addBtn = document.getElementById("mybutton");
let form = document.getElementById("myform");
let container = document.getElementById("container")
let obj= {}
addBtn.addEventListener('click', handleClick);
function handleClick (){
    form.hidden = false
    form.addEventListener("submit", handleSubmit)

    function handleSubmit(e){
        e.preventDefault();
        let name = document.getElementById("name");
        obj.name = name.value;
        let img = document.getElementById("imgLink");
        obj.img = img.value;
        // let available
        let cont = document.createElement("div")
        container.appendChild(cont)
        let image = document.createElement("img");
image.src = obj.img
cont.appendChild(image);
let h2 = document.createElement("h3");
h2.textContent = obj.name;
cont.appendChild(h2);
// let hideBtn = document.createElement("button");
// cont.appendChild(hideBtn)
// hideBtn.addEventListener("click", handleDelete);
// function handleDelete(){
// container.removeChild(cont)
// }
    }
}


