function getCentury(year) {
  if (year == 0) return "0";
  if (year < 100) return "1st";

  const century = Math.ceil(year / 100);
  let ending = " ";
  if (century == 11 || century == 12 || century == 13) ending = "th";
  else if (century % 10 == 1) ending = "st";
  else if (century % 10 == 2) ending = "nd";
  else if (century % 10 == 3) ending = "rd";
  else ending = "th";
  return century + ending;
}

module.exports = getCentury;
