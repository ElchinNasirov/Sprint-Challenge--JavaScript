// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nested function can access the variable internal.
// Explanation: 

/* 
- When a function is declared and created, a new scope is also created. 
- Any variables declared within that function’s scope will be enclosed in a lexical/private scope that belongs to that function. 
- A lexical scope or static scope in JavaScript refers to the accessibility of the variables, 
  functions, and objects based on their physical location in the source code. 
- A Lexical Environment has two components: (1) the environment record and (2) a reference to the outer environment.
  1) The environment record is the actual place where the variable and function declarations are stored.
  2) The reference to the outer environment means it has access to its outer (parent) lexical environment. 
     This component is the most important in order to understand how closures work.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
