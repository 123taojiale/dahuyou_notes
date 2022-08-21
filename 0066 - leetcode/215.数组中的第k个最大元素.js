/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.68%)
 * Likes:    1823
 * Dislikes: 0
 * Total Accepted:    715.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 *
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 *
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
// /**
//  * 22-08-19
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function(nums, k) {
//   return nums.sort((a, b) => a - b)[nums.length - k]
// };



/**
 * 22-08-20
 * 堆排序（大根堆）
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  let heapSize = nums.length
  buildMaxHeap(nums, heapSize)
  for(let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]]
    maxHeapify(nums, 0, --heapSize)
  }
  return nums[0]
}

function buildMaxHeap(nums, heapSize) {
  for(let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(nums, i, heapSize)
  }
}

function maxHeapify(nums, startIndex, heapSize) {
  let l = startIndex * 2 + 1, r = startIndex * 2 + 2, largest = startIndex
  if (l < heapSize && nums[l] > nums[largest]) largest = l
  if (r < heapSize && nums[r] > nums[largest]) largest = r
  if (largest !== startIndex) {
    [nums[startIndex], nums[largest]] = [nums[largest], nums[startIndex]]
    maxHeapify(nums, largest, heapSize)
  }
}
// @lc code=end

