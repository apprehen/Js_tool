// 聊天的数组
let chattingArr = []
// 聊天的little
let chatObj = {
  content: '呀哈喽',
  name: '月晕',
  time: '2021-05-01 12:00:00',
  flag: 'right',
  imgSrc: './yueyun.jpg'
}
let chatObj2 = {
  content: '你好',
  name: '月晕二号',
  time: '2021-05-01 12:00:00',
  flag: 'left',
  imgSrc: './suki.png'
}
let input = document.querySelector('.input')
chattingArr.push(chatObj)
chattingArr.push(chatObj2)
chattingArr.push(chatObj)
chattingArr.push(chatObj2)
chattingArr.push(chatObj)
chattingArr.push(chatObj2)
chattingArr.push(chatObj)
chattingArr.push(chatObj2)
chattingArr.push(chatObj)
chattingArr.push(chatObj2)
// 将聊天数组渲染到页面上
function renderChatting() {
  let chatUl = document.querySelector('.chatting')
  let str = ''
  chattingArr.forEach(item => {
    str += `
    <div class="${item.flag}">
      <div class="content">
        ${item.content}
      </div>
      <div class="person-info">
        <img src="${item.imgSrc}" alt="">
        <div class="name">${item.name}</div>
        <div class="time">${item.time}</div>
      </div>
    </div>
    `
  })
  chatUl.innerHTML = str
  // 滚动条滚动到最底部, 保证最新的消息在最下面，且有动画效果
  // chatUl.scrollTop = chatUl.scrollHeight
  chatUl.scrollTo({
    top: chatUl.scrollHeight,
    behavior: 'smooth'
  })
}
// 提交消息的函数
function submitMeg () {
  console.log('提交消息')
  let value = input.value
  if (value.trim() === '') {
    return
  }
  let chatObj = {
    content: value,
    name: '月晕',
    time: '2021-05-01 12:00:00',
    flag: 'right',
    imgSrc: './yueyun.jpg'
  }
  chattingArr.push(chatObj)
  renderChatting()
  input.value = ''
}
// 监听键盘事件
function keydownEvent (e) {
  if (e.keyCode === 13) {
    e.preventDefault() // 阻止默认事件
    submitMeg()
  }
}
// 监听
input.addEventListener('keydown', keydownEvent)


renderChatting()
