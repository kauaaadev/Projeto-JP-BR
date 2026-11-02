alert("Bem-vindo ao site que fala um pouco sobre João Pessoa!");


const cartoes = document.querySelectorAll(
    ".praia, .ponto-turistico"
);



cartoes.forEach(function(cartao) {

   
    const botao = document.createElement("button");

    botao.textContent = "Saiba mais";

    botao.classList.add("botao-saiba-mais");


    
    const detalhes = document.createElement("p");

    detalhes.textContent =
        "Explore este lugar, conheça sua história e aproveite as belezas de João Pessoa.";

    detalhes.hidden = true;


    
    const informacao = cartao.querySelector(".informacao");

    if (!informacao) {
        return;
    }

    informacao.appendChild(botao);
    informacao.appendChild(detalhes);

 botao.addEventListener("click", function() {

        if (detalhes.hidden) {

            detalhes.hidden = false;
            botao.textContent = "Mostrar menos";

        } else {

            detalhes.hidden = true;
            botao.textContent = "Saiba mais";

        }

    });

});