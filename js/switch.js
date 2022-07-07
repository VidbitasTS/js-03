'use strict';





let kint2 = +prompt('Menesio skaicius')
let diena1;


if (kint2 <= 0 || kint2 > 12) {
    alert('Iveskite skaiciu nuo 1 iki 12')
        //   return
}

switch (kint2) {
    case 1:
    case 2:
    case 3:
        diena1 = '1';
        break;
    case 4:
    case 5:
    case 6:
        diena1 = '2';
    case 7:
    case 8:
    case 9:
        diena1 = '3';
        break;
    default:
        diena1 = '4';
}
console.log(`${diena1} ketvirtis`);








//let kint = +prompt('Iveskite savaites diena:');
let kint1 = 6
let diena;

switch (kint1) {
    case 1:
        diena = 'pirmadienis';
        break;
    case 2:
        diena = 'antradienis';
        break;
    case 3:
        diena = 'treciadienis';
        break;
    case 4:
        diena = 'ketvirtadienis';
        break;
    case 5:
    case 6:
    case 7:
        diena = 'savaitgalis';
        break;
        // case 6:
        //     diena = 'sestadienis';
        //     break;
        // case 7:
        //     diena = 'sekmadienis';
        //     break;
    default:
        diena = 'Bloga diena';
}

//console.log(`pasirinktas skaicius yra ${kint1} === ${diena}`);