document.addEventListener('DOMContentLoaded', function() {

    let nome = document.querySelector('.nome')
    let email = document.querySelector('.email')
    let endereco = document.querySelector('.endereco')
    let telefone = document.querySelector('.telefone')
    let cpf = document.querySelector('.cpf')
    let nascimento = document.querySelector('.nascimento')
    let agencia = document.querySelector('.agencia')
    let numeroConta = document.querySelector('.numeroConta')
    let banco = document.querySelector('.bancos')
    // Opção de banco escolhida pelo usuário
    let opcao = banco.options[banco.selectedIndex];


    function atualizaSubmit() {
        botao = document.querySelector('.botao')

        // verifica se dados estão completos
        if (nome.value != '' && 
        email.value != '' && 
        endereco.value != '' && 
        telefone.value != '' && 
        cpf.value != '' && 
        nascimento.value != '' && 
        agencia.value != '' && 
        numeroConta.value != '' && 
        opcao.text != 'Escolha o seu banco') {
            // ativa botão quando dados estão completos
            botao.classList.remove('botao-off')
            botao.classList.add('botao-on')
            botao.setAttribute('href', '#')

        }
    }

    // Detecta qualquer entrada em cada input e verifica
    // se os dados já estão preenchidos
    nome.addEventListener('input', function() {
        atualizaSubmit()
    });
    email.addEventListener('input', function() {
        atualizaSubmit()
    });
    endereco.addEventListener('input', function() {
        atualizaSubmit()
    });
    telefone.addEventListener('input', function() {
        atualizaSubmit()
    });
    cpf.addEventListener('input', function() {
        atualizaSubmit()
    });
    nascimento.addEventListener('input', function() {
        atualizaSubmit()
    });
    agencia.addEventListener('input', function() {
        atualizaSubmit()
    });
    numeroConta.addEventListener('input', function() {
        atualizaSubmit()
    });  
    banco.addEventListener('change', function() {
        opcao = this.options[this.selectedIndex]
        atualizaSubmit()
    });

    // carrega dados para páginas seguintes
    confirmar = document.querySelector('.botao-on')
    confirmar.addEventListener('click', function() {
        localStorage.setItem('nome', nome.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('endereco', endereco.value)
        localStorage.setItem('telefone', telefone.value)
        localStorage.setItem('cpf', cpf.value)
        localStorage.setItem('nascimento', nascimento.value)
        localStorage.setItem('agencia', agencia.value)
        localStorage.setItem('numeroConta', numeroConta.value)
        localStorage.setItem('banco', opcao.text)
    })

})