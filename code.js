//player factory

const Player = (name, icon, ai, turn) => {
    return {name, icon, ai, turn};
};

const playerOne =  Player("joske", "X", false, true)
const playerTwo =  Player("grietje", "O", false, false);


//GameBoard (all physical assets: the board, the marks, the players, turns)

const gameBoard = (function(doc) {

// Board creation 
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
   
   /*  const writeToDOM = (selector, message) => {
        if(!!doc && "querySelector" in doc){
        document.querySelector(selector).innerHTML = message;
        }
    }
 */




//RETURNS functions to use outside 
    return {
        getBoard,
/*         writeToDOM,
 */       
    }

})(document);

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
                cellButton.dataset.row = cell;
/*                 cellButton.textContent = cell.getValue();
 */                gameBoardDiv.appendChild(cellButton)
            })
        });
            //assign the correct coordinates to each part of the newly generated grid

        }
    updateScreen();
    }
)()

//Game flow  (the rules; all abstract!)
const gameFlow = (function(doc) {

        //checkforwin
        //if three cells in a row (write all permutations out)
        //horizontal lines
    
    //TRIED WITH DATA-SET (but ultimately might be STUPID idea to use DOM to store data!)
        /*   const cells = document.querySelectorAll(".cell")
        console.log(cells);
        const boardCol = cells.dataset.column;
        const boardRow = cells.dataset.row;
        console.table(boardCol)
    if(boardCol)
 */


})(document);


//Player turn functionality
const playerTurn = (function () {
    const cell = document.querySelectorAll('.cell');
    cell.forEach(cell=>{
        cell.addEventListener('click', e=> {
            //X player move if conditions are met 
            if(playerOne.turn == true && gameBoard.winner == null && e.target.textContent == ""){
            //add move to array
//look for the content of the cell 
//OR listen for clicks on the cell to change array? 

            //add move to screen
            cell.textContent = playerOne.icon;

            //set player turns
            playerOne.turn = false; 
            playerTwo.turn = true; 
            console.table(gameBoard.getBoard());
        }else if(playerTwo.turn == true && gameBoard.winner == null && e.target.textContent ==""){
            cell.textContent = playerTwo.icon;
            //set player turns
            playerOne.turn = true; 
            playerTwo.turn = false; 
            console.table(gameBoard.getBoard());
        }
        })
        }
    )
    })()
    
// End of player turn functionality

/*
Modules: gameboard, displaycontroller

Factories: Players 
*/