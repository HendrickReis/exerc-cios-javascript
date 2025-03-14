let req = String(prompt("insira: "))

function clearSpace(string) {
    let array = []
    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] != " ") {
            array.push(string[i])
        }
    }
    return array.join('');
}

function ehpalindromo(string) {
    for (let x = 0; x <= string.length - 1; x++) {
        let c = x;
            if (string[x].toLowerCase() !== string[(string.length - 1 - c)].toLowerCase()) {
                return false
        }
    }
    return true;
}

console.log(ehpalindromo(clearSpace(req)))
