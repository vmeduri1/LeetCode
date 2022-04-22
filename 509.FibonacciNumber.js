// this solution works on LeetCode (doesn't test with a big enough number)
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    return fib(n - 1) + fib(n - 2);
};
// 29.84% percentile speed

// memoized solution
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n, memo={}) {
    if (n in memo) return memo[n]
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    memo[n] = fib(n - 1) + fib(n - 2);
    
    return memo[n];
};
// faster than 5.01% of online JavaScript submissions
// so, it's slower, which is odd. But, they may be using n's that are smaller
// Leetcode's Runtime is weird...