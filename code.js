const Player = (name, icon) => {
    return Object.freeze({
        get name(){return name;},
        get icon(){return icon;},
    });
};

const Board = () => {
    let board = new Array(9).fill("");
    const at = (index) => ({
        get value(){return board[index] },
        set value(val){ board[index] = val;}
    })
    const reset = () => board.fill("");

    return {
        at, 
        reset, 
        get value(){return [...board];}
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
//THE INTERFACE (how we interact with what's inside this module/factory)
    return {
        switchPlayers,
        board,
        get currentPlayer(){return currentPlayer;}
    }
}

const game = TicTacToe("Margaret", "Bartholomeus");
game.board.at(0).value=game.currentPlayer.icon;


//THE VIEWER (observers eventlisteners)
    //create the square divs when the game is run (listen to the game controller?)
const screenController = (() => {
    const board = game.board.value;
    console.log(board)
    const gameBoardDiv = document.querySelector('.gameBoardDiv');

     board.forEach(element => {
        const cell = document.createElement("div");
        gameBoardDiv.appendChild(cell)
        cell.classList.add("cell")
        console.log(    game.board.at[element])
    });
     return {

     }
})();
    //create divs for the names input 
    //listen to the names and get their values (interface these out)


//THE GAME CONTROLLER 
//run the game tictactoe, which creates the players     
//check for wins (but we'll look at what we cna GET from the interface of the board)
    //check if same value is in these values of the array (based on index)
