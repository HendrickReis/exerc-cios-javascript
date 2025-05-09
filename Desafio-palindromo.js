function filtrarString(param) {
    let res = [], invalidCharacters = [' ', '/', ',', '.', ';'] // não leve a sério, é só uma sequência verificativa, o importante mesmo é o espaço
    
    for (let x of param) {
        if (!invalidCharacters.includes(x)) {
         res.push(x)
        }  
    }
    return res.join('');
}

function isAnagram(param) {
    let arrayString = param.toLowerCase().split('')
    
    for (let x = 0; x <= arrayString.length - 1; x++) {
        if (arrayString[x] !== (arrayString[arrayString.length - x - 1])) {
            return false
        }
    }
    return true;
}

req = String(prompt("Insira uma palavra: "))
console.log(isAnagram(filtrarString(req)))
