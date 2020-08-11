const recursive = (a) => {
  if (!a.length) {
    return a
  };
  const b = a.slice(1);
  return recursive(b).concat(a[0]);
};

console.log(recursive(["h", "e", "l", "l", "o"]));
