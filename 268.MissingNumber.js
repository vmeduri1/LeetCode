/**
 * @param {number[]} nums
 * @return {number}
 */

// [3, 0, 1];
// [0, 1, 2, 3];
// correctTotal = 6;
// missingTotalSum = 4;
// missingNum = correctTotal - missingTotalSum = 2;

var missingNumber = function(nums) {
    let correctTotal = 0;
    let missingTotalSum = 0;
    
    for (let i = 0; i < (nums.length + 1); i++) {
        // console.log(i, " :correct array");
        correctTotal += i;
        // console.log(correctTotal, "correctTotal");
        if (nums[i]) {
            // console.log(nums[i], " :missingNum array");
            missingTotalSum += nums[i];
            // console.log(missingTotalSum, "missingTotal");
        }
        
    }
    return correctTotal - missingTotalSum;
};