function startNewGame(){
   if(players[0].name === '' || players[1].name === ''){
    alert("Please set custom player names for both players!");
    return; // to exit this function if the condition was true 
   }

   activePlayerNameElement.textContent = players[activePlayer].name;
   gameAreaElement.style.display= "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event){
    if (event.target.tagName !== 'LI') {
        // to avoid random clicks on gaps between li items
        // so only wanted clicks will pass this if statment
        return;
    }
    const selectedField = event.target;

    // adding -1 as math operation, make all the string convert to numric value, when it possible of course
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn] > 0) return;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);
    switchPlayer();
}