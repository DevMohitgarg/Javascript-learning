//1. Function with Default Arguments


// function greet(name = "Guest", message = "Welcome!") {
//     return `${name}, ${message}`;
// }

// console.log(greet("Alice"));
// console.log(greet());

//2. Rest Operator in Function Arguments


// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3));
// console.log(sum(5, 10));

//3. Positional vs Named Arguments


// function displayInfo(firstName, lastName, age) {
//     return `${firstName} ${lastName} is ${age} years old.`;
// }

// console.log(displayInfo("John", "Doe", 30));
// console.log(displayInfo("Jane", "Smith", 25));

//4. Object with Functions

// const person = {
//     name: "Alex",
//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// };

// console.log(person.greet());

//5. Closures with Function Returning Function


// function outerFunc(outerValue) {
//     return function innerFunc(innerValue) {
//         return outerValue + innerValue;
//     };
// }

// const addFive = outerFunc(5);
// console.log(addFive(10));
// console.log(addFive(3));

//6. Scope with Nested Functions

// let outerVar = "I am outside";

// function outer() {
//     let outerVar = "I am inside";
//     function inner() {
//         return outerVar;
//     }
//     return inner();
// }

// console.log(outer());

//7. Default Arguments with Rest Operator

// function multiply(factor = 2, ...numbers) {
//     return numbers.map(num => num * factor);
// }

// console.log(multiply(3, 1, 2, 3));
// console.log(multiply(undefined, 4, 5));

//8. Rest Parameters with Positional Arguments

// function combine(first, second, ...rest) {
//     return [first, second, ...rest];
// }

// console.log(combine(1, 2, 3, 4, 5));
// console.log(combine("a", "b", "c"));

//9. Object with Functions and Closures
// const counter = {
//     count: 0,
//     increment() {
//         return ++this.count;
//     },
//     reset() {
//         return this.count = 0;
//     }
// };

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.increment());

//10. Scope and Default Arguments

// let x = 10;

// function testScope(a, b = x) {
//     let x = 20;
//     return a + b;
// }

// console.log(testScope(5));

//11. Rest Operator with Arrow Functions

// const joinStrings = (...strings) => strings.join(" ");

// console.log(joinStrings("Hello", "World"));
// console.log(joinStrings("", "is", "awesome"));

//12. Function with Multiple Default Arguments

// function calculateArea(length = 5, width = 10) {
//     return length * width;
// }

// console.log(calculateArea(7));
// console.log(calculateArea());

//13. Rest Operator with No Arguments

// function logAll(...args) {
//     return args.length;
// }

// console.log(logAll());
// console.log(logAll(1, 2, 3));

//22. Rest Parameters with Spread Operator

function sumNumbers(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];
console.log(sumNumbers(...numbers));














