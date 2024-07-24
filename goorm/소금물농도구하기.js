const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    const [N, M] = line.trim().split(" ").map(Number);
    const saltAmount = 0.07 * N;

    const finalVolume = N + M;

    // 최종 소금물 양 계산
    const finalConcentration = (saltAmount / finalVolume) * 100;

    // 최종 농도 계산
    const answer = Math.floor(finalConcentration * 100) / 100;

    // 소숫점 둘째자리까지 출력
    console.log(answer.toFixed(2));
  }
  rl.close();
  process.exit();
})();
