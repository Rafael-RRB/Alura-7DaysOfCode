/*
	Você deverá criar a opção de remover algum item da lista,
	que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?
	A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual,
	e a pessoa deverá escrever qual deles deseja remover.
	Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
	Por fim, ele voltará para o ciclo inicial de perguntas.
	Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
	Por exemplo: “Não foi possível encontrar o item dentro da lista!”
	Lembre-se que a opção de remover um item só deverá estar disponível
	a partir do momento que existir ao menos um elemento dentro da lista de compras.
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
var arrayTodos = [];

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
	arrayTodos = arrayCarnes.concat(arrayCongelados, arrayDoces, arrayFrutas, arrayLaticinios, arrayVegetais);
	
	var whileBotoes = true;
	while(whileBotoes) {
		if(confirm("Adicionar mais itens à lista?")) {
			usuarioInput = "";
			usuarioCategoria = "";
			whileBotoes = false;
		} else if(arrayTodos.length > 1) {
			if(confirm("Remover itens da lista?")) {
				var whileRemove = true;
				
				while(whileRemove) {
					var removeItem = prompt(`Remover qual item?\nLista atual: ${arrayTodos}.`);
					
					while(!arrayTodos.includes(removeItem)) {
						alert(`O item "${removeItem}" não existe na lista. (Precisa ser EXATO)\nLista atual: ${arrayTodos}.`);
						removeItem = prompt(`Remover qual item?\nLista atual: ${arrayTodos}.`);
					}
					
					switch(true) {
						case(arrayCarnes.includes(removeItem)):
							arrayCarnes.splice(usuarioInput.indexOf());
							break;
						case(arrayCongelados.includes(removeItem)):
							arrayCongelados.splice(usuarioInput.indexOf());
							break;
						case(arrayDoces.includes(removeItem)):
							arrayDoces.splice(usuarioInput.indexOf());
							break;
						case(arrayFrutas.includes(removeItem)):
							arrayFrutas.splice(usuarioInput.indexOf());
							break;
						case(arrayLaticinios.includes(removeItem)):
							arrayLaticinios.splice(usuarioInput.indexOf());
							break;
						case(arrayVegetais.includes(removeItem)):
							arrayVegetais.splice(usuarioInput.indexOf());
							break;		
					}
					arrayTodos = arrayCarnes.concat(arrayCongelados, arrayDoces, arrayFrutas, arrayLaticinios, arrayVegetais);
					if(arrayTodos.length > 1) {
						if(confirm("Remover mais itens da lista?")) {
							if(arrayTodos.length <= 0) {
								alert("Sua lista está vazia!");
							}
						} else {
							whileRemove = false;
						}
					} else {
						alert("Sua lista precisa ter pelo menos um item.\nPor favor, adicione mais itens ou finalize a lista.");
						whileRemove = false;
					}
				}
			} else if (confirm("Finalizar a lista?")) {
				whileBotoes = false;
				continuar = false;
			}
		} else if (confirm("Finalizar a lista?")) {
				whileBotoes = false;
				continuar = false;
		}
	}
}
alert(`Sua lista é:\nCarnes: ${arrayCarnes}\nCongelados: ${arrayCongelados}\nDoces: ${arrayDoces}\nFrutas: ${arrayFrutas}\nLaticínios: ${arrayLaticinios}\nVegetais: ${arrayVegetais}`);

// Pessoa: não deu tempo para terminar...
/*
arrayTodos.forEach(function(index) {
	index = index.toLowerCase().bind()	;
	index = index.charAt(0).toUpperCase()+index.slice(1);
}
);
*/
//NEW
var endText = (`Esta é a sua lista de compras:\nCarnes: ${arrayCarnes}\nCongelados: ${arrayCongelados}\nDoces: ${arrayDoces}\nFrutas: ${arrayFrutas}\nLaticínios: ${arrayLaticinios}\nVegetais: ${arrayVegetais}`);
document.querySelector("main section p").innerText = endText;
//END