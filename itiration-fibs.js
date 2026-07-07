function fibonacci(n) {
  if (n <= 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    let fib = sequence[i - 1] + sequence[i - 2];
    sequence.push(fib);
  }

  return sequence;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
