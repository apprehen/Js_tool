/*
  实现思路:
    1. 获取屏幕宽度 
    2. 计算列数 (columns)
    3. 计算每一个列的高度 (colHeight)
    4. 找出最小高度的列 (minHeight)
    5. 将新的图片放入最小高度的列中
*/
// 获取imgitem数组元素
const imgItems = document.querySelectorAll('.imgitem');
// 获取每个 item 设置的间隔
const gap = 20;
// 获取屏幕宽度
const screenWidth = document.documentElement.clientWidth
// 计算列数
const columns = Math.floor(screenWidth / (imgItems[0].offsetWidth + gap))

let arrs = []
// console.log(screenWidth)
function init() {
  // console.log(colHeight)
  // 遍历imgitem数组
  imgItems.forEach(item => {
    // 计算第一列的最小高度
    let minHeight = Math.min(...arrs)
    // console.log(minHeight)
  })

}