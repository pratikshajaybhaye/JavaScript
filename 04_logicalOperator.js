

var a =10;
var e = a++;
console.log(e);

var c =20;
var d = ++c;
console.log(d);

var e=100;
var f= --e;
console.log(f);

var k=100;
var p= k--;
console.log(p);

var result = 0/0
console.log(result);  // NaN = Not a Number

var result = 100 + true; // Convert boolean into Number is Implicit  (True means 1)
console.log(result);

var resultValue = 99 - false; // Convert boolean into Number is Implicit  (False means 0)
console.log(resultValue);

// concat Method
console.log("1" + "1");

var s1 = "101";
console.log(typeof s1);

// Explicit Conversion
var s2 = +s1;
console.log(s2);
console.log(typeof s2);

var d = +"200";
console.log(d);
console.log(typeof d);

var z = +"Pratiksha";
console.log(z);

var d = Number("101");
console.log(typeof d);

var s1 = "200";
var result = Number(s1);
console.log(typeof result);

var s1 = "200A";
var result = Number(s1);
console.log(typeof result);
console.log(result);

var m;
console.log(m);
console.log(typeof m);

var k = String(100);
console.log(typeof k);

var p = Boolean(10);
console.log(p);

var p = Boolean(0);
console.log(p);

var ssc = 75;
var hsc = 65;
// Only Allow if ssc marks is graeter than equal 60 AND hsc greater than 65
 var result = ssc>=60 && hsc>65 ? "Allow for Interview": "Don't allow Please"
 console.log(`Security guard is Saying: ${result}`);