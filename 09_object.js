

let person = {
    name : "Pratiksha",
    age: 24,
    isMaried :true
}
console.log(person);
console.log(`------dot Notation------`);
console.log(person.name);  //
console.log(`----Square Bracket Notation----`);
console.log(person["name"]);  // 

console.log(`----Add New Property----`);
person.desgination = "Tech Arch";
console.log(person);

console.log(`-----Change the Value-----`);
person.age = 33;
console.log(person);

person.isMaried = false;
console.table(person);

console.log(`-----Delete the Property-----`);
delete person.desgination;
console.table(person);

console.log(`----Create a Empty Object----`);
let address= {

}

address.city = "Pune";
console.log(address);

let user = {
    userName : "Jenny",
    country : "USA",
    address : {
        city : "Pune",
        Street : "Wakad",
        pin : 411057,
        getAddress: function () {
            console.log(`Complete Address ${this.Street}, ${this.city},${this.pin},${this.flatNo}`);
        }
    },
    show : function () {
        console.log(`Inside Show Function`);
    }
}
console.log(user);
let country = user.country;
console.log(country);

console.log(`---Function inside value----`);
user.show();

console.log(`----Read or Access Nested Object---`);
console.log(user.address.pin);

user.address.flatNo = 308;
console.log(user.address);

user.address.getAddress();


console.log(`----Traversing an Object ----`);
let developer = {
    name : "Pratiksha",
    age: 24,
    isMaried :true,
    skills : ["c", "C++","core Java","JavaScript","Microservices"]
}
for (const key in developer) {
    if (developer.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key==> ${key} Value==>${element}`);
    }
}

console.log(developer.skills);

console.log(`-----Add HTML in Skills-----`);
developer.skills.push("HTML");
console.log(developer.skills);
console.log(`----Remove the c in skills`);
developer.skills.shift("c")
console.log(developer.skills);

const keys = Object.keys(developer);
console.log(keys);

const values = Object.values(developer);
console.log(values);

console.log(`Is Values are array : ${Array.isArray(values)}`);

console.log(`------Traverse of Array------`);
for (const element of values) {
    console.log(element);
}

console.log(`---Enteries of Array----`);
const enteries = Object.entries(developer);
console.log(enteries);

const enteriess= [["firstName", "Pratiksha"], ["Age", 24]];
const entry = enteriess[0];
console.log(entry[0]); 
console.log(entry[1]); 
console.log(enteriess[1][1]); 

for (const element of enteriess) {
    console.log(element[0], ",", element[1]);
}

console.log(`Accessing Nested array element using double [] [] brackets`);
console.log(enteriess[0][0]); 
console.log(enteriess[0][1]); 

console.log(`-----in Operator-----`);
const isAgeAvailable = "age" in developer;
console.log(`Is Age Available: ${isAgeAvailable}`);
const isCityAvailable = "City" in developer
console.log(`Is City Avaialble: ${isCityAvailable}`);