//  A SINGLE LET STATEMENT CAN COMBINE MULTIPLE BINDINGS
// let one = 1, two = 2;
// console.log(one + two) // 3

// MATH.MAX TAKES ANY NUMBER OF ARGUMENTS AND RETURNS THE GREATEST
// console.log(Math.max(22, 76, 5, -33, 22, 1)); // 76

// MATH.MIN
// console.log(Math.min(2, 4, 76, 55) + 100); // takes the smallest number, '2', and adds 100.

// let theNumber = Number(prompt('pick a number'));

// if(!isNaN(theNumber)) {
//     console.log(`You're number is the square root of ${theNumber * theNumber}`);
// }


// brackets can be omitted for one liners.
// if (1 + 1 == 2) console.log(`it's true!`);


// let theNumber = Number(prompt('pick a number'));

// if(!isNaN(theNumber)) {
//     console.log(`You're number is the square root of ${theNumber * theNumber}`);
// } else {
//     console.log(`next time give me a real number..`);
// }


// let myNum = 0;

// while (myNum <= 12) {
//     console.log(myNum);
//     myNum += 2;
// }


// let result = 1;
// let counter = 0;

// while (counter < 10) {
//     result *= 2;
//     counter += 1;
// }

// console.log(result);

// let yourName;
// do {
//     yourName = prompt('what is your name?');
// } while (!yourName);
// console.log(yourName);


// switch( prompt('what is the weather like?')) {
//     case 'rainy':
//     console.log('bring umbrella');
//     break;
//     case 'sunny':
//     console.log('dress lightly');
//     case 'cloudy':
//     console.log('go outside');
//     break;
//     default:
//     console.log('unknown weather');
// }


// EXERCISE 1
// let myString = '';

// for(let i = 0; i < 7; i++) {
//     myString += '#';
//     console.log(myString);
// }


// EXERCISE 'FIZZBUZZ'


// BROWSER SOLUTION!
let fizzy = document.querySelector('.fizzy');
let fizzDoc = '';


for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        fizzDoc += `<img src="https://i.ibb.co/VWMGVVt/FIZZBUZZ.png" width="150px" alt="FIZZBUZZ" border="0">
        ` ;
    } else if(i % 3 == 0) {
        fizzDoc += `<img src="https://i.ibb.co/dMTxX8H/COKE.png" width="40px" alt="COKE" border="0">
        `;
    } else if(i % 5 == 0) {
        fizzDoc += `<img src="https://i.ibb.co/9vDChWB/BUZZ.png" width="150px" alt="BUZZ" border="0">
        `;
    }
    else {
        fizzDoc += `${i}
        `;
    }
    fizzy.innerHTML = fizzDoc;
}


// ALSO SEE IT IN THE CONSOLE!
for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if(i % 3 == 0) {
        console.log('Fizz');
    } else if(i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}