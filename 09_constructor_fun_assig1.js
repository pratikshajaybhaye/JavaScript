



console.log(`-------Step 1------`);
function BankDetails (bankName, location, ifscCode,branchCode) {
    this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

const myBankDetails = new BankDetails("SBI Bank","Axis Bank", "Yes bank");
console.log(myBankDetails);

console.log(`------Step 2------`);

const sbiBank = new BankDetails("SBI Bank", "Juinagar", "SBIN0000371","0000371");

const axisBank = new BankDetails("Axis Bank", "Nerul", "UTIB0SAZP04", "002766");

const yesBank = new BankDetails("Yes bank", "Belapur", "YESB0BMSB16", "000071");

console.log(`SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`SBI Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);
console.log(`Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);



console.log(`------Step 3----`);

BankDetails.prototype.openTime = "9 Am IST";

console.log(`SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode},Open Time : ${sbiBank.openTime}`);
console.log(`SBI Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode},Open Time : ${axisBank.openTime}`);
console.log(`Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode},Open Time : ${yesBank.openTime}`);

console.log(`------Step 4----`);

BankDetails.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode},Open Time : ${sbiBank.openTime}, Close Time: ${sbiBank.closeTime}`);
console.log(`SBI Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode},Open Time : ${axisBank.openTime}, Close Time: ${axisBank.closeTime}`);
console.log(`Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode},Open Time : ${yesBank.openTime}, Close Time: ${yesBank.closeTime}`);
