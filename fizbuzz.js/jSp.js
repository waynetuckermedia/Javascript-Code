Explanation:
In Javascript, functions can be assigned to variables in the same way the strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
Use: Higher order functions are created to increase the capabilities of itself using callback functions. 
Example:
function calculate(operation, initialValue, numbers) {
 let total = initialValue;
 for (const number of numbers) {
   total = operation(total, number);
 }
 return total;
}
function sum(n1, n2) {
 return n1 + n2;
}
function multiply(n1, n2) {
 return n1 * n2;
}
calculate(sum, 0, [1, 2, 4]);      // => 7
calculate(multiply, 1, [1, 2, 4]); // => 8