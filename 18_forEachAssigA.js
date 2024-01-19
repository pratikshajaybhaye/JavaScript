const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`-------Step 1-------`);
arrayNumbers.forEach((element, index) => {
  console.log(`Element : ${element},Index: ${index}`);
});

console.log(`-------Step 2-------`);
let result = ` `;
arrayNumbers.forEach((element) => {
  if (element > 0) {
     result = result +"  "+element;
  }
});
console.log(`positive no. are :${result}`);

console.log(`-------Step 3-------`);
const arrayNegative = [];
arrayNumbers.forEach((element)=>{
    if (element < 0) {
        arrayNegative.push(element)
    }
})
console.log(`Negative Numbers is : ${arrayNegative}`);


console.log(`-------Step 4-------`);
 let even = ` `;
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    even = even +"  "+ element;
}
});
console.log(`Even of all Elements is : ${even}`);

console.log(`-------Step 5-------`);

let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(`Sum of all Elements is : ${sum}`);

console.log(`-------Step 6-------`);
let words = ` `;
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    words = words +" "+element;
  }
});
console.log(`Even index elements is :${words}`);
