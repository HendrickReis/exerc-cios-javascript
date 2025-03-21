function binary_search(Lista, item) {
    let lista = Lista;
    let inicio = 0;
    let fim = lista.length - 1;
    
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2)
        if (lista[meio] === item) {
            return lista[meio];
        } else if (lista[inicio] < item) {
            inicio = meio + 1;
        } else if (lista[fim] > item) {
            fim = meio - 1;
        }
    }
    
    return -1;
}

console.log(binary_search([1, 2, 3, 4, 5, 6], 66))
