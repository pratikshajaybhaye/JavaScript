function stringHandsOn() {
    console.log(`-------Step 1-----`);
    var givenString = "   Hey you are doing good, keep it up   ";
    console.log(`1. ${givenString}`);
    console.log(`-----Step 2-----`);
    var totalCharacter = givenString.length
    console.log(`2. Length of the String: ${totalCharacter}`);
    console.log(`----Step 3-----`);
    var trimResult = givenString.trim();
    console.log(`3. Remove the Leading and trailing Extra Spaces: ${trimResult}`);
    console.log(`-----Step 4-----`);
    console.log(`4. Total Number of Extra Spaces Count after Trim ${trimResult.length}`);
    console.log(`----Step 5-----`);
    var first = trimResult.charAt(0);
    var last = trimResult.charAt(trimResult.length-1);
    console.log(`5. First & Last Character after Trim: "First Character:"  ${first} , "Last Character:"${last}`);
    console.log("--------Step 6 ------");
    var result = trimResult.split(" ");
    console.log(`6. Total words in the String is ${result.length}`);
    console.log("--------Step 7 ------");
    var indexofgood = trimResult.indexOf ('good')
    console.log(`7. Index of Word "Good is" is:  ${indexofgood} `);
    console.log("--------Step 8 ------");
    var result = trimResult.slice(22);
    console.log(`8. Slice is: ${result}`);
    
    var result = trimResult.substring(22);
    console.log(`8. Substring is: ${result}`);
    console.log("--------Step 9 ------");
    var result = trimResult.endsWith ('up');
    console.log(`9. String End With "Up": ${result}`);
    console.log("--------Step 10 ------");
    var result = trimResult.startsWith('Hey');
    console.log(`10. String Starts with "Hey": ${result}`);

}
stringHandsOn();