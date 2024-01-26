
function getData() {
    return "100 Products"
}
 async function showData() {
    try {
        console.log(`Inside try Block`);
        const promiseData =await getData();
    console.log(promiseData);
    } catch (error) {
        console.log(`Inside Catch Block`);
        console.log(error);
    }
}
showData();