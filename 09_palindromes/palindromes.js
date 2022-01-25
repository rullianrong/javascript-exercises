const palindromes = function (string) {
  let mainString = string.toLowerCase().replace(/[^A-Za-z0–9]/g, "");
  let finalString = mainString.split('').reverse().join('');
  return mainString == finalString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
