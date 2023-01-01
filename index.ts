import {orderAsc, switchPairs} from './functions';

/* Exercise 1*/
// Write a function that sorts an array of numbers in ascending order using a for loop,
// without creating a new array or using array methods
const input1 = [12, 8, 4, 12, 4, 8];
const result1 = orderAsc([...input1]);
console.log({
    function: orderAsc.name,
    input: input1,
    output: result1
})

/* Exercise 2 */
// Replace the first element of the array with the second, the second with the third, and so on
const input2 = ['a', 'b', 'c', 'd', 'e'];
const result2 = switchPairs([...input2]);
console.log({
    function: switchPairs.name,
    input: input2,
    output: result2
})