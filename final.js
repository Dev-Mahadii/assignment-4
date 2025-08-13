//Problem-01 : Train TT's Fine Calculator

function totalFine(fare) {
  if (Number.isInteger(fare) && fare > 0) {
    let finalTotalFine = fare + fare * 0.2 + 30;
    return finalTotalFine;
  } else {
    return "Invalid";
  }
}

//Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  if (typeof str === "string") {
    let newFormattedString = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        newFormattedString = newFormattedString.concat(str[i]);
      }
    }
    return newFormattedString.toUpperCase();
  } else {
    return "Invalid";
  }
}

//Problem-03 : FIFA Best Team Award

function bestTeam(player1, player2) {
  if (typeof player1 === "object" && typeof player2 === "object") {
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 > team2) {
      return player2.name;
    } else if (team1 == team2) {
      return "Tie";
    } else {
      return player1.name;
    }
  } else {
    return "Invalid";
  }
}

//Problem-04: Same Same But Different

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length == arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

//Problem-05: Exam Result Report Generator

function resultReport(marks) {
  if (Array.isArray(marks)) {
    let report = {};
    let total = 0,
      averageScore = 0,
      passCount = 0,
      failCount = 0;

    for (let score of marks) {
      if (score >= 40) {
        passCount++;
      } else {
        failCount++;
      }
      total = total + score;
    }

    averageScore = Math.round(total / marks.length);
    if (isNaN(averageScore)) {
      averageScore = 0;
    }
    report.finalScore = averageScore;
    report.pass = passCount;
    report.fail = failCount;

    return report;
  } else {
    return "Invalid";
  }
}
