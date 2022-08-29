/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode.cn/problems/sort-colors/description/
 *
 * algorithms
 * Medium (60.13%)
 * Likes:    1382
 * Dislikes: 0
 * Total Accepted:    439.2K
 * Total Submissions: 730.4K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 *
 *
 *
 * 必须在不使用库的sort函数的情况下解决这个问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] 为 0、1 或 2
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 你可以不使用代码库中的排序函数来解决这道题吗？
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 *
 *
 */

// @lc code=start
// /**
//  * 22-08-29
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  var sortColors = function(nums) {
//   nums.sort()
// };


// /**
//  * 22-08-29
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function (nums) {
//   const len = nums.length
//   for (let i = 0; i < len - 1; i++)
//     for (let j = 0; j < len - 1 - i; j++)
//       if (nums[j] > nums[j + 1])
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
// };



/**
 * 22-08-30
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const len = nums.length

  let lt = -1, gt = len, i = 0

  while (i < gt) {
    const item = nums[i]
    if (item < 1) {
      lt++
      [nums[i], nums[lt]] = [nums[lt], nums[i]]
      i++
    } else if (item > 1) {
      gt--
      [nums[i], nums[gt]] = [nums[gt], nums[i]]
    } else {
      i++
    }
  }
};
// @lc code=end