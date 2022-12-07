//player factory

const Player = (name, icon, ai, turn) => {
    return {name, icon, ai, turn};
};

const playerOne =  Player("joske", "X", false, true)
const playerTwo =  Player("grietje", "O", false, false);


//Game Board

const gameBoard = (function(doc) {
    const rows = 3 ;
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


//Player turn functionality
const playerTurn = (function () {
    const cell = document.querySelectorAll('.cell');
    cell.forEach(cell=>{
        cell.addEventListener('click', e=> {
            //X player move if conditions are met 
            if(playerOne.turn == true && gameBoard.winner == null && e.target.textContent == ""){
            //add move to array
            cell.textContent = playerOne.icon;
            //set player turns
            playerOne.turn = false; 
            playerTwo.turn = true; 
            console.log(board);
        }else if(playerTwo.turn == true && gameBoard.winner == null && e.target.textContent ==""){
            cell.textContent = playerTwo.icon;
            //set player turns
            playerOne.turn = true; 
            playerTwo.turn = false; 
            console.log(board);
        }
        })
        }
    )
    
    return {cell}
    })();


/*
Modules: gameboard, displaycontroller

Factories: Players 
*/