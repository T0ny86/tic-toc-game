let editedPlayer = 0;
let activePlayer = 0;
const players = [
    {
        name:'',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    }
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const btnEditPlayer1 = document.getElementById("edit-player1-btn");
const btnEditPlayer2 = document.getElementById("edit-player2-btn");
const btnCancelConfig = document.getElementById("cancel-config-btn");
const btnNewGame = document.getElementById("btn-startGame");

btnEditPlayer1.addEventListener("click", openPlayerConfig );
btnEditPlayer2.addEventListener("click", openPlayerConfig );

btnCancelConfig.addEventListener("click", closePlayerConfig );
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

btnNewGame.addEventListener("click", startNewGame);


/*
// return all the li elements in ol as array
const gameFieldElements = document.querySelectorAll("#game-board li");
for(const gameFieldElement of gameFieldElements){
    gameAreaElement.addEventListener("click", selectGameField);
}
*/
// another method to add event listner to all ol/ul list items
// it is shorter, but had side effect,
//that is when player click on gap between li items, it will be clickable too
// so we should ad some filter or avoid it, in callback function
const gameBoardElement = document.getElementById("game-board");
gameBoardElement.addEventListener("click", selectGameField);

/*
both above approach are work well , 
1- adding eventListener to each item we want it clickable
2- adding eventListener to parent element, and handeling the side-effect in the callback function later
*/