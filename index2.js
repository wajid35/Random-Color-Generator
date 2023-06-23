const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
   const colorContainerEl = document.createElement("div");
   colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container")
console.log(colorContainerEls)

generateColor()

function generateColor(){
colorContainerEls.forEach((colorContainerEl)=>{

    const newColorCode=randomColor();
    colorContainerEl.style.backgroundColor = "#" + randomColor();
    colorContainerEl.innerText = "#" + randomColor();
})

}



randomColor();

function randomColor(){

    const chars = "1234567890abcdef";
    const colorCodeLength= 6;
    let colorCode= "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum, randomNum +1)
        
    }
    return colorCode;

}