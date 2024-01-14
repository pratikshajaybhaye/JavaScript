console.log(`------Step 1-----`);

const bankSbi = {
    bankName : "State Bank of India",
    accountNumber : 123456789,
    IFSCCode : "SBIN001234",
    Manager : "Bill"
}
console.log(bankSbi);

console.log(`------Step 2-----`);
const bankLocation = {
    Street : "Near Juinagar Station",
    City : "Navi Mumbai",
    pin : 400706
}
console.log(bankLocation);

console.log(`------Step 3------`);
const cloneObject =  Object.assign({},bankSbi,bankLocation);
console.log(cloneObject);

console.log(`-----Step 4------`);
const rateOfInterset = {
    homeLoanInterest : "7.0%" ,
    personalLoanInterest : "5%",
    dueLoanInterest : "15%"
}
console.log(rateOfInterset);

console.log(`------Step 5-----`);
const mergeObj = Object.assign({}, bankSbi, bankLocation, rateOfInterset)
console.table(mergeObj);


console.log(`-----Step 6 : Traverse object----`);
for (const key in mergeObj) {
    if (mergeObj.hasOwnProperty.call(mergeObj, key)) {
        const element = mergeObj[key];
        console.log(`${key} ==> ${element}`);
    }
}


