/*
	Para o exercício de hoje: você já parou para pensar como uma calculadora funciona?
	Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número,
	e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?
	Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante:
	cada operação deverá ser uma função diferente no seu código.
	Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.
	Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
	As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair.
	Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
*/

//  Variáveis
var numPrimeiro;
var numPrimeiroResultado;
var operacao;
const soma = ["+","sum","Sum","SUM","soma","Soma","SOMA","mais","Mais","MAIS"];
const subtrai = ["-","minus","Minus","MINUS","menos","Menos","MENOS"];
const multiplica = ["*","mult","Mult","MULT","multiply","Multiply","MULTIPLY","multiplica","Multiplica","MULTIPLICA"];
const divide = ["/","div","Div","DIV","divide","Divide","DIVIDE"]
const arrayOperacao = soma.concat(subtrai, multiplica, divide);
var numSegundo;
var resultado;
//  Funções
function fSoma() {
	resultado = numPrimeiro + numSegundo;
}
function fSubtrai() {
	resultado = numPrimeiro - numSegundo;
}
function fMultiplica() {
	resultado = numPrimeiro * numSegundo;
}
function fDivide() {
	resultado = numPrimeiro / numSegundo;
}
function calcula() {
	switch(true) {
		case(soma.includes(operacao)):
			fSoma();
			break;
		case(subtrai.includes(operacao)):
			fSubtrai();
			break;
		case(multiplica.includes(operacao)):
			fMultiplica();
			break;
		case(divide.includes(operacao)):
			fDivide();
			break;
	}
}

alert("Bem vindo a calculadora!\nAqui você pode SOMAR, SUBTRAIR, MULTIPLICAR e DIVIDIR.");

numPrimeiro = parseInt(prompt("Por favor, insira o primeiro número."));
while(isNaN(numPrimeiro)) {
	alert("Você não inseriu um número, tente novamente.\nEx.: 9 --> SIM / Nove --> NÃO");
	numPrimeiro = parseInt(prompt("Por favor, insira o primeiro número."));
}
operacao = prompt("Por favor, insira a operação.");
while(!arrayOperacao.includes(operacao)) {
	alert("Você não inseriu uma operação válida, tente novamente.\n( + , - , * , / )");
	operacao = prompt("Por favor, insira a operação.");
}
numSegundo = parseInt(prompt("Por favor, insira o segundo número."));
while(isNaN(numSegundo)) {
	alert("Você não inseriu um número, tente novamente.\nEx.: 9 --> SIM / Nove --> NÃO");
}
calcula();

while(confirm("Continuar operação?")) {
	numPrimeiro = resultado;
	operacao = prompt("Por favor, insira a operação.");
	while(!arrayOperacao.includes(operacao)) {
		alert("Você não inseriu uma operação válida, tente novamente.\n( + , - , * , / )");
		operacao = prompt("Por favor, insira a operação.");
	}
	numSegundo = parseInt(prompt("Por favor, insira mais um número."));
	while(isNaN(numSegundo)) {
		alert("Você não inseriu um número, tente novamente.\nEx.: 9 --> SIM / Nove --> NÃO");
	}
	calcula();
}
alert(`O resultado do cálculo foi "${resultado}".`);