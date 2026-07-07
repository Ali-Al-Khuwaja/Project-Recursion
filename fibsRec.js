function fib(n) {
  if (n <= 2) return [0, 1].slice(0, n);

  let sequence = fib(n - 1);
  let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextValue);

  return sequence;
}

console.log(fib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
