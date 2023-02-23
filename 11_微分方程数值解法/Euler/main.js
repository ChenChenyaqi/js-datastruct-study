// fun = f(x, y)
function fun(x, y){
    return y - 2*x/y
}

const x = [];
const y = [1];
const h = 1/16;
const a = 0;
const b = 1;
function main(x, y, h, a, b){
    for(let i = a; i <= b; i+=h){
        x.push(i);
    }
    for(let i = 0; i < x.length; i++){
        y.push(y[i] + h * fun(x[i], y[i]))
    }
}

main(x, y, h, a, b)

console.log(x);
console.log(y);
for (let i = 0; i < y.length; i++) {
    console.log(`y${i}:`, y[i].toFixed(4));
}
