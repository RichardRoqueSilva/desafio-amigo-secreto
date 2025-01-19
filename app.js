let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultadoDiv = document.getElementById('resultado');
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
let adicionarAmigo = () => {
    let nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, insira um nome válido");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        inputAmigo.value = "";
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = '';
     
     limparResultado();
};


// Função para atualizar a lista de amigos na tela
let atualizarListaAmigos = () => {
    listaAmigos.innerHTML = '';
    listaDeAmigos.map(amigo => {
        let listItem = document.createElement('li');
        listItem.classList.add("name-item");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
};

// Função para embaralhar o array
let sortearNomeAmigo = (array) => {
    let i = array.length;
    while (i) {
      const j = Math.floor(Math.random() * i--);
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
// Função para realizar o sorteio do amigo secreto
let sortearAmigo = () => {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    resultadoDiv.innerHTML = "";

    let amigosEmbaralhados = [...listaDeAmigos];
    sortearNomeAmigo(amigosEmbaralhados);

    let amigoSorteado = amigosEmbaralhados[0];

    exibirResultado(amigoSorteado);
    limparListaAmigos();
};

// Função para exibir os resultados do sorteio
let exibirResultado = (amigoSorteado) => {
    let resultItem = document.createElement('li');
    resultItem.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultadoDiv.appendChild(resultItem);
};

// Função para limpar a lista de amigos
let limparListaAmigos = () => {
    listaDeAmigos.length = 0;
    atualizarListaAmigos();
};


// Função para limpar o resultado
let limparResultado = () => {
   resultadoDiv.innerHTML = "";
}

// Adiciona um listener de evento ao input para limpar a mensagem ao digitar
inputAmigo.addEventListener("input", limparResultado);