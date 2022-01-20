function outTwoNumber(a, b) {
  let c = a;

  let intervalId = setInterval(function() {
    console.log(c);
    if (c == b) {
      clearInterval(intervalId);
    }
    c++;
  }, 1000);
}
outTwoNumber(5, 15);