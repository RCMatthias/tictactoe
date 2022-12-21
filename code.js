const Player = (name, icon) => {
    return Object.freeze({
        get name(){return name;},
        get icon(){return icon;},
    });
};

const Board = () => {
    let gameBoard = new Array(9).fill("");
    const at = (index) => ({
        get value(){return gameBoard[index] },
        set value(val){ gameBoard[index] = val;}
    })
    const reset = () => gameBoard.fill("");

    return {
        at, 
        reset, 
        get value(){return [...gameBoard];}
    }
}
const TicTacToe = (player1Name, player2Name) => {
    let board = Board(); 
    let player1 = Player(player1Name, "X");
    let player2 = Player(player2Name, "O");
    let currentPlayer = player1;
    
    const switchPlayers = () => {
        if(currentPlayer===player1){
            currentPlayer=player2;
        }else{
            currentPlayer=player1;
        }
    }
    const checkWin = () => {
        console.log(board.value);
        checkWinningCombo();
    }
    const winningCombos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
    const checkWinningCombo = (winCondition, symbol) => {
        console.log(board[winCondition[0]])
    }


    const playRound = (cellNumber) => {
        console.log(cellNumber)
        game.board.at(cellNumber).value=game.currentPlayer.icon;
        console.table(board.value);
        switchPlayers();
        checkWin();
    }
  
    
//THE INTERFACE (how we interact with what's inside this module/factory)
    return {
        switchPlayers,
        board,
        playRound,
        get currentPlayer(){return currentPlayer;}
        
    }
}

//THE GAME CONTROLLER 
//run the game tictactoe, which creates the players 
const game = TicTacToe("Margaret", "Bartholomeus");

//mock data 
/* game.board.at(0).value=game.currentPlayer.icon;
 */

//THE VIEWER (observers eventlisteners)
    //create the square divs when the game is run (listen to the game controller?)
const screenController = (() => {
    const boardVal = game.board.value;

    const gameBoardDiv = document.querySelector('.gameBoardDiv');

    const updateScreen = () => {
        //reset screen
        gameBoardDiv.textContent="";

        boardVal.forEach((element, index) => {
            const cell = document.createElement("button");
            cell.classList.add("cell")
    
        // get the content of the current element in Array and push to the screen
            const boardArrVal = boardVal.at(index);
            console.log(boardArrVal);
            cell.textContent = boardArrVal;

            cell.dataset.column = index; 

            cell.addEventListener("mousedown", function(e) {
                const dataColumn = e.target.getAttribute('data-column');
                
                if (cell.textContent == "") {
                    e.target.textContent = game.currentPlayer.icon;
                    game.playRound(dataColumn);
                } else {
                    return;
                }

            })

            gameBoardDiv.appendChild(cell)
            
        });

    };

    updateScreen(); 
    
   
})();
    /*
    const clickHandler = () => {

    }
    clickHandler(); 


    //listen to the array and update contents as needed 


     return {
        updateScreen,
     }
})();
   

//create divs for the names input 
    //listen to the names and get their values (interface these out)



//check for wins (but we'll look at what we cna GET from the interface of the board)
    //check if same value is in these values of the array (based on index)

    */