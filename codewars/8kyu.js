/* This are my solutions from 8kyu level of https://www.codewars.com/
Language: Javascript
*/

//Problem: Remove First and Last Character
function removeChar(str){
 return str.slice(1,-1);
};

//Problem: A Strange Trip to the Market
function isLockNessMonster(s){
  return /3.50|tree fiddy/.test(s);
}

//Problem: Are arrow functions odd?
function odds(values){
  return values.filter((value) => value%2);
}

//Problem: Decibel Scale
function dBScale(intensity){
  return 10*Math.log10(intensity/Math.pow(10,-12));
}

//Problem: Sentence Smash
function smash(words){
  return words.join(' ');
}

//Problem: Calculate BMI
function bmi(weight, height) {
  var rslt = weight/Math.pow(height,2);
  if (rslt <= 18.5) { return "Underweight"; } else
  if (rslt > 18.5 && rslt <= 25) { return "Normal"; } else
  if (rslt > 25 && rslt <= 30) { return "Overweight"; } else
  return "Obese";
}

//Problem: Opposite Number
function opposite(number) {
  return number *= -1;
}

//Problem: Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function(bird){
    return !(geese.includes(bird));
  });
};
//Probelm: Filter out the geese v2
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(a => geese.indexOf(a) < 0);
};

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

//Beginner Series #2 Clock
function past(h, m, s){
  return (h*3600000)+(m*60000)+(s*1000);
}

//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort(function(a, b) {
    return a-b;
  }).filter(function(el, i, arr) {
    return arr.indexOf(el) === i;
  });
}

//Merge two sorted arrays into one v2
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

//Remove String Spaces
function noSpace(x){
  return x.replace(/\s/gi, '');
}

//Counting sheep...
function countSheeps(arrayOfSheep) {
 return arrayOfSheep.filter((a)=> a==true).length;
}

//Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}
