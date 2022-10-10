// 1 var let const

var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
} 

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 30
    console.log(a)
}

console.log(a)

for(let i = 0; i < 10; i++) {
    console.log(i)
}

// 2 arrow function

const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}
console.log(sum (5,5))
console.log(arrowSum (10, 10))

const greeting = (name) => {
    if (name) {
        return ` olá ${name}, Bem vindo`
    } else {
        return ` Olá !`
    }
}

console.log(greeting ('Mateus'))