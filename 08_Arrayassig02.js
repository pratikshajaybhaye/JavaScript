

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log(`-----1. Total Elements Availble or Length------`);
console.log(`Total Elements in the array is : ${arrayNumbers.length}`);

console.log(`-----2. First Element & Last Element in arrayNumbers------`);
const firstElement = arrayNumbers[0];
console.log(`First Element at is: ${firstElement}`);

const lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`Last Element at is: ${lastElement}`);

console.log(`-----3. Third Last Element in arrayNumbers------`);
const thirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`Third Last  Element at is: ${thirdLastElement}`);

console.log(`-----4. Even Numbers using for of loop------`);

for (const array of arrayNumbers) {
    if (array%2==0) {
        console.log(`Even Numbers is : ${array}`);
    }
}

console.log(`-----5. ODD Numbers using for of loop------`);

for (const element of arrayNumbers) {
    if (element%2==1) {
        console.log(`Odd Numbers is : ${element}`);
    }
}

console.log(`-----6. Sum of Even Positioned Numbers ------`);

let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        let evenNumber = arrayNumbers[index];
        sum = sum + evenNumber;
        console.log(evenNumber);
    }
}
console.log(`Sum of Even Positioned Numbers is : ${sum}`);

console.log(`-----7. Sum of Odd Positioned Numbers ------`);

let add = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==1) {
        let oddNumber = arrayNumbers[index];
        add = add + oddNumber;
        console.log(oddNumber);
    }
}
console.log(`Sum of Odd Positioned Numbers is : ${add}`);

console.log(`-----8. Sum of all Elements Array Numbers ------`);

let addition= 0;
for (const element of arrayNumbers) {
    addition = addition + element;
    console.log(addition);
}
console.log(`Sum of all Elementsin array: ${addition}`);


   console.log(`-----9. Numbers which are multiple of 5 ------`);
   
   for (const element of arrayNumbers) {
    if (element%5==0) {
        console.log(`Numbers which are multiple of 5 is : ${element}`);
    }
}

console.log(`-----10. 115 available in array ------`);
console.log(arrayNumbers.includes(115));

console.log(`-----11. 23 available in array ------`);
console.log(arrayNumbers.includes(23));

console.log(`-----12. Insert 55, 66 at index 3 in array ------`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`-----13. Delete 3 Elements from index 4 in array ------`);
const removedElements = arrayNumbers.splice(4,3);
console.log(`Removed Elements: ${arrayNumbers}`);
