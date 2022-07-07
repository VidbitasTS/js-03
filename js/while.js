'use strict'

// let txt = ''
// let i = 1
// while (i <= 10) {
//     txt += ` iteracija ${i} \n`
//     i++;
// }

//console.log(txt)


// i = 10
// while (i > -5) {
//     txt += ` iteracija ${i} \n`
//     i--;
// }
// console.log(txt)


// do {
//     console.log(i)
//     i++
// }
// while (i <= 8)

for (let i = 15; i <= 55; i++) {
    console.log(i)
}

for (let i = 100; i >= 40; i--) {
    console.log(i)
}

let suma = 0
for (let i = 1; i <= 10; i++) {
    suma += i
    console.log(suma)
}

suma = 0
let i = 0;
for (i = 2; i <= 10; i++) {
    suma += i
}

console.log(suma / (i - 1))

for (let i = 11; i <= 22; i++) {
    console.log(i * 2)
}