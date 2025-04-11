let np = parseInt(prompt("Digite o número de pombos: "));
let nc = parseInt(prompt("Digite o número de casas: "));

function distribuirPombos(casa, pombo) {
    let listaFinal = []
    let c = 0;
    while (c <= casa - 1) {
        listaFinal.push([])
        c++
    }
    c = 0;
    
    while (c <= pombo - 1) {
        let indexCase = c % casa;
        listaFinal[indexCase].push([0])
        c++
    }
    
    return listaFinal;
}

console.log(distribuirPombos(nc, np))
