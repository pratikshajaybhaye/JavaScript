

const map = new Map();
map.set("Height", "6 ft");
map.set("Weight", 78);
map.set("Name", "Pratiksha");
map.set("City", "Mumbai");
map.set("isMarried", true);
console.log(map);
console.log(map.get("Name")); // get Method
console.table(map);  // Table Format

console.log(`---Adding duplicate key Name----`);
map.set("Name", "Pratiksha Jaybhaye")
console.log(map);

console.log(`----Unique Key duplicate Value----`);
map.set("country", "Mumbai");
console.table(map);

console.log(`---Map Size----`);
console.log(`Map Size is: ${map.size}`);

console.log(`----Delete Key or Value----`);
map.delete("country");
console.log(map);

console.log("----Has Method-----");
console.log(`Is Key Available:${map.has("Name")}`);

console.log(`----Keys & Value Print----`);
console.log(map.values());
console.log(map.keys());

console.log(`----Traversing the Map---`);
const keys = map.keys();
for (const key of keys) {
    map.get(keys);
}
console.log(`${keys}==>, ${map.get(keys)}==>`);

