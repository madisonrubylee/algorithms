var productExceptSelf = function (nums) {
  const length = nums.length;
  const answer = new Array(length);

  // 왼쪽 곱셈 누적 배열
  const leftProducts = new Array(length);
  leftProducts[0] = 1;
  for (let i = 1; i < length; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }

  // 오른쪽 곱셈 누적 배열
  const rightProducts = new Array(length);
  rightProducts[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }

  // 최종 결과 배열
  for (let i = 0; i < length; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;
};
