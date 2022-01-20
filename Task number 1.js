let arr = [3, 2, 5, 3, 4, 9, 0, 0, NaN, NaN, new Date(), [], 'string', '0', 5.6, false, null];
function getSumEvenOddZero(arr){
  let allZero = 0;
  let allEven = 0;
  let allOdd = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number" || Number.isNaN(arr[i])){
      if(arr[i] === 0){
        allZero += 1;
      } else if (arr[i] % 1 == 0 && arr[i] % 2 === 0){
        allEven += 1;
      } else if (arr[i] % 1 == 0 && arr[i] % 2 != 0){
        allOdd += 1;
      }
    }
  }
  console.log(`Количество нулей ${allZero}.`)
  console.log(`Количество четных чисел ${allEven}.`)
  console.log(`Количество не чётных чисел ${allOdd}.`)
}
getSumEvenOddZero(arr);