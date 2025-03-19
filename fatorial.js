function fatorial(n, memo = {}) {
    if (n === 0n || n === 1n) return 1n;
    if (memo[n]) return memo[n];
    
    memo[n] = n * fatorial(n - 1n, memo)
    
    return memo[n]
}

console.log(fatorial(12n))
