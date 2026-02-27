// index.html
// Project: Etch-a-Sketch
function addElement() {
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
    
}

function makeGrids(size) {
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
}

function makeHover() {
    const element = document.querySelectorAll(".row");
    for (let i = 0; i < element.length; i++) {
        element.addEventListener("click", event => {
            element[i].style.backgroundColor = "blue";
        });

    }

}


addElement()
// styleDiv()
makeGrids(70);
makeHover()



