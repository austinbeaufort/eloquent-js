// const square = function(value) {
//     return value * value;
// }

// ES6
// square = value => value * value;

// console.log(square(12));
// console.log(square(133));
// console.log();


// const makeNoise = function() {
//     console.log('pling!');
// }

// makeNoise = () => console.log('pling!');

// makeNoise();

// const power = function(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };

// es6

// power = (base, exponent) => base ** exponent;

// console.log(power(2, 10));
// console.log(power(3, 4));


// SCOPE

// let x = 10;
// if (true) {
//     let y = 20;
//     let z = 30;
//     console.log(x + y + z); // 60. 
// }

// console.log(x + y + z); // y and z are undefined, out of scope.


// const halve = function(number) {
//     return number / 2;
// }

// const halve = number => number / 2;

// let number = 10;
// console.log(halve(100));
// console.log(number);


// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//         let ingredientAmount = amount * factor;
//         if(ingredientAmount > 1) {
//             unit += 's';
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, 'can', 'chickpeas');
//     ingredient(.25, 'cup', 'tahini');
//     ingredient(.25, 'cup', 'lemon juice');
//     ingredient(1, 'clove', 'garlic');
//     ingredient(2, 'tablespoon', 'olive oil');
//     ingredient(.5, 'teaspoon', 'cumin');
// }

// hummus(2);


let greet = who => console.log(`Hello ${who}!`);

greet('Harry');
console.log('bye');
