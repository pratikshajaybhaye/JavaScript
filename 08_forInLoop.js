let arrayNN = [11, 22, 33, 44, 55, 66, 77];
console.log(`=====Traverse an array using for in Loop=====`);
for (const index in arrayNN) {
  console.log(arrayNN[index]);
}

console.log(`=====Traverse an array using for of Loop=====`);
for (const element of arrayNN) {
  console.log(element);
}

// let arrayNum = [4,5,6,7,3]
// let sum = 0;
// for (const index of arrayNum) {
//     console.log(index[arrayNum]);
//      sum = sum + index[arrayNum];
//     }
//     console.log(`sum of the array : ${sum}`);

console.log(`-----Count the Vowels------`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
  console.log(char);
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}
console.log(`Vowels Count is : ${count}`);

let arrayOfFriends = ["Jenny", "Menny", "Bill"];
const result = arrayOfFriends.join(" - ");
console.log(typeof result);
console.log(result);

arrayOfFriends.reverse();
console.log(arrayOfFriends);

console.log("-----Join Method======");
const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords);
console.log(arrayOfWords.length);

const words = word.split(""); // Count or separate the word in Character
console.log(words);
words.reverse();  // Reverse the Character
console.log(words);
const resultString = words.join(""); //Join the Reverse Character
console.log(resultString);