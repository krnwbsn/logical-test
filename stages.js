function solution(N, users) {
  var answer = [];
  const totalUsers = users.length;

  if (N < 1 || N > 500) {
    return "N, total stages: 1 ~ 500";
  } else {
    if (totalUsers > 200000) {
      return "The length of array users: 1 ~ 200,000";
    } else {
      for (i = 0; i < totalUsers; i++) {
        if (users[i] < 1 || users[i] > N + 1) {
          return "users contain numbers 1 ~ N + 1";
        } else {
          for (j = 1; j <= N; j++) {
            const value = users.filter((user) => user === j).length;
            const result = {
              user: j,
              rate: value / totalUsers,
            };
            answer.push(result);
          }
          const result = answer
            .sort((a, b) => b.rate - a.rate)
            .map((item) => item.user);

          return result;
        }
      }
    }
  }
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
