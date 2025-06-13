var N, H, aux;
var line=[], table=[], values=[];

N = Number(prompt())

for (let x = 0; x < N; x++) {
    values[x] = Number(prompt())
}

values.sort((a, b) => a - b)
H = values[values.length - 1]

for (let x = 0; x < H; x++) {
    line = []
    for (let y = 0; y < N; y++) {
        line.push(0)
    }
    table.push(line)
}

for (let x = 0; x < N; x++) {
    for (let y = 0; y < values[x]; y++) {
        table[H - 1 - y][x] = 1;
    }
}


for (let x in table) {
    console.log(table[x].join(""));
}
