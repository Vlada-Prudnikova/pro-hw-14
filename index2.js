function pow(number, degree) {
  let result = number;
  for (let i = 1; i < degree; i++) {
    result *= number;
  }
  return result;
}

console.log(pow(7, 2));
