console.log('live2d_demo');
// const MotionPriority = require('pixi-live2d-display')
const cubism4Model = "./character/model0.json";

(async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas"),
    autoStart: true,
    transparent: true,
    resolution: window.devicePixelRatio || 1,
  });
  const model4 = await PIXI.live2d.Live2DModel.from('./character/model.json');
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  const body = document.querySelector('body')
  app.renderer.resize(window.innerWidth, body.clientHeight);
  app.stage.addChild(model4);
  app.stage.width = 200
  app.stage.height = 200
  model4.scale.set(1);
  console.log(111)
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

  })
  draggable(model4)
})();

function draggable(model) {
  model.buttonMode = true;
  model.on("pointerdown", (e) => {
    console.log(e)
    model.dragging = true;
    model._pointerX = e.data.global.x - model.x;
    model._pointerY = e.data.global.y - model.y;
  });
  model.on("pointermove", (e) => {
    if (model.dragging) {
      model.position.x = e.data.global.x - model._pointerX;
      model.position.y = e.data.global.y - model._pointerY;
    }
  });
  model.on("pointerupoutside", () => (model.dragging = false));
  model.on("pointerup", () => (model.dragging = false));
}