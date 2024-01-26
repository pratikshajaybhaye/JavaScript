
const isPromiseData = true;
function getData() {
    const promise = new Promise((Success, failure) => {

        if (isPromiseData) {
            failure("Promise Failed to resolve : Unable to get the Data")
        } else {
            Success('Promise Resolved : Successfully fetched Data');
        }
        });
    return promise;
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
    

    // Promise Process Instead We are using async /await for synchronous
    // promiseData.then((Success)=>{
    //     console.log(Success);
    // }).catch((failure)=>{
    //     console.log(failure);
    // }).finally(()=>{
    //     console.log(`Finally Block Execuated`);
    // });
}
showData();