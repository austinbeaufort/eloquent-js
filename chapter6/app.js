// let rabbit = {};

// rabbit.speak = function(line) {
//     console.log(`The rabbit says ${line}`);
// };

// rabbit.speak(`I'm alive!`);

// let rabbit = {};

// function speak(line) {
//     console.log(`The ${this.type} rabbit says ${line}`);
// }

// let whiteRabbit = {type: 'white', speak};
// let hungryRabbit = {type: 'hungry', speak};

// whiteRabbit.speak('Oh my ears and whiskers, ' + `how late it's getting!`);
// hungryRabbit.speak('I could use a carrot right now!');


// function normalize() {
//     console.log(this.coords.map(n => n / this.length));
// }

// normalize.call({coords: [0, 2, 3], length: 5});


// console.log(Object.getPrototypeOf({}) == Object.prototype); // true
// console.log(Object.getPrototypeOf(Math.max) == Function.prototype); // true
// console.log(Object.getPrototypeOf([]) == Array.prototype); // true


// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// };

// let killerRabbit = Object.create(protoRabbit);

// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREEEEE!');

// console.log(killerRabbit);


// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type;
//     return rabbit;
// }



// function Rabbit(type) {
//     this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let weirdRabbit = new Rabbit('weird');

// weirdRabbit.speak('woopdeedoopdeedoo!');

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

// Rabbit.prototype.teeth = 'small';
// console.log(killerRabbit.teeth); // small

// killerRabbit.teeth = 'long, sharp, and bloody';
// console.log(killerRabbit.teeth); // long, sharp and bloody // overrides the prototype

// console.log(blackRabbit.teeth); // small
// console.log(Rabbit.prototype.teeth); // small



// MAPS

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Julia: 62
// };

// console.log(`Julia is ${ages['Julia']}`);
// console.log("Is Jack's age known?", "Jack" in ages); // false
// console.log("is toString's age known?", "toString" in ages); // true


// MAP USES SET, GET, AND HAS METHODS

// let ages = new Map();
// ages.set('Boris', 39);
// ages.set('Liang', 22);
// ages.set('Julia', 62);

// console.log(`Julia is ${ages.get('Julia')}`);
// console.log("Is Jacks' age known?", ages.has('Jack')); // false
// console.log(ages.has("toString")); // false

// hasOwnProperty Method exists. // ignores Object's prototype.



// POLYMORPHISM

// Rabbit.prototype.toString = function() {
//     return `a ${this.type} rabbit`;
// }


// SYMBOLS

// let sym = Symbol('name');
// console.log(sym == Symbol('name')); // false

// Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]); // 55


const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());


let stringObject = {
    [toStringSymbol]() {return "a jute rope"; }
};

console.log(stringObject[toStringSymbol]());