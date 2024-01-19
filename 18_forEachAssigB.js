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

console.log(`-------Step 1 : All employee working in "TCS Company"--------`);
arrayEmployee.forEach((emplyoee) => {
  if (emplyoee.emp_company == "TCS") {
    console.log(
      `Name : ${emplyoee.emp_name}, ==> Company: ${emplyoee.emp_company}`
    );
  }
});

console.log(
  `-------Step 2 : All emplyoees whose salary greater than or Equal 50000--------`
);
arrayEmployee.forEach((emplyoee) => {
  if (emplyoee.emp_salary >= 50000) {
    emplyoee.getDetails();
  }
});

console.log(`-------Step 3 : Sum of All emplyoees salary--------`);

let sum = 0;
arrayEmployee.forEach((emplyoee) => {
  sum += emplyoee.emp_salary;
});
console.log(`Sum of all emplyoee Salary is : ${sum}`);

console.log(`-------Step 4 : Average of All emplyoees salary--------`);

arrayEmployee.forEach((emplyoee) => {
  sum;
});
const averageSalary = sum / arrayEmployee.length;
console.log(`Average marks is: ${averageSalary}`);

console.log(
  `-------Step 5 : IT OR HR Departments Employees whose salary gretaer than or equal to 75000--------`
);
arrayEmployee.forEach((emplyoee) => {
  if (
    (emplyoee.emp_salary >= 75000 && emplyoee.emp_dept == "IT") ||
    (emplyoee.emp_salary >= 75000 && emplyoee.emp_dept == "HR")
  ) {
    emplyoee.getDetails();
  }
});
