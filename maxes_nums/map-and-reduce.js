// By Carlos Cabrera

module.exports = (maxes, nums) => {

  return maxes.map(max => {
    return nums.filter(num => num <= max).length;
  });

}
