

const fruits_seasonal = ["Banana", "Orange", "Mango", "Water Melon"];
console.log("-----1. Log the First & Last Element----");
const arrayFirstNum = fruits_seasonal[0];
console.log(`First Element is: ${arrayFirstNum}`);

const arrayLastNum = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last Element is: ${arrayLastNum}`);

console.log("-----2. Add Element Papaya Befor the Banana----");
fruits_seasonal.unshift("Papaya");
console.log(`After Adding : ${fruits_seasonal}`);

console.log("-----3. Remove Mango from array----");
let fruits_s = ["Banana", "Orange", "Mango", "Water Melon"];
const removedFruit = fruits_s.splice(2,1);
console.log(`Removed Fruit:`);
console.log(removedFruit);
console.log(`Original Array`);
console.log(fruits_s);

console.log("-----4. Add Element Pineapple at last position----");
let fruits_se = ["Banana", "Orange", "Mango", "Water Melon"];
fruits_se.push("Pineapple");
console.log(fruits_se);

console.log("-----5. Add element Dragon Fruit Before Water Melon----");
let arrayFruits = ["Banana", "Orange", "Mango", "Water Melon"];
arrayFruits.splice(3,0,"Dragon Fruit");
console.log(arrayFruits);

console.log("-----6. Replace element orange with Kiwi----");
let arrayFruits_seasonal = ["Banana", "Orange", "Mango", "Water Melon"];
console.log(`Before Replace: ${arrayFruits_seasonal}`);
arrayFruits_seasonal.splice(1,1,"Kiwi");
console.log(`After Replace : ${arrayFruits_seasonal}`);

console.log("-----7. Starting from index 1 to 4----");
let arrayFruit = ["Banana", "Orange", "Mango", "Water Melon"];
 let result = arrayFruit.slice(1,4);
console.log(result);

console.log("-----8. Last 3 Elements----");
let array = ["Banana", "Orange", "Mango", "Water Melon"];
const removedElements = array.splice(1,3);
console.log(`Last 3 Elements: ${removedElements}`);console.log();

