function fibo(num) {
    seq = [0, 1]

    if (num <= 1) {console.log(seq[0])}

    if (num == 2) {console.log(...seq)}

    if (num > 2 ){
        for (let i = 1; i <= (num-2); i++) {
            seq.push(seq[seq.length-1] + seq[seq.length-2])
        }
        console.log(...seq)
    }
}

fibo(6)