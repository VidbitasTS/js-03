'use strict';
console.log('terenary');

let x = 7;

let laikas;
if (x < 6) {
    laikas = 'naktis';
} else {
    laikas = 'diena';
}

//let laikas = x < 6 ? 'Naktis' : 'diena';
//console.log('laikas ===', laikas);
//alert(laikas);

let darkMode = true;

const darkColor = '#333';

const lightColor = '#fff';

// if (darkMode === true) {
//     document.body.style.backgroundColor = darkColor
// } else {
//     document.body.style.backgroundColor = lightColor;
// }

document.body.style.backgroundColor = darkMode ? darkColor : lightColor;