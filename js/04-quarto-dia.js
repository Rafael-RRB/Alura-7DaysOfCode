/*
  Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando?
  Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!
  Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
  Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar.
  Caso erre, ele vai te dar mais 2 tentativas. No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
  Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
*/
var vidasJogador = 3;
var scoreJogador = 0;
var numAleatorio = Math.round(Math.random() * 9 + 1);
console.log(numAleatorio);

while(vidasJogador > 0) {
  var numJogador = parseInt(prompt(`Por favor, escolha um número de 1 a 10.\nVidas restantes: ${vidasJogador}`));
  while(numJogador < 1 || numJogador > 10) {
    alert("O número escolhido não é um número de 1 a 10.");
    numJogador = parseInt(prompt(`Por favor, escolha um número de 1 a 10.\nVidas restantes: ${vidasJogador}`));
  }
  switch(true) {
    case (numJogador === numAleatorio):
      alert("Parabéns! Você acertou.");
      numAleatorio = Math.round(Math.random() * 9 + 1);
      console.log(numAleatorio);
      vidasJogador++;
      scoreJogador++;
      break;
    case (numJogador > numAleatorio):
      alert("Errado! Seu número é maior que o número aleatório.");
      vidasJogador--;
      break;
    case (numJogador < numAleatorio):
      alert("Errado! Seu número é menor que o número aleatório.");
      vidasJogador--;
      break;
  }
  if(vidasJogador > 0) {
    if(confirm("Você quer jogar novamente?")) {
      //Do Nothing.
    } else {
      alert(`Número Aleatório: ${numAleatorio}`);
      vidasJogador = 0;
      alert(`Score final: ${scoreJogador}`);
    }
  } else {
    alert(`Número Aleatório: ${numAleatorio}`);
    vidasJogador = 0;
    alert(`Score final: ${scoreJogador}`);
  }
}
