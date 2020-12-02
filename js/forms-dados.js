document.addEventListener('DOMContentLoaded', function() {

    let nome = document.querySelector('.nome')
    let email = document.querySelector('.email')

    let estado = document.querySelector('.estado')
    let cidade = document.querySelector('.cidade')
    let endereco = document.querySelector('.endereco')
    let cep = document.querySelector('.cep')

    let telefone = document.querySelector('.telefone')
    let cpf = document.querySelector('.cpf')
    let nascimento = document.querySelector('.nascimento')
    let agencia = document.querySelector('.agencia')
    let numeroConta = document.querySelector('.numeroConta')
    
    let banco = document.querySelector('.bancos')
    let opcaoBanco = banco.options[banco.selectedIndex];

    let contas = document.querySelectorAll('input[name=conta]')
    let opcaoConta;

    function atualizaSubmit() {
        botao = document.querySelector('.botao')

        // verifica se dados estão completos
        if (nome.value != '' && 
        email.value != '' && 
        estado.value != '' && 
        cidade.value != '' && 
        endereco.value != '' && 
        cep.value != '' && 
        telefone.value != '' && 
        cpf.value != '' && 
        nascimento.value != '' && 
        agencia.value != '' && 
        numeroConta.value != '' && 
        opcaoBanco.text != 'Escolha o seu banco' && 
        opcaoConta != undefined) {
            // ativa botão quando dados estão completos
            botao.classList.remove('botao-off')
            botao.classList.add('botao-on')
            botao.setAttribute('href', './novo-perfil-musico.html')

        }
    }

    // Detecta qualquer entrada em cada input e chama função
    // que verifica se os dados já estão preenchidos
    nome.addEventListener('input', function() {
        localStorage.setItem('nome', nome.value)
        atualizaSubmit()
    });
    email.addEventListener('input', function() {
        localStorage.setItem('email', email.value)
        atualizaSubmit()
    });
    estado.addEventListener('input', function() {
        localStorage.setItem('estado', estado.value)
        atualizaSubmit()
    });
    cidade.addEventListener('input', function() {
        localStorage.setItem('cidade', cidade.value)
        atualizaSubmit()
    });
    endereco.addEventListener('input', function() {
        localStorage.setItem('endereco', endereco.value)
        atualizaSubmit()
    });
    cep.addEventListener('input', function() {
        localStorage.setItem('cep', cep.value)
        atualizaSubmit()
    });
    telefone.addEventListener('input', function() {
        localStorage.setItem('telefone', telefone.value)
        atualizaSubmit()
    });
    cpf.addEventListener('input', function() {
        localStorage.setItem('cpf', cpf.value)
        atualizaSubmit()
    });
    nascimento.addEventListener('input', function() {
        localStorage.setItem('nascimento', nascimento.value)
        atualizaSubmit()
    });
    agencia.addEventListener('input', function() {
        localStorage.setItem('agencia', agencia.value)
        atualizaSubmit()
    });
    numeroConta.addEventListener('input', function() {
        localStorage.setItem('numeroConta', numeroConta.value)
        atualizaSubmit()
    });  
    banco.addEventListener('change', function() {
        opcaoBanco = this.options[this.selectedIndex]
        localStorage.setItem('banco', opcaoBanco.text)
        atualizaSubmit()
    });
    for (conta of contas) {
        conta.addEventListener('click', function() {
            verificaConta()
        });
    }

    // Verifica se alguma opção de conta está selecionada
    function verificaConta() {
        for (conta of contas) {
            if (conta.checked) {
                opcaoConta = conta.value
                localStorage.setItem('conta', opcaoConta)
                atualizaSubmit()
            }
        }
    }

})
