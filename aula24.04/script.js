
//Exercício 01//

function mostrarmensagem() {
    alert("JavaScript é divertido!");
};

document.addEventListener("DOMContentLoaded", function(){
    documentElement.getElementByid("mensagem"). addEventListener("click", mostrarmensagem);

});

//Exercício 02//

function mudetexto() {
    document.getElementById('texto').innerText ='Texto atualizado com JavaScript!';
    
};   

//Exercício 03//

function mudarFundoParaAzul() {
    document.getElementById("pagina").style.backgroundColor = "blue";
  }
  
  // Adiciona o evento ao botão após o carregamento da página
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botaoMudar").addEventListener("click", mudarFundoParaAzul);
  });

//Exercício 04//

function mostrarNome() {
    const nome = document.getElementById("nome").value;
    alert("Nome: " + nome);
}

//Exercício 05//

function esconderParagrafo() {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.style.display = "none";
  }

// Exercício 6
function alterarConteudo() {
    document.getElementById("ex6").innerHTML = "<h2>Título Inserido</h2><p>Este é um parágrafo adicionado via JavaScript.</p>";
}

// Exercício 7//
function mudarCor() {
    document.getElementById("ex7").style.color = "red";
}

// Exercício 8//
function contarCaracteres() {
    const texto = document.getElementById("campoTexto").value;
    document.getElementById("contador").innerText = `Caracteres: ${texto.length}`;
}

// Exercício 9//
let tamanhoFonte = 16;
function aumentarFonte() {
    tamanhoFonte += 2;
    document.getElementById("ex9").style.fontSize = `${tamanhoFonte}px`;
}

// Exercício 10//
function alternarVisibilidade() {
    const paragrafo = document.getElementById("ex10");
    paragrafo.style.display = (paragrafo.style.display === "none") ? "block" : "none";
}