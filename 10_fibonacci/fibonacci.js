const fibonacci = function (n) {
  let n1 = 0,
    n2 = 1,
    nextNum;
  let itr = 0;
  if (n >= 0) {
    while (itr < n) {
      nextNum = n1 + n2;
      n1 = n2;
      n2 = nextNum;
      itr++;
    }
  } else return 'OOPS';
  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
