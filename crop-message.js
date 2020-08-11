function solution(message, K) {
  let splitMessage = message.trim().split(" ");
  let resultCrop = [];
  let counterNumChars = 0;
  for (let i = 0; i < splitMessage.length; i++) {
    if (K >= counterNumChars + splitMessage[i].length) {
      resultCrop.push(splitMessage[i]);
    }
    counterNumChars += splitMessage[i].length + 1;
  }
  return resultCrop.join(" ");
}

console.log(solution("cocacola", 5))