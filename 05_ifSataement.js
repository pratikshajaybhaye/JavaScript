
// If Statement
var age = 20;
if (age>=21) {
console.log(`Inside if Block..`);
}

console.log(`oustide if Block..`);

//if-else Statement
var age = 22;
if (age==21) {
    console.log(`Eligible for Marraige`);
} else {
    console.log(`Nope..Please try next time..`);
}
//Ternery Operator
 var result= age>=21 ? `Eligible for Marraige` : `Nope..Please try next time..`;
 console.log(result);

 var isEvenOrOddNum= function (num) {
    if (num%2==0) {
        var returnValue = "";
        return "Even";
    } else {
        return "ODD";
    }
    return returnValue;
 }
var result=isEvenOrOddNum(23);
console.log(`23 given number is ${result}`);

var result=isEvenOrOddNum(30);
console.log(`30 given number is ${result}`);

var checkStart  = function (word) {
    if (word.startsWith("Java")) {
        console.log(`Given Word- ${word}, starts with "Java"`);
    }
    else{
        console.log(`Given Word- ${word}, Not starts with "Java"`);

    }
    
}
console.log(`End of the Program...`);
checkStart ("JavaScript Language");
checkStart("java Developer");