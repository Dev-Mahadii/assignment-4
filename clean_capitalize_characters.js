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

let result = onlyCharacter(true);
console.log(result);
