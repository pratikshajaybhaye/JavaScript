

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

  console.log(`-----Step 1 : list of all Emplyoess Salary----`);
  const arrayOfSalary =  arrayEmployee.map((element)=>{
    return element.emp_salary;
  });
  console.log(arrayOfSalary);

  console.log(`-----Step 2 : list of all Emplyoess Deaprtments----`);
  const arrayOfDepartment =  arrayEmployee.map((element)=>{
    return element.emp_dept;
  });
  console.log(arrayOfDepartment);

  console.log(`-----Step 3 : list of all Emplyoess ID----`);
  const arrayOfID =  arrayEmployee.map((element)=>{
    return element.emp_id;
  });
  console.log(arrayOfID);