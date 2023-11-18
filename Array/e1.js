/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let temp = map.get(target - nums[i]);
    if (temp && temp != i) return [i, temp];
  }
};

//nums = [2,7,11,15], target = 9
console.log(twoSum([1, 3, 4, 2], 6));
