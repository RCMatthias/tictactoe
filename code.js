//player factory

const Player = (name, score) => {
    const getScore = () => score;
    const getName = () => name;

    
    return {name, score, sayHello};
}

//Game Board

const gameBoard = (function(doc) {
    const rows = 3; 
    const columns = 3;

    let board = [];


    for (let i = 0; i < rows ; i++){
        board [i] = []; //Create subArray
        for (let j = 0; j < columns; j++){
        board[i].push(j)
    }}
    
    const getBoard = () => board; 
    console.log(board)
   
    const writeToDOM = (selector, message) => {
        if(!!doc && "querySelector" in doc){
        document.querySelector(selector).innerHTML = message;
        }
    }
    return {
        getBoard,
        writeToDOM,
    }
})(document);

console.table(gameBoard.getBoard)
gameBoard.writeToDOM("#target", "eyaoyao");

//displayController
const displayController = (function(doc) {
    let board = gameBoard.getBoard
    console.log(board)
    let gameBoardDiv = document.getElementById("gameBoardDiv")
    console.log(gameBoardDiv)
    const createGrid = () => {
        //for each array item create a grid unit; 
        board.forEach(element => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            gameBoardDiv.appendChild(card)
            
        });
        //assign the correct coordinates to each part of the newly generated grid

    }


})(document)

//Game flow 
const gameFlow = (function(doc) {


    return
})(document);



/*
Modules: gameboard, displaycontroller

Factories: Players 
*/