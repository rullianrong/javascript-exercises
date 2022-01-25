const palindromes = function (string) {
  let mainString = string.toLowerCase().replace(/[^A-Za-z0–9]/g, "");
  let mainStringArr = mainString.split("");
  let finalString = mainStringArr
    .reverse()
    .join()
    .replace(/[^A-Za-z0–9]/g, "");

  return mainString == finalString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
