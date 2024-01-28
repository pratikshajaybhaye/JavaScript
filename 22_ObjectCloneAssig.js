const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(
  `-------  Step 1: Shallow Clone & Update the Values 55, 66 using push()-------------`
);
arrayNums.push(55, 66);
console.log("Original Array is :", arrayNums);
console.log("Clone Array is :", arrayNums);

console.log(`-------  Step 1: Deep Clone Using Spread Operator-------------`);
const spreadOpr = { ...arrayNums };
arrayNums.splice(3, 0, 10, 25);
console.log("Original Array is :", arrayNums);
console.log("Clone Array is :", arrayNums);

console.log(`-----Step 3: Merge or Concate the Other Array-----`);
const arrayEven = [2, 30, 14, 8];
console.log("Given arrayNums is:", arrayEven);
console.log("Given arrayNums is:", arrayNums);
const mergeArray = [...arrayNums, ...arrayEven];
console.log("After Merge Array is :", mergeArray);

console.log(`---------Step 4:-----------`);
const employee_info = {
  emp_id: 27,
  emp_name: "Jhon Doe",
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    locality: {
      colony: "OM Vrindava Society",
      street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    Country: "India",
  },
  mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"],
};
console.log(employee_info);

console.log(`--------------Step 5: a) Address-------------`);
console.log("Address Locality is :", employee_info.address.locality);
console.log("Address City is :", employee_info.address.city);
console.log("Address State is :", employee_info.address.state);
console.log("Address Country is :", employee_info.address.Country);

console.log(`--------------Step 5: b) Mobile Numbers-------------`);

console.log("Mobile Numbers are: ", employee_info.mobiles);

console.log(`-------Step 6: Deep Clone Using JSON.Strinfy()----------`);

console.log(`----------Step 6(a)-----------`);
const update = JSON.parse(JSON.stringify(employee_info));
update.salary.july_month = "80,0000INR";
console.log(`Updated Salary is : ${update.salary.july_month}`);
console.table(update.salary);

console.log(`----------Step 6(b)-----------`);
// const update = JSON.parse(JSON.stringify(employee_info));
update.address.Country = "United Kingdom";
console.log(`Updated Country is : ${update.address.Country}`);
console.table(update.address);

console.log(`----------Step 6(c)-----------`);
console.table(employee_info);

console.table(update);
