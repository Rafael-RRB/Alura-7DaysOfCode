//Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
/*
  1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
*/
const frontEndArray = ["f", "F", "front", "Front", "FRONT", "frontend", "Frontend", "FRONTEND", "front-end", "Front-end", "Front-End", "FRONT-END"];
const backEndArray = ["b", "B", "back", "Back", "BACK", "backend", "Backend", "BACKEND", "back-end", "Back-end", "Back-End", "BACK-END"];
const msgErroInput = "Não reconhecido.\nPor favor, insira novamente.";
var areaProgramacao = prompt("Você prefere a área Front-End ou Back-End?");

while(frontEndArray.includes(areaProgramacao) === false && backEndArray.includes(areaProgramacao) === false) {
  alert(msgErroInput);
  areaProgramacao = prompt("Você prefere a área Front-End ou Back-End?");
}
/*
  2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
  Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
*/
const frontEndReact = ["r", "R", "react", "React", "REACT"];
const frontEndVue = ["v", "V", "vue", "Vue", "VUE"];
const backEndC = ["c", "C", "#", "c#", "C#"];
const backEndJava = ["j", "J", "java", "Java", "JAVA"];

if(frontEndArray.includes(areaProgramacao)) {
  areaProgramacao = "Front-End";
  var lingProgramacao = prompt("Você prefere aprender React ou Vue?");
  while(frontEndReact.includes(lingProgramacao) === false && frontEndVue.includes(lingProgramacao) === false) {
    alert(msgErroInput);
    var lingProgramacao = prompt("Você prefere aprender React ou Vue?");
  }
} else {
  areaProgramacao = "Back-End";
  var lingProgramacao = prompt("Você prefere aprender C# ou Java?");
  while(backEndC.includes(lingProgramacao) === false && backEndJava.includes(lingProgramacao) === false) {
    alert(msgErroInput);
    var lingProgramacao = prompt("Você prefere aprender C# ou Java?");
  }
}
/*  
  3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se 
  especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. 
  Você deve exibir na tela uma mensagem específica para cada escolha.
*/
switch(true) {
  case frontEndReact.includes(lingProgramacao):
    var futuroEspecialista = ["e", "E", "especializar", "Especializar", "ESPECIALIZAR"].concat(frontEndReact);
    lingProgramacao = "React";
    break;
  case frontEndVue.includes(lingProgramacao):
    var futuroEspecialista = ["e", "E", "especializar", "Especializar", "ESPECIALIZAR"].concat(frontEndVue);
    lingProgramacao = "Vue";
    break;
  case backEndC.includes(lingProgramacao):
    var futuroEspecialista = ["e", "E", "especializar", "Especializar", "ESPECIALIZAR"].concat(backEndC);
    lingProgramacao = "C#";
    break;
  case backEndJava.includes(lingProgramacao):
    var futuroEspecialista = ["e", "E", "especializar", "Especializar", "ESPECIALIZAR"].concat(backEndJava);
    lingProgramacao = "Java";
    break;
}
const futuroFullstack = ["f", "F", "full", "Full", "FULL", "fullstack", "Fullstack", "FullStack", "FULLSTACK"];
var futuroEscolha = prompt(`Você quer se especializar em ${lingProgramacao} ou se tornar Fullstack?`);

while(futuroEspecialista.includes(futuroEscolha) === false && futuroFullstack.includes(futuroEscolha) === false) {
  alert(msgErroInput);
  futuroEscolha = prompt(`Você quer se especializar em ${lingProgramacao} ou se tornar Fullstack?`);
}
if(futuroEspecialista.includes(futuroEscolha)) {
  futuroEscolha = "Especializado";
} else {
  futuroEscolha = "Fullstack";
}

/*
  4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.
  Aqui, a pessoa pode responder N tecnologias, uma de cada vez. 
  Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”,
  continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. 
  E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
*/
const respPositiva = ["s", "S", "sim", "Sim", "SIM", "y", "Y", "yes", "Yes", "YES", "yup", "Yup", "YUP", "ok", "OK"];
const respNegativa = ["ñ", "Ñ", "n", "N", "nah", "Nah", "NAH", "nope", "Nope", "NOPE", "nao", "Nao", "NAO", "não", "Não", "NÃO"];

var respostaTecnologia = [lingProgramacao];
var repetePassoQuatro = true;
//
while(repetePassoQuatro) {
  if(respostaTecnologia.length === 1) {
    var respostaQuestao = prompt(`Desconsiderando a tecnologia ${lingProgramacao}, há outras que te interessam?`);
  } else {
    var respostaQuestao = prompt(`há outras que te interessam? (Lista atual: ${respostaTecnologia})`);
  }
  while(respPositiva.includes(respostaQuestao) === false && respNegativa.includes(respostaQuestao) === false) {
    alert(msgErroInput);
    if(respostaTecnologia.length === 1) {
      var respostaQuestao = prompt(`Desconsiderando a tecnologia ${lingProgramacao}, há outras que te interessam?`);
    } else {
      var respostaQuestao = prompt(`há outras que te interessam? (Lista atual: ${respostaTecnologia})`);
    }
  }
  if(respPositiva.includes(respostaQuestao)) {
    respostaTecnologia.push(prompt("Qual tecnologia te interessa?"));
  } else {
    repetePassoQuatro = false;
  }
}

alert(`Você prefere a área ${areaProgramacao}, utilizando a linguagem ${lingProgramacao}.
Quer ser um dev ${futuroEscolha}, e tem interesse na(s) tecnologia(s) ${respostaTecnologia.join(', ')}.`);
/*
  Problemas
  
  1. Aprender como ignorar casing --> "sim" === ["SiM","SIM",etc]);
  
*/

//NEW

var endText = (`Você prefere a área ${areaProgramacao}, utilizando a linguagem ${lingProgramacao}.
Quer ser um dev ${futuroEscolha}, e tem interesse na(s) tecnologia(s) ${respostaTecnologia.join(', ')}.`);
document.querySelector("main section p").innerText = endText;

//END