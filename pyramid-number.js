const generatePyramid = (num) => {
  const output = '';
  const generateRow = num;
  for (let i = 1; i <= generateRow; i++) {
    for (let j = 1; j <= num; j++) {
      output += j + '  ';
    }
    console.log(output);
    output = '';
    num--;
  }
};

generatePyramid(8);