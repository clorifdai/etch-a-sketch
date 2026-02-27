// index.html
// Project: Etch-a-Sketch
function addElement() {
    const body = document.querySelector("body");
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";
    body.appendChild(containerDiv);
    for (let i = 0; i <= 32; i++) {
        const div = document.querySelector("div");
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        div.appendChild(itemDiv);
    }
}

function styleDiv() {
    const container = document.querySelector(".container")
    const nodeList = document.querySelectorAll(".item");

    container.style.display = "flex";

    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "blue";
        nodeList[i].style.height = "96px";
        nodeList[i].style.width = "96px";
        nodeList[i].style.margin = "2px 2px 2px 2px";
    }

}


addElement()
styleDiv()


