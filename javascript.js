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
// Source - https://stackoverflow.com/q/76609426
// Posted by xxx, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-27, License - CC BY-SA 4.0

function makeGrids(size) {

}

function makeHover() {
    const element = document.querySelector(".row");

    element.addEventListener("mouseover", event => {
    console.log("Mouse in (over)");
    });

    element.addEventListener("mouseout", event => {
    alert("Mouse out");
    });
}


addElement()
// styleDiv()
makeGrids(16);
makeHover()



