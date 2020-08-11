function solution(record) {
  var answer = [];
  let data = [];
  let users = [];

  for (i = 0; i < record.length; ++i) {
    if (record[i].length > 100000) {
      return "Record is an array containing the following strings and its length is 1 ~ 100,000";
    } else {
      for (j = 0; j < record.length; ++j) {
        const word = record[j].split(" ");
        data.push(word);
        if (data[j][0] === "Enter" || data[j][0] === "Change") {
          users[data[j][1]] = data[j][2];
        }
      }

      for (k = 0; k < data.length; ++k) {
        if (data[k][0] === "Enter") {
          answer.push(users[data[k][1]] + " came in.");
        } else if (data[k][0] === "Leave") {
          answer.push(users[data[k][1]] + " has left.");
        }
      }

      return answer;
    }
  }
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(record));
