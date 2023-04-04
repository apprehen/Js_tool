function imgToBase(imgUrl, callback) {
  fetch(imgUrl)
    .then(res => res.blob())
    .then(blob => {
      let reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = function () {
        let base64data = reader.result
        callback(base64data)
      }
    })
}

console.image = (url, width, height) => {
  const style = [
    `padding: ${height}px ${width}px;`,
    `background: url(${url})  center center no-repeat;`,
    'background-size: contain;'
  ].join('')
  imgToBase(url, base64data => {
    console.log('%c ', style)
  })
}

