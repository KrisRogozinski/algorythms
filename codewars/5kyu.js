/* This are my solutions from 5kyu level of https://www.codewars.com/
Language: Javascript
*/

//Math Issues
Math.round = function(number) {
  result = number.toString().split('.');
  if(result.length==1)
    return parseInt(result);
  else {
    if(parseFloat(0+'.'+result[1]) < 0.5)
      return Math.floor(number);
    else
      return Math.ceil(number);
  }
};

Math.ceil = function(number) {
  result = number.toString().split('.');
  if(result.length==1)
    return parseInt(result);
  return parseInt(result[0]) + 1;
};

Math.floor = function(number) {
  result = number.toString().split('.');
  return parseInt(result[0]);
};
