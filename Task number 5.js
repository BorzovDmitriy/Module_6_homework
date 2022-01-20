let num = (x, n)=>{
  if(x <= 0 || x % 1 !== 0){
    return;
  } 
  if (n <= 0 || n % 1 !== 0){
    return;
  } 
      let result = x ** n;
      return result;

}
console.log(num(3, 2));