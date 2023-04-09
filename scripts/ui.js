var timer = setInterval(function() {
  if (loaded && localStorage.getItem('graph')) {
    canvas.layerStore[0].disable()

    ///////////////////
    // public mode   //
    ///////////////////

    /*
    elem.style.display = 'none'

    var pTag = document.createElement('p')
    pTag.className = 'subtitle'
    pTag.innerHTML = 'press to continue'
    document.body.appendChild(pTag)


    var videoPlayer = document.createElement('video');
    var videoSource = document.createElement('source');
    videoPlayer.appendChild(videoSource)
    videoSource.src = 'video/radinpresents.mp4'
    videoPlayer.style.width = '100%'
    videoPlayer.muted = false;

    videoPlayer.style.display = 'none'

    window.onclick = function() {
      videoPlayer.style.display = 'block'
      videoPlayer.poster = 'images/output.jpg'
      videoPlayer.play()
      fullScreen(document.querySelector('html'))
      pTag.remove()
    }

    var videoTimeStamp = setInterval(function() {
      if (videoPlayer.currentTime == videoPlayer.duration) {
        videoPlayer.remove()
        startUi()
        window.onclick = function() {
          fullScreen(document.querySelector('html'))
        }
        clearInterval(videoTimeStamp)
      }
    })

    document.body.appendChild(videoPlayer)
*/
    /////////////

    ////////////////////////
    // development mode   //
    ////////////////////////
    startUi()
    window.onclick = function() {
      fullScreen(document.querySelector('html'))
    }
    //////////////////////

    function startUi() {
      elem.style.display = 'block'

      uiLayer = new layer('ui')
      canvas.setLayer(uiLayer)

      blackBoxDepth = 50

      var blackbox = new entity({
        width: winW,
        height: winH,
      })

      var thumb = new entity({
        type: 'image',
        dWidth: winW - blackBoxDepth,
        dHeight: winH - blackBoxDepth,
        x: blackBoxDepth / 2,
        y: blackBoxDepth / 2,
        width: 576,
        height: 384,
        imageSizeAuto: true,
        filter: 'brightness(1.58) blur(3px) contrast(1.17) hue-rotate(3deg) grayscale(0) sepia(0)',
        imageURl: 'images/thumbnail/eX8EGk0ubMSyammflO25--3--fn1xe.jpg'
      })

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

      B.max = BR.max = C.max = S.max = H.max = G.max = 200
      B.value = BR.value = C.value = H.value = S.value = G.value = 10

      setInterval(function() {
        thumb.data.filter = `brightness(${BR.value / 100}) blur(${B.value / 10}px) contrast(${C.value / 100}) hue-rotate(${H.value}deg) grayscale(${G.value / 100}) sepia(${S.value / 100})`
        T.innerHTML = thumb.data.filter
      }, 500)*/

      var loadBg = new entity({
        fill: '#78A233',
        width: 200,
        height: 14,
        type: 'roundRect',
        arcLevel: 5,
        stroke: '#B7E867',
        strokeWidth: 5
      })

      var loader = new entity({
        fill: '#6CC144',
        width: 10,
        height: 13,
        type: 'roundRect',
        arcLevel: 5,
        stroke: '#B7E867',
        strokeWidth: 0
      })

      var loadTxt = new entity({
        type: 'text',
        text: 'loading(25%)',
        fill: '#fff',
        x: loadBg.data.x,
        y: loadBg.data.y + 20,
        font: 'game',
        fontSize: 15
      })

      loadPromise.then(function() {
        var prec = 0
        var timeToLoad = setInterval(function() {
            function progressIt(value) {
              prec += value
              console.log(value);
              loader.data.width = prec
              loadTxt.data.text = 'loading(' + prec / 2 + '%)'
              if (prec >= 200) {
                clearInterval(timeToLoad)
                setTimeout(function() {
                  startHomeUi()
                }, 1000)
              }
            }

            if (assetToLoad.length == 0) {
              progressIt(4)
            } else {
              var precTxt = ''
              assetToLoad.forEach(function(v, i) {
                precTxt += (v + (i == (assetToLoad.length - 1) ? '' : '&&'))
              })

              progressIt(200 / assetToLoad.length)
            }
          },
          100)
      })

      setLoopRenderPixel((w, h) => {
        thumb.data.width = w - blackBoxDepth;
        thumb.data.height = h - blackBoxDepth;
        blackbox.data.width = w;
        blackbox.data.height = h;
        loadBg.data.x = (w / 2) - (loadBg.data.width / 2)
        loadBg.data.y = h - 70
        loader.data.x = loadBg.data.x
        loader.data.y = loadBg.data.y + 0.5
        loadTxt.data.textData.width == undefined ? null : loadTxt.data.x = (w / 2) - (loadTxt.data.textData.width / 2)
        loadTxt.data.y = loadBg.data.y + 35
      })
      ///€€&=_&^^_€


      function startHomeUi() {
        uiLayer.entities.forEach((v) => {
          v.render = false
        })


        canvas.layerStore[0].enable()
        console.log(canvas.layerStore);
        loadScriptFile('scripts/game.js')
        getLayer('main').enable()

        var color = ctx.createLinearGradient(30, 0, 30, 150)
        //color.addColorStop(0, 'red')
        color.addColorStop(0.5, '#B7E867')
        color.addColorStop(0.51, '#6CC144')
        color.addColorStop(1, '#78A233')

        var color2 = ctx.createLinearGradient(30, 0, 30, 150)
        //color.addColorStop(0, 'red')
        color2.addColorStop(0.5, '#6CC144')
        color2.addColorStop(0.51, '#B7E867')
        color2.addColorStop(1, '#78A233')


        var bg = new entity({
          type: 'roundRect',
          arcLevel: 2.3,
          width: 70,
          height: 70,
          shadow: 0,
          shadowX: -1,
          shadowY: -1,
          shadowColor: '#6CC144',
          fill: color,
          x: winW - 100,
          y: winH - 100,
          stroke: '#B7E867',
          strokeWidth: 6,
        })

        var bg1 = new entity({
          type: 'image',
          imageURl: 'images/ui/sketch1680499156335.png',
          dx: winW - 100,
          dy: winH - 100,
          width: 510,
          height: 510,
          dWidth: 70,
          dHeight: 70,
          opacity: 0.5
        })


        bg.data.on('click', function() {

          bg.data.fill = color2 = '#6CC144'
          setTimeout(function() {
            bg.data.fill = color = '#78A233'
          }, 100)
        })



        var ref = new entity({
          type: 'image',
          translate: {
            x: bg.data.x + (bg.data.width / 2) - 65,
            y: bg.data.y + (bg.data.height / 2) - 53.84
          },
          dWidth: 140,
          dHeight: 107.6,
          width: 577,
          height: 433,
          //opacity: 1,
          //scale: new canvas.app.Vec2(2, 1),
          path: 'M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812',
          //path: 'M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z',
          strokeWidth: 2.5,
          stroke: '#fff',
          fill: '#fff',
          imageURl: 'images/asset/image_processing20210608-6036-1ppqx29-removebg-preview.png'
        })


        setLoopRenderPixel(function() {
          bg.data.x = bg1.data.dx = winW - 100
          bg.data.y = bg1.data.dy = winH - 100
          ref.data.translate = {
            x: bg.data.x + (bg.data.width / 2) - 65,
            y: bg.data.y + (bg.data.height / 2) - 53.84
          }
        })


        /*var text = new entity({
          type: 'text',
          text: 'settings',
          x: bg.data.x + 13,
          y: bg.data.y + bg.data.height - 5,
          font: 'game',
          fill: '#fff',
          fontSize: 12,
        })*/


        //// shop
        var shopBtn = new entity({
          type: 'roundRect',
          arcLevel: 2.3,
          width: 35,
          height: 35,
          shadow: 0,
          shadowX: -1,
          shadowY: -1,
          shadowColor: '#6CC144',
          fill: color,
          x: bg.data.x + 35,
          y: bg.data.y - 50,
          stroke: '#B7E867',
          strokeWidth: 6,
        })


        shopBtn.data.on('click', function() {

          shopBtn.data.fill = color2 = '#6CC144'
          setTimeout(function() {
            shopBtn.data.fill = color = '#78A233'
          }, 100)
        })

        var shopBtnIcon = new entity({
          type: 'path',
          translate: {
            x: shopBtn.data.x + (shopBtn.data.width / 2) - 20,
            y: shopBtn.data.y + (shopBtn.data.height / 2) - 23
          },
          dWidth: 70,
          dHeight: 30,
          width: 50,
          height: 50,
          //opacity: 1,
          scale: new canvas.app.Vec2(1, 1),
          path: 'M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812',
          //path: 'M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z',
          strokeWidth: 2.5,
          stroke: '#fff',
          fill: '#fff',
          imageURl: 'images/gui-icons.png'
        })


      }
      //%€&
    }


    clearTimeout(timer)
  }
})

var plug

function textButton(text) {
  var bg = new entity({
    type: 'roundRect',
    arcLevel: 2.3,
    width: 70,
    height: 30,
    shadow: 0,
    shadowX: -1,
    shadowY: -1,
    shadowColor: '#4DB81B',
    fill: colo,
    x: 40,
    y: 40,
    stroke: '#6CDA39',
    strokeWidth: 6,
  })

  var ref = new entity({
    type: 'image',
    dx: 40,
    dy: 40,
    dWidth: 70,
    dHeight: 30,
    width: 50,
    height: 50,
    opacity: 0.27,
    imageURl: 'images/gui-icons.png'
  })


  var text = new entity({
    type: 'text',
    text: text,
    x: bg.data.x + 18,
    y: bg.data.y + 20,
    font: 'game',
    fill: '#fff',
    fontSize: 18,
  })
}