/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let partitions = 0;
  let currentPartition = new Set();

  for (let char of s) {
    if (currentPartition.has(char)) {
      // 새로운 문자열로 건너뜀
      partitions++;
      currentPartition.clear();
    }
    currentPartition.add(char);
  }

  partitions++;

  return partitions;
};
