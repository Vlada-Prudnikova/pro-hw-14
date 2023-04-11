function pow(number, degree) {
  return degree == 1 ? number : number * pow(number, degree - 1);
}

console.log(pow(8, 7));
