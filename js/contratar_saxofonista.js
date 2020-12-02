function iniciaModal(modalID){
    const modal2 = document.getElementById(modalID);
    if(modal2){
        modal2.classList.add("mostrar");
        modal2.addEventListener("click", function() {
            if (e.target.id == modalID || e.target.className == "fechar"){
                modal.classList.remove("mostrar");
            }
        });
        }
    }

const button = document.querySelector(".button");
butones.addEventListener("click", function() {
    iniciaModal(modal-concluido);
});