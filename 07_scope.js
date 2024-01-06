

const country = "India";  //Declaration & Initialization
let age;
console.log(age);
age =32;
var city = 'Pune';
console.log(city);

// country = "Bharat";
console.log(country);

age = 34;
console.log(age);

//scope
if (true) {
    var n1 = 100;
    let n2 = 200;
    const n3 = 300;
}
console.log(n1 ,"Function Scoped");
// console.log(n2); //Block Scoped hence showing the Error
// console.log(n3);

function show() {
    for (let index = 0; index < 2; index++) {
        var s1= "S1";
        let s2 = "S2";
        const s3 = "S3";        
    }
    console.log(s1);   //Function Scoped
    // console.log(s2);   //Block Scoped
    // console.log(s3);

}
show();