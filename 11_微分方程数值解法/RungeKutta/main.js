// fun = f(x, y)
function fun(x, y) {
    return -8 * y + 4 * x * x - 7 * x - 1
}

function main(x, y, h, a, b) {
    for (let i = a; i <= b; i += h) {
        x.push(i)
    }

    for (let i = 0; i < x.length; i++) {
        const k1 = fun(x[i], y[i])
        const k2 = fun(x[i] + h / 2, y[i] + (k1 * h) / 2)
        const k3 = fun(x[i] + h / 2, y[i] + (k2 * h) / 2)
        const k4 = fun(x[i] + h, y[i] + k3 * h)
        y.push(y[i] + ((k1 + 2 * k2 + 2 * k3 + k4) * h) / 6)
    }
}

const x = []
const y = [1]
const h = 1 / 4
const a = 0
const b = 1

main(x, y, h, a, b)

console.log(x);
console.log(y);
for (let i = 0; i < y.length; i++) {
    console.log(`y${i}:`, y[i].toFixed(4));
}
