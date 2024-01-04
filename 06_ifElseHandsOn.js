
console.log(`---------Step 1---------`);
var isEvenOrOddNum = function (num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "ODD";
    }
}
var result = isEvenOrOddNum(23);
console.log(`45 given number is ${result}`);

var result = isEvenOrOddNum(23);
console.log(`70 given number is ${result}`);

var result = isEvenOrOddNum(23);
console.log(`67 given number is ${result}`);

var result = isEvenOrOddNum(23);
console.log(`98 given number is ${result}`);

console.log(`---------Step 2---------`);
var electionVote = function (vote) {
    if (vote >= 18) {
        return "voting";
    } else {
        return "not voting";
    }
}
var result = electionVote(18);
console.log(`age is 18 , then Eligible for ${result}`);

var result = electionVote(17);
console.log(`age is 17 , then Eligible for ${result}`);

var result = electionVote(20);
console.log(`age is 20 , then Eligible for ${result}`);

var result = electionVote(40);
console.log(`age is 18 , then Eligible for ${result}`);

console.log(`---------Step 3---------`);

var javaLength = function (length) {
    if (javaLength.length) {
        console.log(`Given Word- ${length} more than 10 Character`);
    } else {
        console.log(`Given Word- ${length} Not more than 10 Character`);
    }
}
javaLength("JavaScript-ES6");


console.log(`---------Step 4---------`);

var string = function (word) {
    if (word.startsWith("Java")) {
        console.log(`Given Word- ${word}, starts with "Java"`);
    }
    else {
        console.log(`Given Word- ${word}, Not starts with "Java"`);

    }

}
string("JavaScript Language");