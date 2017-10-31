/* This are my solutions from 7kyu level of https://www.codewars.com/
Language: Javascript
*/

//Problem: Growth of a Population
function nbYear(p0, percent, aug, p) {
  var result = 0;
  while(p0 < p){
    p0 += (p0*(percent/100)) + aug;
    result++;
  }
  return result;
}
//Problem: Growth of a Population v2 recursive
function nbYear(p0, percent, aug, p, years = 0) {
  if(p0 >= p)
    return years;
  years++;
  p0 += (p0*(percent/100)) + (aug);
  return nbYear(p0, percent, aug, p, years);
}

//Problem: Printer Errors
function printerError(s) {
  return s.split('').filter(a => 'abcdefghijklm'.split('').indexOf(a) < 0).length+'/'+s.length;
}

//Count the Characters
function countChar(string, char) {
  return string.toLowerCase().split('').filter(a => a==char.toLowerCase()).length;
}

//Simple elevator
function goto(level,button){
  var result = 0;
  level = parseInt(level,10);
  button = parseInt(button,10);
  if((level >= 0 && level < 4) && (button >= 0 && button < 4)){
    result = button - level;
  }
  return result;
}
//Simple elevator v2
function goto(level,button){
  return level in [0,1,2,3] && button in [0,1,2,3] ? button - level : 0
}

//Get the Middle Character
function getMiddle(s){
  var i = s.length/2;

  if(i % 1 == 0)
    return s[i-1]+s[i]
  else
    return s[Math.floor(i)];
}

//Reversed Strings
function solution(str){
  return str.split('').reverse().join('');
}

//Basic Calculator
function calculate(num1, operation, num2) {
  var result = null;

  switch(operation){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      if (result == -0)
        result = Math.abs(result);
      break;
    case "/":
      if (num2!=0)
        result = num1 / num2;
      break;
    default:
      return null;

  }
  return result;

}
//Basic Calculator v2
function calculate(num1, operation, num2) {
  return '+-*/'.indexOf(operation) > -1 ? eval(num1 + operation + num2) : null
}

//Sum of Array Averages
const sumAverage = (arr) => {
  let result = 0;
  for (let i=0;i<arr.length;i++){
    result = result + (arr[i].reduce((a,b) => a+b,0))/arr[i].length;
  }
  return Math.floor(result);
}
