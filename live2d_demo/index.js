console.log('live2d_demo');
// const MotionPriority = require('pixi-live2d-display')
const cubism4Model = "./character/model0.json";

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    resizeTo: window,
    backgroundColor: 0x000000,
    resolution: window.devicePixelRatio || 1,

  });
  const model4 = await PIXI.live2d.Live2DModel.from('./character/model.json');
  app.stage.addChild(model4);
  model4.scale.set(0.1);
  model4.on('hit', async (hitAreas) => {
    console.log(hitAreas)
    if (hitAreas.length == 1) {
      if (hitAreas[0] == '脑袋') {
        model4.motion('Tap摸头')
      } else if (hitAreas[0] == '身体') {
        model4.motion('Tap身体')
      } else if (hitAreas[0] == '辫子') {
        model4.motion('Tap摇头')
      } else {
        model4.motion('Idle')
      }
    } else {
      let random = Math.floor(Math.random() * hitAreas.length)
      let hitArea = hitAreas[random]
      console.log(hitArea)
      if (hitArea === '脑袋') {
        model4.motion('Tap摸头')
      } else if (hitArea === '身体') {
        model4.motion('Tap身体')
      }
    }
    // hitAreas.forEach((hitArea) => {
    //   console.log(hitArea)
    //   if (hitArea === '脑袋') {
    //     model4.motion('Tap摸头')
    //   } else if (hitArea === '身体') {
    //     model4.motion('Tap身体')
    //   } else if (hitArea === '辫子') {
    //     model4.motion('Tap摇头')
    //   } else {
    //     model4.motion('Idle')
    //   }
    // })

  })

})();
