

function factorialofWordsCount(num) {
  if (num<0 || num == null) {
    return "Invalid Input";
  } else if (num === "" ){
    return 1;
  } else {
    const words = num.split(" ");
    const wordCount = words.length;
    let result = 1;
    for (let index = 1; index <= wordCount; index++) {
      result = result * index;
    }
    return result;
  }
}
let result = factorialofWordsCount("Revision is the mother of Success");
console.log(`Revision is the mother of Success: ${result}`);

let result1 = factorialofWordsCount("We never fail, we always learn, Mind it");
console.log(`We never fail, we always learn, Mind it: ${result1}`);

let result2 = factorialofWordsCount(null);
console.log(`Factorial of Null is : ${result2}`);

let result3 = factorialofWordsCount("");
console.log(`Factorial of space is : ${result3}`);

let result4 = factorialofWordsCount("Pratiksha Mhatardev Jaybhaye");
console.log(`Full Name: ${result4}`);
