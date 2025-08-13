function totalFine(fare) {
  if (Number.isInteger(fare) && fare > 0) {
    let finalTotalFine = fare + fare * 0.2 + 30;
    return finalTotalFine;
  }
  else{
    return "Invalid";
  }
}

let result = totalFine("Gorib tai ticket katinai");
console.log(result);
