document.addEventListener('DOMContentLoaded', function() {

    // pega valor no local storage
    novoValor = localStorage.getItem('novoCache')

    // atualiza no card do popup o valor inserido na proposta
    valor = document.querySelector('.valor')
    valor.innerHTML += novoValor + ',00'
})