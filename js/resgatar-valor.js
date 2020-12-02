document.addEventListener('DOMContentLoaded', function() {

    // carrega dados do local Storage
    banco = localStorage.getItem('banco')
    conta = localStorage.getItem('conta')
    numeroConta = localStorage.getItem('numeroConta')
    agencia = localStorage.getItem('agencia')
    valor = localStorage.getItem('novoCache')


    // pega elementos a serem modificados
    bancoInput = document.querySelector('.banco')
    agenciaInput = document.querySelector('.agencia')
    contaInput = document.querySelector('.conta')
    valorInput = document.querySelector('.grana')

    // atualiza valores
    bancoInput.innerHTML += banco
    agenciaInput.innerHTML += agencia
    contaInput.innerHTML += conta
    valorInput.innerHTML = 'R$ ' + valor + ',00'

})