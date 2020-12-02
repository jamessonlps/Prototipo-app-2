function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add("mostrar")
        modal.addEventListener("click", (e) => {
            if(e.target.id == modalID || e.target.className == "fechar"){
                modal.classList.remove("mostrar");
            }
            
        });
}
}

window.onload = function() {
const butao = document.querySelector(".button");
butao.addEventListener("click", () => iniciaModal("modal-concluido"))
}