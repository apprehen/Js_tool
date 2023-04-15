import axios from "axios"
import md5 from "js-md5"
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
async function baiduTra(text) {
  const q = text
  const from = "auto"
  const to = "jp"
  const appid = "xxxxxxx"
  const salt = (new Date).getTime()
  const key = "xxxxxxx"
  const str1 = appid + q + salt + key
  const sign = md5(str1)
  try {
    let res = await axios.get('https://fanyi-api.baidu.com/api/trans/vip/translate', {
      params: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      }
    })
    console.log(res.data.trans_result[0].dst)
    return res.data.trans_result[0].dst
  } catch (err) {
    console.log(err)
  }
}

async function ToVoice(text) {
  let trantext = await baiduTra(text)
  let data = JSON.stringify({
    "fn_index": 0,
    "data": [
      trantext,
      "specialweek",
      "日本語",
      1
    ],
    "session_hash": "123"
  });
  let config = {
    method: 'post',
    url: 'http://127.0.0.1:7860/run/predict/',
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Host': '127.0.0.1:7860',
      'Connection': 'keep-alive'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      console.log(response.data.data[1].name);
    })
    .catch(function (error) {
      console.log(error);
    });
}

; (async () => {
  await ToVoice("今天天气真好呢，训练员一起去散步把")
}
)()
