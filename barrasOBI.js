var N, H;
var line=[], table=[], values=[], aux=[];

N = Number(prompt())

for (let x = 0; x < N; x++) {
    values[x] = Number(prompt())
}

for (let a = 0; a < values.length; a++) {
    aux.push(values[a])
}

H = values.sort((a, b) => a - b)[values.length - 1]

for (let x = 0; x < H; x++) {
    line = []
    for (let y = 0; y < N; y++) {
        line.push(0)
    }
    table.push(line)
}

for (let x = 0; x < N; x++) {
    for (let y = 0; y < aux[x]; y++) {
        table[H - 1 - y][x] = 1;
    }
}


for (let x in table) {
    console.log(table[x].join(""));
}
