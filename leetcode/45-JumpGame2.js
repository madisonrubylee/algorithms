/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, 
if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n

Return the minimum number of jumps to reach nums[n - 1].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // index ~ index + nums[i] 사이를 갈수있음 .
  // 내가 찾아야되는건 가장 멀리갈수있는 인덱스와 점프 갯수임 ,,

  // 직전 점프로 갈수있는 가장 maximum 위치
  let oldMaximum = 0;

  let jump = 0;
  let newMaximum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    newMaximum = Math.max(newMaximum, i + nums[i]);
    if (i === oldMaximum) {
      jump++;
      oldMaximum = newMaximum;
    }
  }
  return jump;
};
