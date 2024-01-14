console.log(`-----Step 1-----`);

let professor = {
  fullName: "Dr.Bipin Shinde",
  College: "K.B.P Collge , Vashi",
  age: 32,
  City: "Navi Mumbai",
  desgination: "Assistant Professor",
}

console.log(professor);

console.log(`-----Step 2-----`);
degrees = {
  enginerring: "CSC",
  PHD: "Adv Computing",
  MSC: "Analytical Checmistry",
  Project: "Nanoparticles",
}
console.log(degrees);

console.log(`-----Step 3-----`);
certificates = [
  "Hacker Rank Participation",
  "Certificate in IFE Course",
  "Certificate in Adv Programming",
];
console.table(certificates);

console.log(`-----Step 4-----`);
professor.totalExperience = "14 Years";
console.log(professor.totalExperience);

console.log(`-----Step 5-----`);
professor.age = 33;
console.log(professor);

console.log(`-----Step 6-----`);
certificates.splice(2, 0, "Oracle Certified");
console.log(certificates);

console.log(`-----Step 7-----`);
console.log(`Last element of Array is:`, certificates[3]);

console.log(`-----Step 8-----`);
console.log(professor);

console.log(`-----Step 9-----`);
for (const iterator of certificates) {
    console.log(iterator);
}
