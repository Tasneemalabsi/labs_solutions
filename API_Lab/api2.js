// api2.js
let changeTextBtn = document.getElementById("changeTextBtn");
let hideElementBtn = document.getElementById("removeElementBtn");
let changeColor = document.getElementById("changeColor");
let para = document.getElementById("para");
let container = document.getElementById("mainContainer");

changeTextBtn.addEventListener("click", handleClick);

function handleClick() {
  let inp = document.createElement("input");
  container.appendChild(inp);

  // Create a button to apply the text change
  let applyTextBtn = document.createElement("button");
  applyTextBtn.textContent = "Apply Text";
  container.appendChild(applyTextBtn);

  applyTextBtn.addEventListener("click", function () {
    para.textContent = inp.value;
    container.removeChild(inp); // Remove the input and the Apply Text button after applying the change
    container.removeChild(applyTextBtn);
  });
}

hideElementBtn.addEventListener("click", handleHide);

function handleHide() {
  para.hidden = true;
}

changeColor.addEventListener("click", handleChange);

function handleChange() {
  let inp = document.createElement("input");
  container.appendChild(inp);

  // Create a button to apply the color change
  let applyColorBtn = document.createElement("button");
  applyColorBtn.textContent = "Apply Color";
  container.appendChild(applyColorBtn);

  applyColorBtn.addEventListener("click", function () {
    para.style.color = inp.value;
    container.removeChild(inp); // Remove the input and the Apply Color button after applying the change
    container.removeChild(applyColorBtn);
  });
}