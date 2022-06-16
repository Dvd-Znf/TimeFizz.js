function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());

  var hOutput = "", mOutput = "";

  if (h % 3 == 0) {hOutput = hOutput + "Fizz"; }
  if (h % 5 == 0) {hOutput = hOutput + "Buzz"; }
  if (m % 3 == 0) {mOutput = mOutput + "Fizz"; }
  if (m % 5 == 0) {mOutput = mOutput + "Buzz"; }

  if (hOutput == "") {hOutput = h;}
  if (mOutput == "") {mOutput = m;}

  let time = hOutput + ":" + mOutput ;
  document.getElementById("timeoutput").innerHTML = time;