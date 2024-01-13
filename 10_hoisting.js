


console.log(country);//  allowed beacause variable declared using using var keyword never Hosted
// console.log(city);  // Not allowed beacause variable declared using using let keyword never Hosted
// console.log(PIN);// Not allowed beacause variable declared using using Const keyword never Hosted
var country = "India"; // var is hosted
let city = "Mumbai";  // let & Const is not Hosted
const PIN =12345; 

display();  //Before Intialization Invoke or call the Function   //  allowed beacause name function are hoisted  
function display() {     
    console.log(`Inside Display....`);
}
show();   //Function expression is not hosted   //  Not allowed beacause name function are hoisted
let show = function () {
    console.log(`Inside Function Expression...`);
}