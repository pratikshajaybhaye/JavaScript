
// Function Declaration

function square(num) {
    console.log("Given Value is:", num);
    var result = num * num
    console.log("Result is:", result); 
}
square(9); //Function Call or Invocation
square(11);
square(21);

function multiply(n1,n2,n3) {
    console.log("Given Number are:", n1,n2,n3);
    var result = n1 * n2 * n3
    return result;
}
var returnValue= multiply(5,5,5);
console.log("Multiplication is:",returnValue );

var returnValue= multiply(2,2,2);
console.log("Multiplication is:",returnValue );

// Swap

function swap(n1,n2) {
    console.log("Before Swap:", "n1-->",n1,"n2-->",n2);
    var temp = n1;
    n1=n2;
    n2=temp;
    console.log("After Swap:", "n1-->",n1,"n2-->",n2);
}
swap(100,200);
swap("pratiksha","rutuja");
