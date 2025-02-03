//  variáveis
let display = document.getElementById("display");
let equacao = "";

//  display
function adicionar(valor) {
    equacao += valor;
    display.value = equacao;
}

// equação
function calcular() {
    try {
        equacao = eval(equacao); 
        display.value = equacao;
    } catch (erro) {
        display.value = "Erro";
    }
}

// limpa
function limpar() {
    equacao = "";
    display.value = "";
}

//  porcentagem
function adicionarPorcentagem() {
    equacao = eval(equacao) / 100;
    display.value = equacao;
}

//  ponto decimal corretamente
function adicionarPonto() {
    if (equacao === "" || equacao.slice(-1).match(/[+\-*/%]/)) {
        equacao += "0.";
    } else if (!equacao.includes(".")) {
        equacao += ".";
    }
    display.value = equacao;
}
