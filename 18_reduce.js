

const arrayNum = [5, 1, 6, 8,2, 3];
const sum = arrayNum.reduce((runningTotal, value)=>{
    return runningTotal * value
})
console.log(sum);

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

const totalMarks = arrayStudents.reduce((runningTotal,element)=>{
    return runningTotal + element.marks
}, 0);
console.log(totalMarks);


console.log(`-----WAP to find all the Students whose ID is Odd Value and find its mark average-----`);
const array =  arrayStudents.filter((element)=>{
   return element.id%2!==0;
});
const sumOfMarks = array.reduce((runningTotal,element)=>{
   return  runningTotal + element.marks;
},0);
console.log(sumOfMarks);

const sumOfMark = array.reduce((runningTotal,element)=>{
    return  runningTotal + element.marks;
 },0);
 console.log(`Toatl Marks is ${totalMarks}, and number of students with add is is : ${array.length}`);
 console.log(`Average is : ${sumOfMark/array.length}`);

array.forEach(element=>{
    console.log(element);
})
