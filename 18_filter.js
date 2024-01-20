console.log(`------using foreach method----`);

const arrayNum = [55, 11, 66, 20, 73];
const array = [];
arrayNum.forEach((element) => {
  if (element % 5 == 0) {
    array.push(element);
  }
});
console.log(array);

console.log(`-------using Filter Method-----`);

const arr = arrayNum.filter((currentValue) => {
  return currentValue % 5 == 0;
});
console.log(arr);

console.log(`------------------------`);
class Student {
  constructor(id, name, city, marks) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.marks = marks;
  }

  getDetails() {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`
    );
  }
}

const jenny = new Student(11, "Jenny", "Pune", 54);
const bill = new Student(22, "Bill", "LA", 67);
const elon = new Student(33, "Elon", "Mumbai", 74);
const stew = new Student(44, "Stew", "Bergen", 80);
const ratan = new Student(65, "Ratan", "Mumbai", 90);

const arrayStudents = [jenny, bill, elon, stew, ratan];

const arrayStudentsFromPune = arrayStudents.filter((element) => {
  return element.city == "Pune";
});
console.log(arrayStudentsFromPune);

console.log(`------traverse the above array----`);

arrayStudentsFromPune.forEach((element) => {
  console.log(element);
});

console.log(
  `-----WAP to filter out the Second Grade(marks>=55 AND <75) Students ----`
);
arrayStudents
  .filter((element) => {
    return element.marks >= 55 && element.marks < 75;
  })
  .map((element) => {
    return element.name;
  })
  .forEach((element) => {
    console.log(element);
  });

  console.log(`------Find Method-----`);
  const arrayN = arrayNum.find((element)=>{
    return element>60;
  });
  console.log(arrayN);