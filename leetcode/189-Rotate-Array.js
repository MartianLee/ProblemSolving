/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  const temp = nums.splice(0, nums.length - k);
  for (let i = 0; i < temp.length; i++) {
    nums.push(temp[i]);
  }
};
