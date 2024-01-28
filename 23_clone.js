let city = "Pune";
let mainCity = city;
city = "Mumbai";
console.log(mainCity);
console.log(city);

console.log(`-------------------------`);
const num1 = 100;
let num2 = num1;
console.log(num2);
console.log(`----------------`);
let num3 = num2;
console.log(num3);
num2 = 500;
console.log(num2);

console.log(`------------------------`);
const user = {
  name: "Jenny",
  country: "USA",
};
let developer = user;
developer.country = "Bharat";
console.log(user.country);
console.log(developer.country);

console.log(`--------------`);
const address = {
  pin: 123,
  street: "Wakad",
};
const presentAddress = address;
address.pin = 777;
console.log(presentAddress.pin);
console.log(address.pin);
console.log(address);

let aa;
console.log(aa);
