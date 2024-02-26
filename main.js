$(document).ready(function(){
    // Função executada quando o documento HTML está pronto

    // Inicialização do plugin Slick para o carrossel de imagens
    $('#carousel-imagens').slick({
        autoplay: true, // Inicia a reprodução automática do carrossel
    });

    // Evento de clique no ícone do menu hamburguer
    $('.menu-hamburguer').click(function(){
        // Ao clicar no ícone, o menu de navegação é exibido ou ocultado com efeito de deslizamento
        $('nav').slideToggle();
    })

    // Aplicação da máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Aplicação da máscara para o campo de CPF
    $('#cpf').mask('000.000.000-00', {reverse: true});

    // Aplicação da máscara para o campo de CEP
    $('#cep').mask('00000-000');

   // Validação do formulário usando o plugin jQuery Validate
$('form').validate({
    rules: {
        nome: {
            required: true, // O campo nome é obrigatório
        },
        email: {
            required: true, // O campo email é obrigatório
            email: true // Deve ser um email válido
        },
        telefone: {
            required: true // O campo telefone é obrigatório
        },
        cpf: {
            required: true // O campo CPF é obrigatório
        },
        endereco: {
            required: true // O campo endereço é obrigatório
        },
        cep: {
            required: true // O campo CEP é obrigatório
        },
        mensagem: {
            required: true, // O campo mensagem é obrigatório
        },
        veiculoDeInteresse: {
            required: false, // O campo veículo de interesse é opcional
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome completo', // Mensagem de erro personalizada para o campo nome
        cpf: 'Por favor, insira um CPF válido', // Mensagem de erro personalizada para o campo CPF
        endereco: 'Por favor, insira seu endereço completo', // Mensagem de erro personalizada para o campo endereço
        cep: 'Por favor, insira um CEP válido' // Mensagem de erro personalizada para o campo CEP
    },
    submitHandler: function(form) {
        // Função executada quando o formulário é enviado com sucesso
        console.log(form); // Exibe o formulário no console
    },
    invalidHandler: function(evento, validador) {
        // Função executada quando o formulário tem campos inválidos
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            // Se houver campos inválidos, exibe um alerta com a quantidade de campos incorretos
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
});

    // Função de animação para rolar até a seção de contato quando um botão de interesse é clicado
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato'); // Elemento de destino (seção de contato)
        const nomeVeiculo = $(this).parent().find('h3').text(); // Obtém o nome do veículo clicado

        $('#veiculo-interesse').val(nomeVeiculo); // Define o valor do campo veículo de interesse com o nome do veículo

        // Animação de rolagem suave até o destino
        $('html').animate({
            scrollTop: destino.offset().top // Rola até o topo do destino
        }, 1000) // Duração da animação (em milissegundos)
    })
})
