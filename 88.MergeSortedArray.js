/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
    nums1.length === m + n
    nums2.length === n
*/

var merge = function(nums1, m, nums2, n) {
    // splice 0's ex. [1, 2, 3, 0, 0, 0];
    nums1.splice(m, n); // at position 3, remove three elements
    console.log(nums1);

    // once trailing zeroes are removed,... merge nums1 with nums2
    nums1.push(...nums2);
    console.log(nums1);
    
    // sort array
    nums1.sort((a, b) => { return a - b; });
    
};