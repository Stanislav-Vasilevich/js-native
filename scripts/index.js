import selfPop from './pop.js';
import setIndexOf from "./indexOf.js";

// собственный метод массива pop
const arrNumber = [3, 7, 8, 66, 0];
console.log('arrNumber: ', arrNumber);
console.log('result: ', selfPop(arrNumber));
console.log('arrNumber: ', arrNumber);

// собственный метод indexOf
const arr = ['hello', 'bye', 'what', 'where'];
console.log(arr.indexOf('where'));
console.log(setIndexOf(arr, 'where'));
