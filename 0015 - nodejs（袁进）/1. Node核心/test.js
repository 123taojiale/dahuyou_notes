// 辅助函数1 - 根据 className 删除指定元素
function removeSelf(className) {
  document.querySelector(className).remove()
}

// 辅助函数2 - 将时间'00:03:46'转为'226' - 一共多少秒，用于排序
function formatTimeStr(timeStr) {
  const timeArr = timeStr.split(':')
  // timeArr[0] // 时
  // timeArr[1] // 分
  // timeArr[2] // 秒
  // console.log(+timeArr[0], +timeArr[1], +timeArr[2])
  return +timeArr[0] * 3600 + +timeArr[1] * 60 + +timeArr[2]
}

removeSelf('.preview-header') // 1. 移除头部
// 2. 删除标题后边的“.mp4 v1”
const title = document.querySelector('.preview-main-title').innerText;
// console.log(title.replace(/\.mp4.+/, ''))
// document.querySelector('.preview-main-title').innerText = '# ' + title.replace(/\.mp4.+/, '')
document.querySelector('.preview-main-title').innerHTML = ''
const titleH1 = document.createElement('h1')
titleH1.innerText = title.replace(/\.mp4.+/, '')
document.querySelector('.preview-main-title').appendChild(titleH1)

// 3. 删除第2行到第5行的内容，第二行要求保留总时长信息
const duration = document.querySelector('.preview-main-fileinfo .duration').innerText
// document.querySelector('.preview-main-fileinfo .duration').innerText = '\n## 总时长：' + duration

document.querySelector('.preview-main-fileinfo .duration').innerText = ''
const durationH2 = document.createElement('h2')
durationH2.innerText = '\n总时长：' + duration
document.querySelector('.preview-main-fileinfo .duration').appendChild(durationH2)

removeSelf('.preview-main-fileinfo .ratio')
removeSelf('.preview-main-fileinfo .fps')
removeSelf('.preview-main-fileinfo .bitrate')
removeSelf('.preview-main-project')
removeSelf('.preview-main-comment-members')
removeSelf('.preview-main-comment-count')

// 4. 全文的时间码改为二级标题
// 示例：时间码00:03:46:12
// 结果：## 00:03:46
const timecodeDoms = document.querySelectorAll('.preview-main-comment-timecode')
let timecodeBlocks = []; // 用于完成 6 的辅助数组
for (let i = 0; i < timecodeDoms.length; i++) {
  const timecodeDom = timecodeDoms[i];
  const timeSliced = timecodeDom.innerText.slice(3, 11)
  timecodeBlocks.push({
    now: timeSliced,
    ele: timecodeDom.parentElement.parentElement
  })
  // timecodeDom.innerText = '\n## ' + timecodeDom.innerText.slice(3, 11)

  timecodeDom.innerHTML = ''
  const timecodeDomH2 = document.createElement('h2')
  timecodeDomH2.id = 'time-code-dom-h2'
  // timecodeDomH2.innerText = timeSliced
  timecodeDom.appendChild(timecodeDomH2)
}

// 5. 删除「家乐 -07/14 07:31:32」所有个人信息
// removeSelf('.preview-main-comment-person')
const mainCommentDoms = document.querySelectorAll('.preview-main-comment')
for (let i = 0; i < mainCommentDoms.length; i++) {
  const mainCommentDom = mainCommentDoms[i];
  mainCommentDom.querySelector('.preview-main-comment-person').remove()
}

// 6. 按照时间码进行排序
timecodeBlocks.sort((a, b) => {
  // console.log(a.now , formatTimeStr(a.now));
  return formatTimeStr(a.now) - formatTimeStr(b.now)
})

timecodeBlocks = timecodeBlocks.map((it, i) => {
  it.ele.querySelector('#time-code-dom-h2').innerText = `${it.now}`
  return it
}) // 每一条批注前边，加上编号

// 7. 删除所有批注块
const previewMain = document.querySelector('.preview-main')
const commentBlocks = previewMain.querySelectorAll('.preview-main-comment')
for (let i = 0; i < commentBlocks.length; i++) {
  const commentBlock = commentBlocks[i]
  commentBlock.remove()
}
// 8. 插入排序好的批注块
console.log(timecodeBlocks)
for (let i = 0; i < timecodeBlocks.length; i++) {
  const timecodeBlock = timecodeBlocks[i]
  previewMain.appendChild(timecodeBlock.ele)
}

// 9. 添加所有图片的显示/隐藏切换功能
// const imgDoms = document.querySelectorAll('.preview-main-comment-snapshot')
// document.querySelector('.preview-main-title').onclick = () => {
//   imgDoms.forEach(img => img.style.display = img.style.display === 'block' ? 'none' : 'block')
// }

// 10. HTML 实体转为普通字符串
// 场景：对于批注中出现的引号，比如：
// 实际上输入的是 "test" —— 这是希望看到的结果
// 但是 pdf 导出的批注却是 &#34;test&#34; —— 这并非希望看到的结果
document.querySelectorAll('.preview-main-comment-text.normal').forEach(item => {
  // item.innerHTML = item.innerText
  // 11. 添加换行的逻辑，适配 cubox
  const divWrapper = document.createElement('div')
  item.innerText.split('\n').forEach(lineText => {
    const div = document.createElement('div')
    if (lineText === '') div.appendChild(document.createElement('br'))
    else div.innerHTML = lineText
    divWrapper.appendChild(div)
  })
  item.innerText = ''
  item.appendChild(divWrapper)
})