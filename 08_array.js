

const arrayNum = [2,4,6,8];
console.log(arrayNum);
console.log(`Total Elements in the array is : ${arrayNum.length}`);
console.log(`Array type is : ${ typeof arrayNum}`);

console.log(`------Read & Access Value from Array`);
const elementAtIndex2 = arrayNum[2];
console.log(`Element at Index 2 is: ${elementAtIndex2}`);

console.log(`------Traversing Value from Array`);

for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
 console.log(element);   
}

console.log(`------Sum from Array-------`);
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
    sum = sum + arrayNum[index];
}
console.log(sum);

console.log(`------Find Index of an element-------`);
const indexof6 = arrayNum.indexOf(6);
console.log(`Index of 6 is: ${indexof6}`);

const indexof303 = arrayNum.indexOf(303);
console.log(`Index of 303 is: ${indexof303}`);

console.log(`------Addingan element at the end-------`);
let array = ["Jenny", "Menny", "Bill"];
array.push("Elon");
console.log(array);

console.log(`------Adding an element at the Beginning-------`);
array.unshift("Narayan");
console.log(array);


let arrayNumbers = [11,22,33,44,55];
console.log(`------Removing an  very first element-------`);
arrayNumbers.shift();
console.log(arrayNumbers);

console.log(`------Removing an  very Last element-------`);
arrayNumbers.pop();
console.log(arrayNumbers);

console.log(`------Selecting multiple elements-------`);
let arrayNums = [11,22,33,44,55,66,77];
let elements = arrayNums.slice(2);
console.log(elements);


const elementMiddle = arrayNums.slice(1,5); // Last index is Exclusive, 1 is start index & 5 is last index
console.log(elementMiddle);

console.log(`------Removing or Deleting an elements-------`);
const removedElements = arrayNums.splice(3);
console.log(`Removed Elements:`);
console.log(removedElements);
console.log(`Original Array:`);
console.log(arrayNums);

console.log(`------Removing or Deleting an elements using start index and count-------`);
let arrayNu = [11,22,33,44,55,66,77];
// const removed = arrayNu.splice(2,3); //Start from index 2 & delete 3 elements
// console.log(`Deleted Elements:`);
// console.log(removed);
// console.log(`Original Array`);
// console.log(arrayNu);

console.log(`------Delete 44 number------`);
const deleted = arrayNu.splice(3,1); 
console.log(`Deleted Elements:`);
console.log(deleted);
console.log(`Original Array`);
console.log(arrayNu);

console.log(`--------Insert an elements in middle`);
let arrayN = [11,22,33,44,55,66,77];
arrayN.splice(3,0,99);
console.log(arrayN);

console.log(`--------Replacing an elements in middle`);
let arrayNN = [11,22,33,44,55,66,77];
console.log(arrayNN);
arrayNN.splice(2,1,100);
console.log(arrayNN);