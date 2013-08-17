function clock() {
  var today = new Date();
  var 
      h = today.getHours(),
      m = today.getMinutes(),
      s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ':' + m + ':' +s;
  t = setTimeout(function() { clock() }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}