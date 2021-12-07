function openPlayerConfig(){
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none"; 
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent ="";
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
        // return;
    }

}