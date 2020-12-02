document.addEventListener('DOMContentLoaded', function() {

    try {
        // quando o usuário abre pela primeira vez, o histórico
        // deve estar vazio. Após o show, deve aparecer a 
        // transação correspondente no histórico.
    
       
        // baixa novo preço do localStorage
        valor = localStorage.getItem('novoCache')
        if (valor != '') {
            // exibe card
            document.querySelector('.card-historico').style.display = 'flex'
        
            // insere novo cachê
            valorHist = document.querySelector('.grana')
            valorHist.innerHTML += valor + ',00'
        
            saldo = document.querySelector('.saldo')
            saldo.innerHTML = 'Salto atual: R$ ' + valor + ',00'
        }
    
    }
    catch {
        // não faz nada
    }
})