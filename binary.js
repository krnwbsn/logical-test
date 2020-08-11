const binary = (a) => {
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
      b = 0;
    } else if (a[i] === 1) {
      b += a[i];
    }
  }
  return b;
};

console.log(binary([1, 1, 0, 1, 1, 1]));
console.log(binary([1, 0, 0, 1, 0, 1, 1]));
