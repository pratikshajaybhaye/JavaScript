

var greet = "Good Morning"
var totalChar= greet.length;
console.log("Total Character inthe string is :", totalChar);

var charAtIndex5 = greet.charAt(5);
console.log("Character at index 5 is : ", charAtIndex5);
console.log(typeof charAtIndex5);

var str1 = "Hey";
var str2 = "smarty";
var concateResult = str1.concat(str2);
console.log("Concated String is:", concateResult);

var indexOfd = greet.indexOf('d');
console.log("Index of  is:",indexOfd);

var indexOfd = greet.indexOf('d');
console.log("Index of  is:",indexOfd);

var indexOfSubString = greet.indexOf('nin');
console.log("Index of  is Sub String:",indexOfSubString);

var indexOfo = greet.lastIndexOf('o');
console.log("Index of  is O:",indexOfo);

var myName = "Pratiksha Jaybhaye";
var result = myName.replace("Jaybhaye","Mhatardev Jaybhaye");
console.log(" Result is", result);

var city = "  Mumbai  "
console.log(city.length);
var trimResult = city.trim();
console.log("After Trim Result:", trimResult,"It's Length is", trimResult.length);

console.log(`After Trim Result: ${trimResult} , It's Length is ${trimResult.length}  `);

console.log(`My Name is "Pratiksha"`);

var num = 15;
var result = num.toString();
console.log(`Number is ${num} and It's Type of ${typeof num}`);
console.log(`After Conversion Number is ${result} and It's Type is ${typeof result}`);

var isAvailable = greet.includes("ing");
console.log(`Substring "ing" is Avaialble ${isAvailable}`);

var result = greet.slice(5, 8);
console.log(` Slice is ${result}`);

var result = greet.substring(4,8);
console.log(`Substring is ${result}`);

var word = "Jenny Herry";
var result = word.split(" ");
console.log(result);
console.log(`Total words in the String is ${result.length}`);
console.log(typeof result);

var givenString = "Hey I am UI and Java Developer";
var result = givenString.split(" ");
console.log(result);
console.log(`Total words in the String is ${result.length}`);