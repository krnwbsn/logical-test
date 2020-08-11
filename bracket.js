const bracket = (a) => {
  let res = [];
  let b = 0;
  const open = ["{", "[", "("];
  const close = ["}", "]", ")"];

  for (let i = 0; i < a.length; i++) {
    if (open.indexOf(a[i]) !== -1) {
      res[b] = a[i];
      b++;
    } else if (close.indexOf(a[i]) !== -1) {
      if (b === 0) {
        return "NO";
      }
      if (res[b - 1] === open[close.indexOf(a[i])]) {
        b--;
      } else {
        return "NO";
      }
    }
  }

  return "YES";
};

console.log(bracket("{ [ ( ) ] }"));
console.log(bracket("{ [ ( ] ) }"));
console.log(bracket("{ ( ( [ ] ) [ ] ) [ ] }"));
