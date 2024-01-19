const arrayNum = [22, 45, 68, 83];

arrayNum.forEach((currentValue, index, array) => {
  console.log(currentValue, index, array);
});

console.log(`-----Using Only Current value----`);
arrayNum.forEach((currentValue) => {
  console.log(currentValue);
});

console.log(`----WAP to Find the Odd Values----`);
arrayNum.forEach((element) => {
  if (element % 2 !== 0) {
    console.log(element);
  }
});

console.log(`-----Program to traverse the set Collection----`);
const SetOfRollNum = new Set();
SetOfRollNum.add(44);
SetOfRollNum.add(22);
SetOfRollNum.add(33);
SetOfRollNum.add(44);
SetOfRollNum.add(22);
SetOfRollNum.add(66);
SetOfRollNum.add(77);

SetOfRollNum.forEach((item) => {
  console.log(item);
});

console.log(`------Program to traverse the Map Collection----`);
const map = new Map();
map.set("Height", "6 ft");
map.set("Weight", 78);
map.set("Name", "Pratiksha");
map.set("City", "Mumbai");
map.set("isMarried", true);
console.log(map);

map.forEach((value, key) => {
  console.log(key, "==>", value);
});

console.log("---------------------------------");

class Student {
  // Data member or properties
  // Constructor

  constructor(id, name, city, marks) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.marks = marks;
  }

  // Member Functions or methods

  getDetails() {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`
    );
  }
}

const jenny = new Student(11, "Jenny", "Pune", 70);
const bill = new Student(22, "Bill", "LA", 60);
const elon = new Student(32, "Elon", "Mumbai", 75);
const stew = new Student(22, "Stew", "Bergen", 80);
const ratan = new Student(65, "Ratan", "Mumbai", 90);

const arrayStudents = [jenny, bill, elon, stew, ratan];

console.log(`------WAP to get students of Even Id------`);

arrayStudents.forEach((element) => {
if (element.id %2==0) {
    console.log(element);
}
});

console.log(`----------------------------------`);
const arrayEven = [];
arrayNum.forEach((currentValue,index,array)=>{
    if (currentValue%2==0) {
        arrayEven.push(currentValue)
    }
})
