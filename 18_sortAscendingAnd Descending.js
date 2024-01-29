class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }

  getDetails() {
    console.log(
      `ID: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`
    );
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`-------------Step 1: Descending Order of Employee Id's-----------`);

arrayEmployee.sort((before, after)=>{
return before.emp_id > after.emp_id ? -1 : 1;
});


arrayEmployee.forEach((element)=>{
console.log(`Id : ${element.emp_id}, ==>  Name: ${element.emp_name}, ==>   Department: ${element.emp_dept} `);
});
console.log(` `);

console.log(`-------------Step 2: Ascending Order of Employee Department-----------`);
arrayEmployee.sort((word1, word2)=>{
 return word1.emp_dept > word2.emp_dept ? 1 : -1;
});
arrayEmployee.forEach((element)=>{
    console.log(`Id : ${element.emp_id}, ==>  Deapartment: ${element.emp_dept}, ==>   Company: ${element.emp_company} `);
});
console.log(` `);

console.log(`-------------Step 2: Descending Order of Employee Salary-----------`);

arrayEmployee.sort((num1, num2)=>{
return num1.emp_salary>num2.emp_salary ? -1 : 1;
});
arrayEmployee.forEach((element)=>{
    console.log(`Name : ${element.emp_name}, ==>  Salary: ${element.emp_salary}, ==>   Company: ${element.emp_company} `);
});
