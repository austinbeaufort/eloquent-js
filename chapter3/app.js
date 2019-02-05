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


// let greet = who => console.log(`Hello ${who}!`);

// greet('Harry');

// console.log('bye');


// PASSING TOO MANY ARGUMENTS, EXTRAS WILL BE IGNORED.
// PASSING TOO FEW, LEFT OVER PARAMETERS BECOME UNDEFINED.

// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
// }

// console.log(minus(10)); // -10
// console.log(minus(10, 5)); // 5



// DEFAULT PARAMETERS

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// }

// console.log(power(4)); // 16
// console.log(power(2, 6)); // 64


// CLOSURE


// FUNCTIONS CAN RETURN VALUES TO PASS TO OTHER VARIABLES / FUNCTIONS
// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1()); // 1
// console.log(wrap2()); // 2


// function multiplier(factor) {
//     return number => number * factor;
// }

// // multiplier = factor => {
// //     return number => number * factor;
// // }

// let twice = multiplier(2);
// let timesThree = multiplier(3);
// console.log(twice(5)); // 10
// console.log(timesThree(9)); // 27


// RECURSION

// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1);
//     }
// }

// console.log(power(3, 4));


// function findSolution(target) {
//     function find(current, history) {
//         if (current == history) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`) ||
//                    find(current * 3, `(${history} * 3`);
//         }
//     }
//     return find(1, '1');
// }

// console.log(findSolution(24));


// function printFarmInventory(cows, chickens) {
//     let cowString = String(cows);
//     while(cowString.length < 3) {
//         cowString = '0' + cowString;
//     }
//     console.log(`${cowString} Cows`);

//     let chickenString = String(chickens);
//     while (chickenString.length < 3) {
//         chickenString = '0' + chickenString;
//     }
//     console.log(`${chickenString} Chickens`);
// }

// printFarmInventory(7, 11);



// function printZeroPaddedWithLabel(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = '0' + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, 'Cows');
//     printZeroPaddedWithLabel(chickens, 'Chickens');
//     printZeroPaddedWithLabel(pigs, 'Pigs');
// }

// printFarmInventory(7, 11, 3);


// function zeroPad(number, width) {
//     let string = String(number);
//     while (string.length < width) {
//         string = '0' + string;
//     }
//     return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} Cows`);
//     console.log(`${zeroPad(chickens, 3)} Chickens`);
//     console.log(`${zeroPad(pigs, 3)} Pigs`);
// }

// printFarmInventory(7, 16, 3);



// EXERCISE: RETURN MINIMUM

// findMin = (a, b) => Math.min(a, b);

// console.log(findMin(-20, 36));



// EXERCISE: RECURSION WITH EVEN AND ODD

// isEven = number => {
//     if(number == 0) return true;
//     if(number == 1) return false;
//     if(number > 1) return isEven(number - 2);
// }

// console.log(isEven(77));
// console.log(isEven(78));


// EXERCISE: BEAN COUNTING

// countBs = string => {
//     let counter = 0;
//     for(let i = 0; i < string.length; i++) {
//         if (string.charAt(i) == 'B') counter ++;
//     }
//     return counter;
// }

// console.log(countBs('the Bat cannot Bite the Bitter Butter Because it is too Bitter'));


// countChar = (string, letter) => {
//     let counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) == letter) counter++;
//     }
//     return counter;
// }

// console.log(countChar('The cat ran across the crooked lawn.', 'c'));