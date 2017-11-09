/* This are my solutions from 6kyu level of https://www.codewars.com/
Language: Javascript
*/

//Format a string of names like 'Bart, Lisa & Maggie'.
function list(names){
  var result = '';

  for(var i=0;i<names.length;i++){
    result += names[i].name;
    if(i < names.length-2)
      result += ', ';
    else if (i == names.length-2)
      result += ' & ';
  }
  return result;
}

//Consecutive strings
function longestConsec(strarr, k) {
  let rslt = '';
  if (k <= 0 || k > strarr.length)
    return rslt;
  for (let i = 0; i < strarr.length; i++)
  {
    let tmp = strarr.slice(i, i+k).join('');
    if (rslt.length < tmp.length)
      rslt = tmp;
  }
  return rslt;
}

//Sum Array with different bases
function sumItUp(a) {
  let res = 0;
  for(let i=0;i<a.length;i++){
    res += parseInt(a[i][0],a[i][1]);
  }
  return parseInt(res,10);
}
