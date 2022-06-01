var runningSum = function (nums) {
  var new_nums = [];
  var y = 0;
  var k = 0;
  while (y < nums.length) {
    if (y < 1) {
      new_nums[0] = nums[0];
    } else {
      for (var i = 0; i <= y; i++) {
        k = k + nums[i];
      }
      new_nums.push(k);
      k = 0;
    }

    y = y + 1;
  }

  return new_nums;
};

numbs = [3, 1, 2, 10, 1];

console.log(runningSum(numbs));
