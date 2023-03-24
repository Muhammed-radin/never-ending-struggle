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
      //}

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