//1. Function Expression Hoisting


// console.log(typeof test);
// var test = function() { return 5; }; 

//2. Lexical Scoping with Let and Var


// let x = 5;
// function scopeTest() {
//   console.log(x);
//   var x = 10;
// }
// scopeTest();

//3. Closure Inside a Loop


// function createIncrementer() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// let increment = createIncrementer();
// console.log(increment());
// console.log(increment());


//4. Variable Hoisting


// console.log(foo);
// var foo = 10;

// 5. Block Scope with Let


// function blockScope() {
//   let x = 10;
//   if (true) {
//     let x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// blockScope();

// 6. Function Scope and Closures


// function outer() {
//   var outerVar = "outer";
//   return function inner() {
//     console.log(outerVar);
//   };
// }
// var innerFunc = outer();
// innerFunc();

// 7. Variable Shadowing



// let a = 10;
// function shadow() {
//   let a = 5;
//   console.log(a);
// }
// shadow();
// console.log(a);

//8. Closure and Multiple Functions


// function outerFunc() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       console.log(count);
//     },
//     decrement: function() {
//       count--;
//       console.log(count);
//     }
//   };
// }
// let counter = outerFunc();
// counter.increment();
// counter.decrement();

//9. Lexical Scoping with Functions


// function outerFunc() {
//   let x = 10;
//   function innerFunc() {
//     console.log(x);
//   }
//   return innerFunc;
// }
// let result = outerFunc();
// result();

//10. Hoisting with Function Declarations

// function hoistingTest() {
//   console.log(x);
//   var x = 10;
// }
// hoistingTest();

//11. Functions and Default Parameters


// function add(a = 5, b = a * 2) {
//   return a + b;
// }
// console.log(add(3));
// console.log(add());

//12. Closure with State


// function createCounter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());

//14. Self-Invoking Function with Closure


// (function() {
//   var x = 5;
// })();
// console.log(x);

//15. Closure and Returning Functions


// function multiplierFactory(factor) {
//   return function(num) {
//     return num * factor;
//   };
// }
// let double = multiplierFactory(2);
// console.log(double(4));

//16. Block Scope and Let


// let x = 5;
// function checkScope() {
//   let x = 10;
//   console.log(x);
// }
// checkScope();
// console.log(x);

//17. Functions and Parameter Hoisting


// function hoistParam(param) {
//   console.log(param);
//   var param = 20;
// }
// hoistParam(10);

//18. Nested Functions and Scope Chain

// let x = 1;
// function outer() {
//   let x = 2;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

//19. Arguments Object


// function testArgs(a, b, c) {
//   console.log(arguments[0], arguments[1], arguments[2]);
// }
// testArgs(1, 2);

//20. Variable Shadowing in Blocks


// let x = 5;
// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

//69. Scope Chain in Nested Functions


// let a = 1;
// function outer() {
//   let b = 2;
//   function inner() {
//     console.log(a, b);
//   }
//   inner();
// }
// outer();

//70.Closure in Multiple Instances
// function outer() {
//   let x = 10;
//   return function() {
//     return x++;
//   };
// }

// const a = outer();
// const b = outer();

// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());
