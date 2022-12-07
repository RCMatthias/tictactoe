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
    const board = [];

    for (let i = 0; i < rows ; i++){
        board[i] = []; //Create subArray
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

gameBoard.writeToDOM("#target", "");


//MAKE GETVALUE func to use below 


//displayController
const displayController = (function() {
    const gameBoardDiv = document.getElementById("gameBoardDiv");
    console.log(gameBoardDiv);

    const updateScreen =() =>  {
        //clear the board 
        gameBoardDiv.textContent = "";

        //get newest version of board & player turn
        const board = gameBoard.getBoard();

        //display player turn

        //render board squares 

            //for each array item create a grid unit; 
            board.forEach(row => {
                row.forEach((cell, index) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                cellButton.dataset.column = index;
/*                 cellButton.textContent = cell.getValue();
 */                gameBoardDiv.appendChild(cellButton)
            })
        });
            //assign the correct coordinates to each part of the newly generated grid

        }
    updateScreen();
    }
)()

//Game flow 
const gameFlow = (function(doc) {


    return
})(document);



/*
Modules: gameboard, displaycontroller

Factories: Players 
*/