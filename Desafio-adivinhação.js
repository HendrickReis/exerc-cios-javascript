(() => {
    console.log("-=-=-=-=-=-JOGO DA ADIVINHAÇÃO-=-=-=-=-=-")
    const numero_sorteado = randomNumber()
    let tentativas = 0;
    let input;
    
    do {
        input = prompt("Digite um número: (digite 'desisto' para desistir.') ").trim()
        tentativas += 1;
        let input_inteiro = parseInt(input)
        
        switch (true) {
            case (input_inteiro == numero_sorteado):
                console.log(`Parabéns! você venceu o jogo com ${tentativas} tentativas!`)
                break
            case (input_inteiro + 5) >= numero_sorteado && (input_inteiro - 5) <= numero_sorteado:
                console.log("Ta quase lá!")
                break
            case (input_inteiro + 20) >= numero_sorteado && (input_inteiro - 20) <= numero_sorteado:
                console.log("É por essa direção...")
                break
            case (input_inteiro + 50) >= numero_sorteado && (input_inteiro - 50) <= numero_sorteado:
                console.log("Muito frio!")
                break
            case (input_inteiro + 75) >= numero_sorteado && (input_inteiro - 75) <= numero_sorteado:
                console.log("Chute horrivel...")
                break
            case (input.toLowerCase() == "desisto"):
                console.log("O número era:", numero_sorteado)
                input = numero_sorteado
                break
            default:
                break
        }
    } while (parseInt(input) != numero_sorteado)
    
    function randomNumber() {
        return Math.round(Math.random() * 100) + 1
    }
})()
