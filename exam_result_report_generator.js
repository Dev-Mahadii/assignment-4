function  resultReport( marks ) {

    if(Array.isArray(marks)){
        let report = {};
        let total = 0, averageScore = 0, passCount = 0, failCount = 0;

        for(let score of marks){
            if(score>=40){
                passCount++;
            }
            else{
                failCount++;
            }
            total = total + score;
        }

        averageScore = (Math.round(total/marks.length));
        if(isNaN(averageScore)){
            averageScore = 0;
        }
        report.finalScore = averageScore;
        report.pass = passCount;
        report.fail = failCount;

        return report;
    }
    else{
        return "Invalid";
    }
}

console.log(resultReport([]));

