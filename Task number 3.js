function getNum(a) {
  
    return function(b) { 
      return a + b;
    }
  
  }
  let resultFunc = getNum(5);
  let sumArg = resultFunc(15);
  console.log(sumArg);