const exponent = (a, b) => {
  let c = 1;
  if (b < 0) {
    const d = b * -1;
    const e = 1;
    for (let i = 0; i < d; i++) {
      c *= a;
    }
    const f = e / c;
    return f;
  }
  for (let i = 0; i < b; i++) {
    c *= a;
  }
  return c;
};

console.log(exponent(2, 3));
console.log(exponent(2, 4));
console.log(exponent(2, -3));
