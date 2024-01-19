

const isNotesAvailable = true;
const promiseNotes = new Promise (function (success, reject) {
    if (isNotesAvailable) {
        success("Sharing the notes..Here youu go..")
    }
    reject(`Sorry guys..I didn't get time`)
});
promiseNotes.then(function (success) {
    console.log(success);
    console.log("Thank You Master....");
}).catch(function (failure) {
    console.log(`${failure}`);
    console.log(`Very Khadus Master`);
}).finally(function () {
    console.log(`I must have my notes..`);
})