function longestConsec(strarr, k) {
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
