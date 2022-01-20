function isSimpleNumber(n) {
  let result = false;

  if (n <= 1 || n > 1000) {
      console.log('Данные неверны');
      return;
  }
  for (let i = 2; i <= n; i++) {
      if (i * i > n || result) {
          continue;
      }
      if (n % i !== 0) {
          continue;
      }
      result = true;
  }
  if (!result) {
      console.log('Число простое');
  } else {
      console.log('Число составное');
  }
}
isSimpleNumber(5);