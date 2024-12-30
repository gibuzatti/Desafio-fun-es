let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function exibirMensagemNoConsole() {
    console.log("O botão foi clicado");
}

function exibirAlerta() {
    alert("Eu amo JS");
}

function exibirPrompt() {
let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você goste muito:');
    alert('Estive em ${nomeDaCidade} e lembrei de você');
}

function somandoDoisNumeros() {
    let primeiroNumero= parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

function exibirOla() {
    console.log("Olá, mundo!");
}

exibirOla();

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Giorgia");

function calcularDobro(numero) {
    return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

function calcularMedia(a,b,c) {
    return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);

function encontrarMaior(a, b){
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

function quadrado(numero) {
    return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado);