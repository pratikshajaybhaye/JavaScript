

let array = ["Jenny","Bill","Stew"]
console.log(array);    // Inside the Array in Square bracket
console.log(...array);   // Use Spread opertor to Expand the array

console.log(`-----Rest Parameter-----`);
function show(...arg) {  // Rest Paratmeter
    console.log(arg);
}
show(10,20,30)