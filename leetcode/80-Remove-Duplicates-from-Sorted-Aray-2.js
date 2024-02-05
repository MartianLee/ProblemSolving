/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1,
    last = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      if (last < 2) {
        nums[count] = nums[i];
        count++;
      }
      last++;
    } else {
      nums[count] = nums[i];
      count++;
      last = 1;
    }
    // console.log(i, nums[i], nums, count, last);
  }
  return count;
};
