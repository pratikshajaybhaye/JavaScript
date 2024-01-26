const isPromiseData = false;
function getData() {
    const promise = new Promise((Success, failure) => {
     setTimeout(() => {
        Success('Promise Resolved : Successfully fetched Data');
     }, 5000);
        });
    return promise;
}
 async function showData() {
  console.log(`Inside try Block`);
        const promiseData =await getData();
    console.log(promiseData);
    dance();
}
showData();

function dance() {
    console.log(`I am Dancing as my Promise Resolved...`);
}