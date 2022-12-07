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
        board[i].push(Cell());
    }}
    
    const getBoard = () => board; 

    //Change the value of the selected column & row coords 
    const placeToken = (column,row, player) => {
        board[row][column].addToken(player);
        console.log(board[row][column])
        //filter to see if the cell already has a value of P1 or P2; else return (invalid move)
    }

    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.table(boardWithCellValues);
};

//RETURNS functions to use outside 
    return {
        getBoard, 
        placeToken, 
        printBoard
    }

})(document);
gameBoard.placeToken(0, 0, "value")

/* console.log(placeToken("1", "XX" ));
 */console.log()
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

//Cell is one square on the board

function Cell(){
    let value = 0; 
    const addToken = (player) => {
        value = player;
        console.log(gameBoard.getBoard())
    };
    const getValue =() => value; 

    return {
        addToken,
        getValue
    };
}



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
            let boardCol = e.target.dataset.column;
            let boardRow = e.target.dataset.row;
            let board = gameBoard.getBoard();
            let coord = board[boardCol, boardRow]
            console.log (boardCol, boardRow)
            
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