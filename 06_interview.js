var tcsInterviewEligibility = function (gradScore,hscScore,sscScore,candidateName) 
{ var isReturn;
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        isReturn =(`Congrates ${candidateName} You are eligible for TCS interview.`);
    } else {
        isReturn =(`${candidateName} Unfortunately you are not eligible for interview`);
    }
    return isReturn;
}
var result = tcsInterviewEligibility(80,86,90,"Pratiksha");
console.log(`${result}`);

var result = tcsInterviewEligibility(70,65,55,"Rutuja");
console.log(`${result}`);

var result = tcsInterviewEligibility(60,79,88,"Kishor");
console.log(`${result}`);