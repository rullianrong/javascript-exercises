const findTheOldest = function (objArr) {
  let age = 0;
  let oldest = {};

  objArr.forEach((element) => {
    if (element.yearOfDeath == undefined) {
      const date = new Date();
      element.yearOfDeath = date.getFullYear();
    }
    let yearLiving = element.yearOfDeath - element.yearOfBirth;
    if (yearLiving > age) {
      age = yearLiving;
      oldest = element;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
