// fun = f(x, y)
function fun(x, y) {
    return -8 * y + 4 * x * x - 7 * x - 1
}

function main(x, y, h, a, b) {
    for (let i = a; i <= b; i += h) {
        x.push(i)
    }

    // 先用四阶R-K法算出三个初值
    for (let i = 0; i < 2; i++) {
        const k1 = fun(x[i], y[i])
        const k2 = fun(x[i] + h / 2, y[i] + (k1 * h) / 2)
        const k3 = fun(x[i] + h / 2, y[i] + (k2 * h) / 2)
        const k4 = fun(x[i] + h, y[i] + k3 * h)
        y.push(y[i] + ((k1 + 2 * k2 + 2 * k3 + k4) * h) / 6)
    }

    for (let i = 2; i < x.length; i++) {
        // y.push(
        //     y[i] +
        //         ((23 * fun(x[i], y[i]) - 16 * fun(x[i - 1], y[i - 1]) + 5 * fun(x[i - 2], y[i - 2]))) *h/12
        // )
        y.push(y[i] + h * (23 * fun(x[i], y[i]) - 16 * fun(x[i - 1], y[i - 1]) + 5 * fun(x[i - 2], y[i - 2])) / 12)
    }
}

const x = []
const y = [1]
const h = 1 / 4
const a = 0
const b = 3

main(x, y, h, a, b)

console.log(x)
console.log(y)
for (let i = 0; i < y.length; i++) {
    console.log(`y${i}:`, y[i].toFixed(4))
}
