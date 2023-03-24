let canvas = Mango();
let mng = canvas;
let mango = canvas;
let cnv = canvas.setCanvas(document.getElementById('c'));
let ctx = cnv.ctx;
let elem = cnv.elem;
let entity = canvas.entity;
let entityGroup = canvas.entityGroup;
let layer = canvas.Layer;

let winW = 0,
  winH = 0;

let tile = document.getElementById('grass')
let ratio = {
  x: 83 - 43,
  y: 55 - 65
}

let loaded = false
let loadedNum1 = false
let loadedNum2 = false

function getWH(url, callback) {
  let img = new Image()
  img.src = url
  img.style.display = 'none'
  img.onload = function() {
    callback({ w: img.width, h: img.height })
  }
}

function getLayer(name){
  var ret
  canvas.layerStore.forEach(function (v, i){
    if (v.name == name) {
      ret = v
    }
  })
  return ret;
}


function useTile(url, x, y, w, h, w1, h1) {
  let c = document.createElement('canvas')
  let ctux = c.getContext('2d')
  c.width = w1
  c.height = h1
  c.id = 'kk'
  document.body.appendChild(c)

  let img = new Image()
  img.src = url
  img.onload = function() {
    ctux.drawImage(img, x, y, w, h, 0, 0, w1, h1)
    //ctux.fill()

    img.src = c.toDataURL('image/png')
    let pt = ctux.createPattern(img, 'repeat')
    gg.data.fill = pt
  }
}

window.onload = function() {
  const bgLayer = new layer('bg')
  canvas.setLayer(bgLayer)
  let grass = ctx.createPattern(tile, 'repeat')

  tiles = new entity({
    width: 500000,
    height: 500000,
    fill: grass,
    x: -250000,
    y: -250000,
  })

  const mainLayer = new layer('main')
  canvas.setLayer(mainLayer)

  loadScriptFile('scripts/asset.js')

  canvas.fillScreen()
  canvas.repeatRender()


  loaded = true
}

function loadScriptFile(url) {
  var script = document.createElement('script');
  script.src = url
  script.id = 'u'

  /*fetch(url).then(function(e){
    e.text().then(function(t){
      eval(t);
    })
  })*/

  document.body.appendChild(script)

  window.onload = function() {
    assetToLoad.push(true)
  }
}


setInterval(function() {
  var store = canvas.layerStore[1].entities;

  store.sort((a, b) => {
    return a.dx - b.dx;
  });

  store.sort((a, b) => {
    return a.dy - b.dy;
  });
  
}, 100)

function fullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    /* Safari */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE11 */
    element.msRequestFullscreen();
  }

  window.screen.orientation.lock("landscape").then(function() {
    console.log('done');
  }).catch(function(error) {
    console.warn(error)
  });
}

loadedNum2 = true


/*window.onclick = function() {
  document.getElementById('music').play()
}*/


window.addEventListener('orientationchange', function() {
  canvas.fillScreen()
  //canvas.setWidth(window.innerWidth,  window.innerHeight)
})

window.addEventListener('resize', function() {
  canvas.fillScreen()
})

function setLoopRenderPixel(handler, time) {
  setInterval(function() {
    handler(winW, winH)
  }, time == undefined ? 1 : time)
}


setInterval(function() {
  winH = elem.height;
  winW = elem.width;

})

