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
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");
    switchPlayer();
}