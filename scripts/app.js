let editedPlayer = 0;

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

const btnEditPlayer1 = document.getElementById("edit-player1-btn");
const btnEditPlayer2 = document.getElementById("edit-player2-btn");
const btnCancelConfig = document.getElementById("cancel-config-btn");

btnEditPlayer1.addEventListener("click", openPlayerConfig );
btnEditPlayer2.addEventListener("click", openPlayerConfig );

btnCancelConfig.addEventListener("click", closePlayerConfig );
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

