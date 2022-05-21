function isPrime(number) {
    let result
    let i
    for (i=2;i<number;i++) {
        if (number%i===0) {
            result = false
            break
        }
    }
    if (i===number) {
        result = true
    }
    return result
}

function run() {
    let n = 2
    while (n<1000) {
        if (isPrime(n)) {
            document.write(n + "<br>")
            n++
        } else {
            n++
        }
    }
}

