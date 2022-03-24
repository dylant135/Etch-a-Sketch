const container = document.querySelector("#container");
let num = prompt("Enter a number 1-100");
let cells = parseInt(num);

for (i = 0; i < (cells * cells); i++) {
    const box = document.createElement("div")
    box.className = "gridBox";
    container.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
    container.appendChild(box);
   
    function sketch () {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        box.style.backgroundColor = randomColor;
    }
    box.addEventListener('mouseover', sketch);

    function eraser () {
        box.style.backgroundColor = "aqua";
    }
    box.addEventListener('click', eraser);
}

function refresh () {
    window.location.reload("Clear");
}