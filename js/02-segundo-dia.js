// 7 Days of Code - Segundo Dia
console.log("Script: segundo-dia.js");
// Deve haver um método melhor, não?
var end = false;

const userNome = prompt("Por favor, insira seu primeiro nome.");

var userIdade = parseInt(prompt("Por favor, insira sua idade."));
while(userIdade < 6 || userIdade > 122) {
  var userIdade = prompt("Por favor, insira sua idade.");
}

const userProgLingua = prompt("Por favor, insira a linguagem de programação atualmente estudada.");

alert(`Olá ${userNome}, você tem ${userIdade} anos e já está aprendendo ${userProgLingua}!`);

// Achar posteriormente um método 'case-insensitive';
const positivoValido = ['y', 'Y', 'yes', 'Yes', 'YES', 's', 'S', 'sim', 'Sim', 'SIM', '1'];
const negativoValido = ['n', 'N', 'no', 'No', 'NO', 'nao', 'Nao', 'NAO', 'não', 'Não', 'NÃO', '2'];

while(!end) {
  var userGosta = prompt(`Você gosta de estudar ${userProgLingua}? Responda, por exemplo, Sim ou Não.`);
  for(i = 0; i < positivoValido.length; i++) {
    if(userGosta == positivoValido[i]) {
      end = true;
      userGosta = true;
    }
  }
  for(i = 0; i < negativoValido.length; i++) {
    if(userGosta == negativoValido[i]) {
      end = true;
      userGosta = false;
    }
  }
}

if(userGosta) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
	//NEW
	userGosta = "Como você gosta desta língua, continue estudando e você terá muito sucesso!";
	//END
} else {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
	//NEW
	userGosta = "Infelizmente, você não gosta desta língua... mas eu tenho certeza que você poderá encontrar outra na Alura!";
	//END
}

//NEW
var endText = (`Olá ${userNome},\nVocê tem ${userIdade} anos e já está aprendendo ${userProgLingua}!\n${userGosta}`);
document.querySelector('main section p').innerText = endText;
//END