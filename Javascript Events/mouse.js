let image = document.getElementById("myImage");
image.addEventListener("mouseover", handleMouseOver)

function handleMouseOver(){
    image.width = 400
    image.height = 400
}

image.addEventListener("mouseout", handleMouseOut)

function handleMouseOut (){
    image.width = 200
    image.height = 200
}