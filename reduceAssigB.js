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

console.log(`-------Step 1-------`);

const array = arrayEmployee.filter((element) => {
  if (element.emp_company == "Wipro") {
    element.getDetails();
  }
});

console.log(`-------Step 2-------`);
const arrays = arrayEmployee.filter((element) => {
  if (element.emp_dept == "IT" || element.emp_dept == "HR") {
    element.getDetails();
  }
});

console.log(`----------Step 3------`);
const arr = arrayEmployee.filter((element) => {
  if (element.emp_id > 50) {
    element.getDetails();
  }
});

console.log(`-------Step 4-------`);
const arrayEmp = arrayEmployee.filter((element) => {
  if (
    element.emp_name.startsWith("A") ||
    element.emp_name.startsWith("V") ||
    element.emp_name.startsWith("M")
  ) {
    element.getDetails();
  }
});

console.log(`-------Step 5------`);
const averageOfSalary = arrayEmployee.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
console.log(
  `Average Salary of all Department Emplyoee is : ${
    averageOfSalary / arrayEmployee.length
  }`
);

console.log(`-------Step 6------`);

const selectedEmp = arrayEmployee.filter((item) => item.emp_dept == "IT");
const averageRes = selectedEmp.reduce((sum, item) => {
  return sum + item.emp_salary;
}, 0);
console.log(
  `Average Salary of IT Department Emplyoee : ${
    averageRes / selectedEmp.length
  }`
);
