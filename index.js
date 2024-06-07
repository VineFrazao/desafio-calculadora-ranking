let halfVictory = takeAway(50, 5)
let playerRaking = calculateRaking(halfVictory)

function takeAway(winAmount = 0, lossAmount = 0){
  return winAmount - lossAmount
}

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

console.log(`O Herói tem de saldo de ${halfVictory} está no nível de ${playerRaking}`)