function pontosRanked(vitorias, derrotas){
    let calculo = (vitorias - derrotas)

    if (calculo <= 10) {
        nivel = "Ferro"
    } else if (calculo > 10 && calculo <= 20) {
        nivel = "Bronze"
    } else if (calculo > 20 && calculo <= 50) {
        nivel = "Prata"
    } else if (calculo > 50 && calculo <= 80) {
        nivel = "Ouro"
    } else if (calculo > 80 && calculo <= 90) {
        nivel = 'Diamante'
    } else if (calculo > 90 && calculo <= 100) {
        nivel = "Lendário"
    } else if (calculo > 100) {
        nivel = "Imortal"
    }
    
    return console.log("O Heroi tem o saldo de " + (calculo) + " e está no nível " + (nivel))
}

pontosRanked(1000, 10)