// index.html
// Project: Etch-a-Sketch

const body = document.querySelector("body");
const containerDiv = document.createElement("div");
containerDiv.className = "container";
body.appendChild(containerDiv);

const div = document.querySelector(".container");
const subDiv = document.createElement("div");
subDiv.className = "sub-container";
div.appendChild(subDiv);

const subContainer = document.querySelector(".sub-container");
const screenDiv = document.createElement("div");
screenDiv.className = "screen-sketch";
subContainer.appendChild(screenDiv);

// Button

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    location.reload();
})

const size = prompt("Enter size of grid 16-100");
if (size > 15 && size <= 100) {
    makeGrid(size);
    } else {
    alert('Size must be less than 100x100');
    }



// Create Grid

function makeGrid(size){
    const screenSketxh = document.querySelector(".screen-sketch");
    for (let i = 0; i < size; i++ ) {
        const column = document.createElement("div");
        column.className = "column";
        // screenSketxh.appendChild(column);
        for (let j = 1; j < size; j++) {
            const row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
        screenSketxh.appendChild(column);
    }
    randomColorFunction();
}

// Set random color

let randomNum = () => {
    return Math.floor(Math.random() * 256);
};

function randomColorFunction() {
    const items = document.querySelectorAll(".row");

    items.forEach((item) => {        
        item.addEventListener("mouseover", () => {
            let randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
            item.style.backgroundColor = randomColor;
            console.log("Item diklik! Warna berubah menjadi:", randomColor);
        });
    });
}








