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
