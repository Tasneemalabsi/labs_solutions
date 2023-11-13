let myInp = document.getElementById("myInp");

myInp.addEventListener("change", handleChange);

function handleChange () {
    myInp.style.color = myInp.value
}