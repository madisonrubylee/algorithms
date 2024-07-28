/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // given an array of positive integerds nums and a positive integer target
  // 1 : 다 돌아보기
  let left = 0;
  let sum = 0;
  let min = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
};

// 2 + 3 + 1 + 2 - 4 numbers for a total of 8
// 3 + 1 + 2 + 4 - 4 numbers
// 1 + 2 + 4 - 3 numbers
// 2 + 4 + 3 - 3 numbers
// 4 + 3 - 2 numbers

// Sliding Window
// 잘 보면 규칙이있음 3 1 2 => 3 1 2 => 1 2 4 => 1 2 4 => 4 3
