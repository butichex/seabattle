/* const M = N = 10;


let gameField = document.querySelector(".game-field");
let gameFieldCells = gameField.childNodes;
console.log(gameField);


function fillCell(e) {
    e.path[0].classList.toggle("cell-white"); 
}


function initGameField() {
    let gameField = document.querySelector(".game-field__inner");
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("id", i);
        cell.setAttribute("class", "game-field__cell");
        cell.addEventListener("click", fillCell)
        gameField.appendChild(cell);
    }

    return gameField;

}



function fillShips(gameField) {
    let cells = M * N; 
    console.log(Math.floor((cells + Math.random() * (cells - 0 + 1)))); 
}

gameField = initGameField(); 
fillShips(gameField); 




 */


