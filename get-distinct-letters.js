function getDistinctLetters(strOne, strTwo) {
  let strThree = strOne + strTwo;
  let strFour = "";
  for (let i = 0; i < strThree.length; i++) {
    if (!strFour.includes(strThree[i])) {
      strFour = strFour + strThree[i];
    } else if (strFour.includes(strThree[i])) {
      strFour = strFour.replace(strThree[i], "");
    }
  }
  return strFour.split("").sort().join("");
}

module.exports = getDistinctLetters;
