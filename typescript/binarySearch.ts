// leetcode 35. Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    middle = Math.floor(nums.length / 2);
  if (target < nums[0]) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  while (1) {
    if (nums[middle] == target) {
      return middle;
    }
    if (nums[start] == target) {
      return start;
    }
    if (nums[end] == target) {
      return end;
    }
    if (nums[start] <= target && target <= nums[middle]) {
      if (start + 1 == middle) {
        return middle;
      }
      end = middle;
      middle = Math.floor((start + end) / 2);
    } else if (nums[middle] < target && target <= nums[end]) {
      if (middle + 1 == end) {
        return end;
      }
      start = middle;
      middle = Math.floor((start + end) / 2);
    }
    console.log(start, end, middle);
  }
};

// ----

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const arr = [0, 1, 2, 3, 4, 6, 100, 10000];

console.log(binarySearch(arr, 100)); // 6ß

let recursiveSearch = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveSearch(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveSearch(arr, x, mid + 1, end);
};
