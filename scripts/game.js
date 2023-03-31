let loadTimer = setInterval(function() {
    if (loaded == true) {

      canvas.setLayer(getLayer('main'))

      setAssetToEntity(new entity({
        dx: 90,
        dy: 90,
        dWidth: 100,
        dHeight: 100
      }), campHouseAsset)

      setAssetToEntity(new entity({
        dx: 90,
        dy: 50,
        dWidth: 100,
        dHeight: 100
      }), treeBatchAsset)

      setAssetToEntity(new entity({
        dx: 150,
        dy: 220,
        dWidth: 100,
        dHeight: 100
      }), trainHouseAsset)

      setAssetToEntity(new entity({
        dx: 90 + 50,
        dy: 70,
        dWidth: 100,
        dHeight: 100
      }), treeBatchAsset)

      let trainHouse = new GameAsset(new entity({ dx: 250, dy: 300 }), trainHouseAsset, { wall: 0 })
      let vx = 50,
        vy = 50,
        vx1 = 80,
        vy1 = 80
      yA = [0, 240, 240 * 2, 240 * 3],
        xA = [0, 256, 256 * 2, 256 * 3]

      var anim = new entity({
        type: 'image',
        imageURl: 'images/asset/20230319_082604.png',
        x: (1280/3)*1,
        y: 0,
        dx: 90,
        dy: 90,
        width: 500,
        height: 500,
        dWidth: 200,
        dHeight: 200
      })

      vV = 568

      /*setInterval(function() {

        if (anim.data.x > vV * 23) {
          anim.data.x = 0
        }
        anim.data.x += vV
      }, 100)*/

      /*var B = canvas.app.HTML.input('range', 60, 60),
        BR = canvas.app.HTML.input('range', 60, 90),
        C = canvas.app.HTML.input('range', 60, 120),
        G = canvas.app.HTML.input('range', 60, 150),
        S = canvas.app.HTML.input('range', 60, 180),
        H = canvas.app.HTML.input('range', 60, 210),
        T = document.getElementById('p')

      T.onclick = function() {
        var inp = document.createElement('input')
        inp.value = T.innerHTML
        inp.select()
        inp.setSelectionRange(0, 999999)

        inp.select();
        inp.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(inp.value).then(() => { alert("successfully copied"); }).catch(() => { alert("something went wrong"); });
      }

      B.max = BR.max = C.max = S.max = H.max = G.max = 360
      B.value = BR.value = C.value = H.value = S.value = G.value = 10

      setInterval(function() {
        trainHouse.entity.filter = `brightness(${BR.value / 100}) blur(${B.value / 10}px) contrast(${C.value / 100}) hue-rotate(${H.value}deg) grayscale(${G.value / 100}) sepia(${S.value / 100})`
        T.innerHTML = trainHouse.entity.filter

        GameDataManagement.storeGameAsset.forEach((v, i) => {
          v.entity.filter = trainHouse.entity.filter
        })
      }, 100)*/

      //setInterval(function() {
      //new GameAsset(new entity({ dx: vx -= canvas.app.randomNumberOnly(-40, 40),dy: vy -= canvas.app.randomNumberOnly(-40, 40)}), new ClassicAsset('images/asset/set7.png', 'iigt', xA[Math.floor(Math.random() * 4)], yA[Math.floor(Math.random() * 4)], 250, 250), { wall: 0 })
      new GameAsset(new entity({ dx: vx -= canvas.app.randomNumberOnly(-10, 10), dWidth: 20, dHeight: 20, dy: vy -= canvas.app.randomNumberOnly(-10, 10), filter: 'hue-rotate(5deg)', opacity: 0.5 }), /* new ClassicAsset('images/images__7_-removebg-preview.png', 'ii36gt', 0, 200, 250, 250)*/ treeBatchAsset, { animate: 'smoke' })
      /* new GameAsset(new entity({ dx: vx -= canvas.app.randomNumberOnly(-40, 40), dy: vy -= canvas.app.randomNumberOnly(-40, 40), filter: 'hue-rotate(200deg)' }), new ClassicAsset('images/ue4-forest-foliage-3d-model-2066049885-removebg-preview.png', 'ii3gt', 0, 0, 500, 500), { animate: 'smoke' })
       new GameAsset(new entity({ dx: vx -= canvas.app.randomNumberOnly(-40, 40), dy: vy -= canvas.app.randomNumberOnly(-40, 40), filter: 'hue-rotate(200deg)' }), new ClassicAsset('images/ue4-forest-foliage-3d-model-2066049885-removebg-preview.png', 'ii3gt', 0, 0, 500, 500), { animate: 'smoke' })
       new GameAsset(new entity({ dx: vx -= canvas.app.randomNumberOnly(-40, 40), dy: vy -= canvas.app.randomNumberOnly(-40, 40), filter: 'hue-rotate(200deg)' }), new ClassicAsset('images/ue4-forest-foliage-3d-model-2066049885-removebg-preview.png', 'ii3gt', 0, 0, 500, 500), { animate: 'smoke' })*/
      // GameDataManagement.storeGameAsset.forEach((v, i) => {

      //v.entity.opacity = 0.35
      // v.entity.filter = 'blur(3px)'
      //})
      //new GameAsset(new entity({ dx: vx -= canvas.app.randomNumberOnly(-40, 40), dy: vy -= canvas.app.randomNumberOnly(-40, 40) }), coneTreeBatchAsset, { wall: 0 })
      // new GameAsset(new entity({ dx: vx1 -= canvas.app.randomNumberOnly(-40, 40), dy: vy1 -= canvas.app.randomNumberOnly(-40, 40) }), coneTreeBatchAsset, { wall: 0 })
      // }, 100)
      //}

      /*function move(e) {
        e = e.changedTouches[0]
        tt = new GameAsset(new entity({ dx: e.clientX, dWidth: 20, dHeight: 20, dy: e.clientY, filter: 'hue-rotate(5deg)', opacity: 1 }), /* new ClassicAsset('images/images__7_-removebg-preview.png', 'ii36gt', 0, 200, 250, 250)*/
      /* treeBatchAsset, { animate: 'smoke' })
            }

            elem.addEventListener('touchstart', function(e) {
              elem.addEventListener('touchmove', move)
            })

            elem.addEventListener('touchend', function(e) {
              elem.removeEventListener('touchmove', move)
            })*/

      /*getWH('images/spritesheet (2).png', function() {
    dr = new entity({
      type: 'image',
      x: 0,
      dx: 50,
      dy: 350,
      y: 0,
      width: 708,
      height: 946,
      imageURl: 'images/spritesheet (2).png'
    })
  })
  
 setInterval(function (){
    dr.data.x += 708
    if (dr.data.x > (708 * 50)){
      dr.data.x = 0
    }
  }, 100)*/
      clearInterval(loadTimer)
    }
  },
  100)