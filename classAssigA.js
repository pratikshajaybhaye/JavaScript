
console.log(`--------Step 1------`);
class Vehicle  {

constructor(name, battery, color, price, number){
    this.name = name;
    this.battery = battery;
    this.color = color;
    this.price = price;
    this.number = number;
    
}
getDetails(){
    console.log(
        `Name:${this.name}, Battery: ${this.battery}, Color: ${this.color}, Price: ${this.price}, Number: ${this.number}`
    );
}

}
const tataPunch = new Vehicle ("Tata Punch", "25 - 35kwh", "Red","15.49 Lakh","MH12CG0249")
// tataPunch.getDetails();

const hyundaiCreta = new Vehicle ("Hyundai Creta", "15 - 20kwh", "White","10.99 Lakh","MH12CG0258")
// hyundaiCreta.getDetails();

const kiaSonet = new Vehicle ("Kia Sonet", "20 - 22kwh", "Black","7.99 Lakh","MH12CG1234")
// kiaSonet.getDetails();

const mclaren = new Vehicle ("Mclaren", "27 - 35kwh", "Blue","5.91 Cr","MH12CG1020")
// mclaren.getDetails();

const tata = new Vehicle ("Tata", "25 - 30kwh", "Grey","10.50 Lakh","MH12CG0001")
// tata.getDetails();

const tataPunchObj = Object.assign(tataPunch);
console.log(tataPunchObj);

const hyundaiCretaObj = Object.assign(hyundaiCreta);
console.log(hyundaiCretaObj);

const kiaSonetObj = Object.assign(kiaSonet);
console.log(kiaSonetObj);

const mclarenObj = Object.assign(mclaren);
console.log(mclarenObj);

const tataObj = Object.assign(tata);
console.log(tataObj);

console.log(`------Step 2------`);
class College {

    constructor(collgeName, area, City, grade){
        this.collgeName = collgeName;
        this.area = area;
        this.City = City;
        this.grade = grade;
    }
        display() {
            console.log(`College Name: ${this.collgeName}, Area: ${this.area}, City: ${this.City}, Grade: ${this.grade}`);
          }
        
    }


const kbp = new College("K.B.P Collge","50 Sq.", "Vashi", "A");
const bharti = new College("Bharti Vidyapith","85 Sq.","Belapur","A+");
const tilak = new College("Tilak Collge","70 Sq.","Nerul","B+");
const sies = new College("SIES Collge","60 Sq.","Sewood","B");
kbp.display();
bharti.display();
tilak.display();
sies.display();

console.log(`--------Step 3------`);
 function traverseObject(arg) {
    for (const key in arg) {
        if (arg.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            console.log(`Key==> ${key} Value==>${element}`);
        }
    }
 }
 console.log("-----Traversing KBP College:------");
traverseObject(kbp);

console.log("-----Traversing Bharti College:------");
traverseObject(bharti);

console.log("-----Traversing Tilak College:-----");
traverseObject(tilak);

console.log("-----Traversing SIES College:-----");
traverseObject(sies);
