document.addEventListener('DOMContentLoaded', function() {

    // carrega dados do anúncio
    let dia = localStorage.getItem('dataAnuncio')
    let horaInicio = localStorage.getItem('horaInicio')
    let horaFinal = localStorage.getItem('horaFinal')
    let preco = localStorage.getItem('preco')

    // carrega locais de colocar das info
    let pDia = document.querySelector('.dia')
    let pHorario = document.querySelector('.horario')
    let pValor = document.querySelector('.valor')

    // insere dados no HTML
    pDia.innerHTML += dia
    pHorario.innerHTML += horaInicio + ' - ' + horaFinal
    pValor.innerHTML += preco

})