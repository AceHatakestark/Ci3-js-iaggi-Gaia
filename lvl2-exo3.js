function isPrime(n) {
    if (n < 2 || n % 1 !== 0) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isPrime(1)); 
  console.log(isPrime(2)); 
  console.log(isPrime(17));
  console.log(isPrime(18));
  console.log(isPrime(19));