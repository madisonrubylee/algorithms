/**
 * You are given an integer array nums. You are initially positioned at the array's first index, 
 * and each element in the array represents your maximum jump length at that position.
   Return true if you can reach the last index, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  // Greedy 사용
  // nums 배열 0번째부터 순회해야함

  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    // max 업데이트
    max = Math.max(max, idx + nums[idx]);
  }
};
