function solution(relation) {
  var answer = 0;
  var names = [];
  var count = [];

  if (relation.length > 20) {
    return "The length of the row of relation is 1 ~ 20, and each row represents a tuple of relations.";
  } else {
    for (i = 0; i < relation.length; i++) {
      if (relation[i].length > 8) {
        return "The length of the relation column is 1 ~ 8, and each column indicates the attribute of the relation.";
      } else {
        for (let j = 0; j < relation[i].length; j++) {
          if (relation[i][j].length > 8) {
            return "The length of all strings in relation is 1 ~ 8, and consists of only lowercase letters and numbers.";
          } else {
            relation.forEach((item) => {
              names.push(item[1]);
            })

            names.forEach((item) => {
              count[item] = (count[item] || 0) + 1;
            });


            const total = Object.values(count);
            for (k = 0; k < total.length; k++) {
              if (total[k] > 1) {
                answer += total[k];
              }
            }

            return answer;
          }
        }
      }
    }
  }
}

const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

console.log(solution(relation));
