// let day1 = {
//     squirrel: false,
//     events: ['work', 'touched tree', 'pizza', 'running']
// };

// day1.wolf = false;
// console.log(day1.squirrel);
// console.log(day1.wolf);
// console.log(day1.events[2]); // pizza

// to delete a property from an object,
// delete day1.wolf;
// console.log(day1.wolf); // undefined.

// console.log('events' in day1); // exists, so true.
// console.log('squirrel' in day1);// exists, so true.


// console.log(Object.keys({  // prints out object keys
//     squirrel: false,
//     events: ['work', 'touched tree', 'pizza', 'running']
// }));


// let objectA = {a: 1, b:2};
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA); // {a: 1, b: 3, c: 4};


// let journal = []; // creates empty journal

// function addEntry(events, squirrel) { // this function pushes objects to the journal.
//     journal.push({events, squirrel});
// }

// addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);  // run object through function to push it to journal.
// addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
// addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

// console.log(journal);


// console.log([1, 2, 3, 2, 1].indexOf(2)); // 1, returns the first occurence of '2'.
// console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // 3, returns the first occurence of '2'.


// console.log([0, 1, 2, 3, 4].slice(2, 4)); // [2, 3];
// console.log([0, 1, 2, 3, 4].slice(2)); // [2, 3, 4] // starts at index 2, returns inclusive 2nd index and everything after.

// let oldArray = [1, 2, 3, 4];
// let newArray = oldArray.slice(); // creates newArray with all elements of oldArray.
// console.log(newArray);



// function remove(array, index) {
//     return array.slice(0, index) // ['a', 'b']
//         .concat(array.slice(index + 1)); // concats the return value to index 3 and continues through end of array.
// }

// console.log(remove['a', 'b', 'c', 'd', 'e'], 2)); // ['a', 'b', 'd', 'e']


// console.log('coconuts'.slice(4, 7)); // nut
// console.log('coconuts'.indexOf('u')); // 5

// console.log('   okay \n  ');
// console.log('   okay \n  '.trim());


// console.log(String(6).padStart(3, '0'));


// let sentence = 'Secretarybirds specialize in stomping';
// let words = sentence.split(' ');
// console.log(words);

// console.log(words.join(' '));

// console.log('LA '.repeat(7));


// REST PARAMETERS

// function max(...numbers) { // ...numbers, will be an array of numbers.
//     let result = -Infinity;
//     for(let number of numbers) {
//         if(number > result) result = number;
//     }
//     return result;
// }

// console.log(max(4, 1, 9, -2)); // 9

// let numbers = [5, 1, 7];
// console.log(max(...numbers));


// let words = ['never', 'fully'];
// console.log(['will', ...words, 'understand']); // ['will', 'never', 'fully', 'understand'];


// function randomPointOnCircle(radius) {
//     let angle = Math.random() * 2 * Math.PI;
//     return {x: radius * Math.cos(angle),
//             y: radius * Math.sin(angle)};
// }

// console.log(randomPointOnCircle(2));


// console.log(Math.floor(Math.random() * 10));


// DESTRUCTURING

// let {name, age} = {name: 'Faraji', age: 23};
// console.log(name, age);





// EXERCISE: THE SUM OF A RANGE

// range = (start, end, step = 1) => {
//     let arr = [];

//     // negative steps
//     if (step < 0) {
//         for (let i = start; i >= end; i+=step){
//             arr.push(i);
//         }
//     }
//     // positive steps
//     for (let i = start; i <= end; i+=step) {
//         arr.push(i);
//     }
//     return arr;
// }

// // console.log(range(7, 37));


// sum = arr => {
//     let total = 0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total;
// }
// console.log(sum(range(1, 10, 3)));
// console.log(sum(range(1, 10)));
// console.log(sum(range(33, 77)));
// console.log(sum(range(5, 2, -1)));
// console.log(sum(range(10, 1, -2)));



// EXERCISE: REVERSING AN ARRAY

// let startArray = [1, 2, 3, 4, 5];

// let reverseArray = (arr) => {
//     let newArray = [];
//     for(let number of arr) {
//         newArray.unshift(number);
//     }
//     return newArray;
// }

// console.log(reverseArray(startArray));


// let startArray = [1, 2, 3, 4, 5];
// let secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let reverseArrayInPlace = (arr) => {
//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - i - 1];
//         arr[arr.length - i - 1] = temp;
//     }
//     return arr;
// }

// console.log(reverseArrayInPlace(startArray));
// console.log(reverseArrayInPlace(secondArray));



// EXERCISE: A LIST

// let arrayToList = arr => {
//     let list = null;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         list = {value: i, rest: list};
//     }
//     return list;
// }

// console.log(arrayToList([1, 2, 3]));


// let listToArray = list => {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//     }
//     return array;
// }


// function prepend(value, list) {
//     return {value, rest: list};
// }


// function nth(list, n) {
//     if(!list) return undefined;
//     else if (n == 0) return list.value[n];
//     else return nth(list.rest, n - 1);
// }

// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));




// EXERCISE: DEEP COMPARISON


// let deepEqual = (a, b) => {
//     if (typeof a == 'object' && typeof b == 'object') {
//         if(JSON.stringify(a) === JSON.stringify(b)) {
//             return true;
//         } else {
//             return false;
//         }
//     } else if (a !== b) {
//         return false;
//     } else {
//         return true;
//     }   
// }

// console.log(deepEqual('cat', 'cat'));