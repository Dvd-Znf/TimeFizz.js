function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
  
function startClock() {
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  var hOutput = "", mOutput = "", sOutput = "";


  if (h % 3 == 0) {hOutput = hOutput + "Fizz"; }
  if (h % 5 == 0) {hOutput = hOutput + "Buzz"; }

  if (m % 3 == 0) {mOutput = mOutput + "Fizz"; }
  if (m % 5 == 0) {mOutput = mOutput + "Buzz"; }

  if (s % 3 == 0) {sOutput = sOutput + "Fizz"; }
  if (s % 5 == 0) {sOutput = sOutput + "Buzz"; }


  if (hOutput == "") {hOutput = h;}
  if (mOutput == "") {mOutput = m;}
  if (sOutput == "") {sOutput = s;}

  let time = hOutput + ":" + mOutput + "." + sOutput;
  document.getElementById("timeoutput").innerHTML = time;
  setTimeout(startClock,1000);
}