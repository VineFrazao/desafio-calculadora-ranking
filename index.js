//cria variaveis que receberao os valores das funcoes
let halfVictory = takeAway(50, 5)
let playerRaking = calculateRaking(halfVictory)

//funcao para calcular o numero de vitoria(winAmount) - derrota(lossAmount)
function takeAway(winAmount = 0, lossAmount = 0){
  return winAmount - lossAmount
}

//Funcao que define o ranking segundo os valores calculados pela funcao takeAway
function calculateRaking(victory){
  if(victory <= 10){
    return "Ferro"
  } else if (victory <= 20){
    return "Bronze"
  } else if (victory <= 50){
    return "Prata"
  } else if (victory <= 80){
    return "Ouro"
  } else if (victory <= 90){
    return "Diamante"
  } else if (victory <= 100){
    return "Lendário"
  } else {
    return "Imortal"
  }
}

//Exibe os resultados contidos em halfVictory e playerRaking
console.log(`O Herói tem de saldo de ${halfVictory} está no nível de ${playerRaking}`)