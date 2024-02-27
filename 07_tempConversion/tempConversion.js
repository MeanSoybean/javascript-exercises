const roundToOneDecimalPlace = function(num) {
  return Math.round(num*10)/10;
};

const convertToCelsius = function(f) {
  return roundToOneDecimalPlace((f-32)/1.8);
};

const convertToFahrenheit = function(c) {
  return roundToOneDecimalPlace(1.8*c+32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
