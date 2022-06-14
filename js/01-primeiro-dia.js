// 7 Days of Code - Primeiro Dia
console.log("Script: primeiro-dia.js");
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm === stringUm) {
console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez === stringDez) {
console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

alert("Veja o console para ver o teste original.");
var continua = true;

while(continua) {
	var primeiro = parseInt(prompt("Insira um NÚMERO."));
	while(isNaN(primeiro)) {
		alert("Você não inseriu um número, tente novamente.");
		primeiro = parseInt(prompt("Insira um NÚMERO."));
	}
	var segundo = prompt('Insira um número OU string.\n(Obs.: a função "prompt" transforma o valor inserido em prompt!)');
	var linhaUm = (primeiro == segundo);
	var linhaDois = (primeiro === segundo);
	alert(`${primeiro} e ${segundo} tem o mesmo valor? ${linhaUm};\n${primeiro} e ${segundo} tem o mesmo valor E tipo? ${linhaDois};`);
	if(!confirm("Comparar mais valores?")) {
		continua = false;
	}
}

