function gcd(a: number, b: number) {
  if (a < b) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  while (b !== 0) {
    const tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}

function calcPrimes(max: number) {
  const primes = new Array<boolean>(max + 1).fill(true);
  for (let i = 2; i < primes.length; i++) {
    if (!primes[i]) {
      continue;
    }
    let index = 2 * i;
    while (index < primes.length) {
      primes[index] = false;
      index += i;
    }
  }

  return primes;
}
