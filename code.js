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

let winner = ""


const TicTacToe = (player1Name, player2Name) => {
    let board = Board(); 
    let player1 = Player(player1Name, "X");
    let player2 = Player(player2Name, "O");
    let currentPlayer = player1;
    let arrX = [];
    let arrO = [];

    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const switchPlayers = () => {
        if(currentPlayer===player1){
            currentPlayer=player2;
        }else{
            currentPlayer=player1;
        }
    }
    const checkWin = () => {
        //check board and push indices to arrX 
        game.board.value.forEach((element, index) => {
            if (element == "X") {
                 arrX.push(index)
               /* console.log(arrX) */
            } else {
                return
            }
        //go over all vlaues in the board; if they contain "X"; add that index to arrX
        });

        game.board.value.forEach((element, index) => {
            if (element == "O") {
                arrO.push(index)
/*                 console.log(arrO)
 */            } else {
                return
            }

        //check arrX if it looks like the wincombos 
        const isSubset = (array1, array2) => array1.every((element) => 
        array2.includes(element));

        //run for each value in winning combinations; check if arrX or arrO matches it 
        winCombos.forEach((element) => {
            if(isSubset(element, arrX)){
                winner = "X"
            } else if(isSubset(element, arrO)){
                winner = "O"
            }
        })

        /* console.log(arrX)
        console.log(isSubset(winCombos, arrX)) */
        // DO THIS FOR EACH OBJECT IN WINCOMBOS SEPARATELY (check with issubset)
        
        });
 }
    const playRound = (cellNumber) => {
        game.board.at(cellNumber).value=game.currentPlayer.icon;
        switchPlayers();
        checkWin();
    }

//THE INTERFACE (how we interact with what's inside this module/factory)
    return {
        switchPlayers,
        board,
        get winner(){return winner;},
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

        //Winner fetching & posting 

    const winnerDiv = document.querySelector('.winnerDiv');
    const winnerText = document.createElement("div");



    //

        boardVal.forEach((element, index) => {
            const cell = document.createElement("button");
            cell.classList.add("cell")
    
        // get the content of the current element in Array and push to the screen
            const boardArrVal = boardVal.at(index);
            cell.textContent = boardArrVal;

            cell.dataset.column = index; 

            cell.addEventListener("mousedown", function(e) {
                const dataColumn = e.target.getAttribute('data-column');
                
                if (cell.textContent == "") {
                    e.target.textContent = game.currentPlayer.icon;
                    game.playRound(dataColumn);

                    winnerText.innerText = game.winner;
                    winnerDiv.appendChild(winnerText);
                    console.log(winnerText)


                } else {
                    return;
                }

            })

            gameBoardDiv.appendChild(cell)
            
        });

    };
    updateScreen(); 
    
   
})();
   