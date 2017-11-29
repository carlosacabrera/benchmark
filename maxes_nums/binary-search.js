// By Jorge

const result = [];

function binarySearchSmallerOrEqual(targetArray, start, end, value) {
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (targetArray[middle] <= value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return end;
}

function sortNumber(a, b) {
  return a - b;
}

module.exports = (maxes, nums) => {
  nums = nums.sort(sortNumber);

  for (let i = 0; i < maxes.length; i++) {
    const index = binarySearchSmallerOrEqual(nums, 0, nums.length - 1, maxes[i]);
    result.push(index + 1);
  }

  return result;
}