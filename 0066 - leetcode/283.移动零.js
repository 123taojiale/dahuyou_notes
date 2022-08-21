/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode.cn/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (64.07%)
 * Likes:    1707
 * Dislikes: 0
 * Total Accepted:    844.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 *
 *
 * 提示:
 *
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 *
 */

// @lc code=start
// /**
//  * 22-08-21
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) continue
//     // 从当前位置开始向后找第一个不是 0 的成员
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === 0) continue
//       nums[i] = nums[j]
//       nums[j] = 0
//       break
//     }
//   }
// }


/**
 * 22-08-21
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let len = nums.length; // 待处理的成员数量
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) continue
    for (let j = i + 1; j < len; j++) {
      nums[j - 1] = nums[j]
      if (j === len - 1) {
        nums[j] = 0
        len--
        i--
      }
    }
  }
}
// @lc code=end

