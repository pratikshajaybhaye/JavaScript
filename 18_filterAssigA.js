

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

  console.log(`----------Step 1----------`);

  const arrayEmp = arrayEmployee.filter((element)=>{
    if (element.emp_company == "TCS") {
        console.log(`Name : ${element.emp_name}, ==> Company: ${element.emp_company}`);
    }
  });



  console.log(`----------Step 2----------`);
  let totalSalary = 0;
   const arrSalary = arrayEmployee.filter((emp) => {
     return emp.emp_company == 'Wipro';
  }).map((element)=>{
    totalSalary = totalSalary + element.emp_salary;
  })
  const averageRes = totalSalary/arrSalary.length
 console.log(`Average of Wipro Company Salary is ${averageRes}`);




  console.log(`----------Step 3----------`);
  let totalresult = 0;
  const arraySalary = arrayEmployee.filter((currentValue) => {
    return currentValue.emp_company == 'Wipro' || currentValue.emp_company == 'Infy' ;
 }).map((element)=>{
    totalresult = totalresult + element.emp_salary;
 })
 const averageResult = totalresult/arraySalary.length
console.log(`Average of Wipro Company Salary is ${averageResult}`);