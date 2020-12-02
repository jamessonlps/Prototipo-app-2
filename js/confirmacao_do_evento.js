function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add("mostrar")
        
}
}

window.onload = function() {
iniciaModal("modal-debitado")
}