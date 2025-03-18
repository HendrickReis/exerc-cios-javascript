((input) => {
    let palavras = {
        
    }
    let palavra = ""
    
    for (let i in input) {
        if (input[i] === " ") {
            if (palavra) {
                palavras[palavra] = (palavras[palavra] || 0) + 1;
                palavra = "";
            }
        } else {
            palavra += input[i]
        }
    }
    
    if (palavra) {
        palavras[palavra] = (palavras[palavra] || 0) + 1;
    }
    
    console.log(palavras)
    
})(removerCaracteres(prompt("Digite algo: ".trim())))

function removerCaracteres(target) {
    return target.replace(/[,.;/!?"]/g, "").toLowerCase()
}
