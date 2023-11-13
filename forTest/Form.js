const container = document.getElementById('user-info');
let ele = document.createElement("input");
ele.type="text";
container.appendChild(ele);
ele.addEventListener("change", handleChange);

function handleChange(){
    console.log("hello")
}