let myParagraph = document.getElementById("myparagraph");
let hideBtn = document.getElementById("hideBtn");


hideBtn.addEventListener("click", handleClick)

function handleClick() {
    let isHidden = myParagraph.hidden;
    if(isHidden){
        myParagraph.hidden = false;
    }
    else {
    myParagraph.hidden = true;
}
}