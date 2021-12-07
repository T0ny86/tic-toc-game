function openPlayerConfig(event){
    //const selectedPlayerId = event.target.getAttribute("data-playerid")
    // const selectedPlayerId = event.target.dataset.playerid;
    editedPlayer =  +event.target.dataset.playerid; // +'1' => 1 plus turn the numric text to value
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none"; 
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent ="";
    formElement.firstElementChild.lastElementChild.value = ''; // not the best method to reach element because we use hierarchy structre
}

function savePlayerConfig(event) {
    event.preventDefault(); // prevent the default form behaviour form happening
    // that we won't browser-reload
    const formData = new FormData(event.target); // extract the input fron the form automaticaly
    // FormData object, extract all the input-values from the form, but the input field should have a 'name' attribut
    const enteredPlayername = formData.get('playername').trim();
    if (!enteredPlayername) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }
    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    /*
    if (editedPlayer === 1) {
        players[0].name = enteredPlayername;
        
    } else {
        players[1].name = enteredPlayername;
    }
    */
    players[editedPlayer-1].name = enteredPlayername;
    
    closePlayerConfig();

}