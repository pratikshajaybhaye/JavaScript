
console.log(`-----Square of all elements -----`);
const arrayNum = [ 5, 1, 6, 8, 7];
const arrayTransform = arrayNum.map((currentValue)=>{
return currentValue * currentValue
})

console.log(arrayTransform);


console.log(`-----Add 100 in each element-----`);

const arrayTrans = arrayNum.map((currentValue)=>{
    return currentValue + 100;
    });
    
    console.log(arrayTrans);


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
    
      const jenny = new Student(11, "Jenny", "Pune", 70);
      const bill = new Student(22, "Bill", "LA", 60);
      const elon = new Student(33, "Elon", "Mumbai", 75);
      const stew = new Student(44, "Stew", "Bergen", 80);
      const ratan = new Student(65, "Ratan", "Mumbai", 90);
    
      const arrayStudents = [jenny,bill,elon,stew,ratan];

      console.log(`-----Transform into only in names-----`);
      const arrayOfNames =  arrayStudents.map((element)=>{
        return element.name;
      });
      console.log(arrayOfNames);