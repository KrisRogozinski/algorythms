function longestConsec(strarr, k) {
    let n = strarr.length,
        arr = [],
        result = "";
    if (n == 0 || k > n || k <= 0)
      return "";

    for (let i = 0; i < n; i++){
      arr.push(strarr[i].length);
    }
    console.log(arr);
    arr = arr.sort(function(a, b){
      return b - a;
    });
    console.log(arr);
    for (let i = 0; i < k-1; i++){

      result += strarr[arr[i]];
    }
    return result;
}

function longestConsec2(strarr, k) {
  let rslt = '';
  if (k <= 0 || k > strarr.length)
    return rslt;
  for (let i = 0; i < strarr.length; i++)
  {
    let tmp = strarr.slice(i, i+k).join('');
    if (rslt.length < tmp.length)
      rslt = temp;
  }
  return rslt;
}


console.log(longestConsec2(["zo", "abigail", "the", "form", "libe", "zas"], 2));
