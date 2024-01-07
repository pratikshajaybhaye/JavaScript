console.log(`---------Step 1----------`);
let vowels = "I am very good IT Developer";
let vowelsCount = 0;
for (let index = 0; index < vowels.length; index++) {
  let char = vowels.charAt(index).toLocaleLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    vowelsCount = vowelsCount + 1;
  }
}
console.log(`Vowels Count is : ${vowelsCount}`);

console.log(`---------Step 2----------`);

function sumOfCube(n1, n2, n3) {
  let sum = 5;
  for (let index = 1; index < 5; index++) {
    sum = sum + index;
    var result = sum * sum;
  }
  console.log(`Sum of Numbers from 1 to 5 is ${result}`);
}
sumOfCube();

console.log(`---------Step 3----------`);

function oddPositionedChars(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string.charAt(index);
    if (index % 2 == 1 && char != " ") {
      console.log(string.charAt(index));
    }
  }
}
console.log("<----The Odd Position Character for String 1----->");
oddPositionedChars("Hard work always pays back");

console.log("<----The Odd Position Character for String 2----->");
oddPositionedChars("Soon I will be Angular IT Champ")

