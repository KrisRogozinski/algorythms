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
