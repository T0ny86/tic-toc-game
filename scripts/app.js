const btnEditPlayer1 = document.getElementById("edit-player1-btn");
const btnEditPlayer2 = document.getElementById("edit-player2-btn");

const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const btnCancelConfig = document.getElementById("cancel-config-btn");

btnEditPlayer1.addEventListener("click", openPlayerConfig );
btnEditPlayer2.addEventListener("click", openPlayerConfig );

btnCancelConfig.addEventListener("click", closePlayerConfig );

backdropElement.addEventListener("click", closePlayerConfig);