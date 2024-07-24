const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력 데이터 저장
let input = [];

// 줄 단위로 입력 받음
rl.on("line", function (line) {
  // 입력받은 줄을 input 배열에 추가
  input.push(line);
  //첫 줄에 주어진 테스트 케이스의 개수만큼 입력을 받으면 입력을 종료
  if (input.length - 1 == parseInt(input[0])) {
    rl.close();
  }
}).on("close", function () {
  //입력이 종료되면 processInput 함수를 호출하여 입력 데이터를 처리하고 프로그램을 종료
  processInput(input);
  process.exit();
});

function processInput(input) {
  const T = parseInt(input[0]);
  for (let i = 1; i <= T; i++) {
    //  각 테스트 케이스의 𝑋,𝑌,𝑁 값을 공백으로 구분하여 읽고 정수로 변환
    const [X, Y, N] = input[i].split(" ").map(Number);
    // 절대값의 합을 계산하여 disatance에 저장
    const distance = Math.abs(X) + Math.abs(Y);

    // 1. disatance (0,0) => (x,y) 이동하는데 필요한 최소 시간
    // 예를들어 (0,0) => (3,4) 로 이동하려면 최소 7초 필요

    // 2. 만약 x,y 도착하고도 시간이 남았다면, 다시 이동했다가 돌아올수있는데, 이는 두번의 이동이 필요함. (짝수 번 이동 가능)
    if (distance <= N && (N - distance) % 2 === 0) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
