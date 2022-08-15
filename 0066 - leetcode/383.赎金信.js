/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (62.06%)
 * Likes:    433
 * Dislikes: 0
 * Total Accepted:    218.2K
 * Total Submissions: 351.9K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 *
 * 如果可以，返回 true ；否则返回 false 。
 *
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * 22-08-13
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const rLen = ransomNote.length, mLen = magazine.length
  if (rLen > mLen) return false
  for (let i = 0; i < rLen; i++) {
    const char = ransomNote[i];
    if (magazine.includes(char)) magazine = magazine.replace(char, "")
    else return false
  }
  return true
};

console.log('canConstruct("a", "ab") => ', canConstruct("a", "ab"))
console.log('canConstruct("aa", "ab") => ', canConstruct("aa", "ab"))
console.log('canConstruct("aa", "aba") => ', canConstruct("aa", "aba"))
// @lc code=end

