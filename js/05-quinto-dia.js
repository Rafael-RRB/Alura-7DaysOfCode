/*
	você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras,
	e você deve poder responder com sim ou não.
	Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
	Depois, ele deverá perguntar em qual categoria essa comida se encaixa, 
	com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante.
	Assim, você poderá separar tudo no seu devido grupo.
	Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, 
	ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

	Caso você adicione na sua lista:
	banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

	O programa deverá imprimir, por exemplo:

	Lista de compras:
	Frutas: banana, tomate, maçã, uva, abacate
	Laticínios: leite vegetal, leite de vaca, leite em pó
	Congelados:
	Doces: chiclete e bala de ursinho
*/

//  Variáveis
var arrayCarnes = [];
const carne = ["carne", "Carne", "CARNE", "carnes", "Carnes", "CARNES"];
var arrayCongelados = [];
const congelado = ["congelado", "Congelado", "CONGELADO", "congelados", "Congelados", "CONGELADOS"];
var arrayDoces = [];
const doce = ["doce", "Doce", "DOCE", "doce", "Doces", "DOCES"];
var arrayFrutas = [];
const fruta = ["fruta", "Fruta", "FRUTAS", "frutas", "Frutas", "FRUTAS"];
var arrayLaticinios = [];
const laticinio = ["laticínio", "Laticínio", "LATICÍNIO", "laticínios", "Laticínios", "LATICÍNIOS", "laticinio", "Laticinio", "LATICINIOS", "laticinios", "Laticinios", "LATICINIOS"];
var arrayVegetais = [];
const vegetal = ["vegetal", "Vegetal", "VEGETAL", "vegetais", "Vegetais", "VEGETAIS"];
const categoriaTodos = carne.concat(congelado, doce, fruta, laticinio, vegetal);

var primeiroPrompt = "Bem vindo a sua lista de compras (de alimentos...)\nPor favor, insira um alimento.";
var continuar = true;
var usuarioInput = "";

while(continuar) {
	var usuarioInput = String(prompt(primeiroPrompt)).trim();
	primeiroPrompt = "Por favor, insira um alimento.";

	while(usuarioInput === "null" || usuarioInput === "") {
		alert("Você precisa inserir pelo menos 1(um) alimento.");
		usuarioInput = String(prompt(primeiroPrompt)).trim();
	}

	var usuarioCategoria = prompt(`${usuarioInput} se encaixa em qual das categorias abaixo?\n(Carnes, Congelados, Doces, Frutas, Laticínios, Vegetais)`);
	while(!categoriaTodos.includes(usuarioCategoria)) {
		alert("Você não inseriu uma categoria válida.\nPor favor, tente novamente.");
		usuarioCategoria = prompt(`${usuarioInput} se encaixa em qual das categorias abaixo?\n(Carnes, Congelados, Doces, Frutas, Laticínios, Vegetais)`);
	}

	switch(true) {
		case(carne.includes(usuarioCategoria)):
			arrayCarnes.push(usuarioInput);
			break;
		case(congelado.includes(usuarioCategoria)):
			arrayCongelados.push(usuarioInput);
			break;
		case(doce.includes(usuarioCategoria)):
			arrayDoces.push(usuarioInput);
			break;
		case(fruta.includes(usuarioCategoria)):
			arrayFrutas.push(usuarioInput);
			break;
		case(laticinio.includes(usuarioCategoria)):
			arrayLaticinios.push(usuarioInput);
			break;
		case(vegetal.includes(usuarioCategoria)):
			arrayVegetais.push(usuarioInput);
			break;		
	}
	
	if(continuar = confirm("Adicionar mais itens à lista?")) {
		usuarioInput = "";
		usuarioCategoria = "";
	}
	
}

var arrayTodos = arrayCarnes.concat(arrayCongelados, arrayDoces, arrayFrutas, arrayLaticinios, arrayVegetais);
alert("Sua lista é:\n" + arrayTodos);

// Pessoa: não deu tempo para terminar...
/*
arrayTodos.forEach(function(index) {
	index = index.toLowerCase().bind()	;
	index = index.charAt(0).toUpperCase()+index.slice(1);
}
);
*/




