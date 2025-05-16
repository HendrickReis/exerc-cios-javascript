((palavras = ["helicóptero", "smogon", "capa", "free fire", "cômodo", "cavalo", "carro", "talher", "tapete"]) => {
    console.log("Bem-vindo ao jogo da forca!");
    
    const sorteada = () => {
        let palavra = []
        let index = palavras[Math.floor(Math.random() * palavras.length)];
        for (let x in index) {
            palavra.push(index[x])
        }
        return palavra;
    };


    const palavra = sorteada();
    const mascara = function mask() {   
        let maskFinal = []
        palavra.forEach((index) => {
            maskFinal.push("_")
        })
        return maskFinal;
    }
    const mascaraFinal = mascara()
    let ver = true
    let tentativasRestantes = 4;

    do {
        console.log(`Forca: ${mascaraFinal.join(" ")}`);
        let tentativa = prompt("Digite uma letra(ou chute): ").toLowerCase().trim()
        if (!palavra.join("").includes(tentativa) || tentativa === '') {
            tentativasRestantes -= 1;
            if (tentativasRestantes === 0) {
                ver = false;
                console.log("Você perdeu!")
            } else console.log(`Errou! mais ${tentativasRestantes} tentativas!`)
        } else {
            console.log("Acertou!")
            if (palavra.join("") == tentativa) {
            ver = false;
            } else {
            for (let i = 0; i <= palavra.length; i++) {
                if (palavra[i] == tentativa) {
                    mascaraFinal[i] = tentativa 
                }
                if (mascaraFinal.join("").replace(" ", "") == palavra.join("")) {
                    ver = false;
                }
            }
            }
        }
    } while(ver)
    console.log(`Palavra sorteada: ${palavra.join("")}`);
})();
