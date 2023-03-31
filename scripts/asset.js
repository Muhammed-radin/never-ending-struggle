class ClassicAsset {
  constructor(url, name, x, y, w, h) {
    this.name = name
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.url = url

    GameDataManagement.storeClassicAsset.push(this)
  }
}

class GameAsset {
  constructor(entity, asset, data) {
    this.entity = entity.data ? entity = entity.data : entity
    this.asset = asset
    this.x = this.entity.dx
    this.y = this.entity.dy
    this.width = this.entity.dWidth
    this.height = this.entity.dHeight
    this.data = data
    if (data instanceof Object) {
      var key = Object.keys(data)
      var value = Object.values(data)
      var self = this
      key.forEach(function(v, i) {
        self[v] = value[i]
      })
    }

    this.entity = setAssetToEntity(entity, asset)
    GameDataManagement.storeGameAsset.push(this)
  }
  name = ''
  x = 0
  y = 0
  w = 0
  h = 0
  entity = new canvas._newDataModule()
  asset = null
  collider = null
}

class GameBase {
  constructor() {
    GameDataManagement.storeGameBase.push(this)
  }
  x = 0
  y = 0
  base = []
}

class GameData {
  constructor() {
    this.data = new Date()
  }
  data = []
}

let GameDataManagement = {
  Data: new GameData(),
  storeClassicAsset: [],
  storeGameAsset: [],
  storeGameBase: [],
}

GameDataManagement.storeGameBase.push(GameDataManagement.storeGameAsset)

function setAssetToEntity(entity, asset) {
  entity.data ? entity = entity.data : null;
  entity.x = asset.x
  entity.type = 'image'
  entity.y = asset.y
  entity.width = asset.w
  entity.height = asset.h
  entity.imageURl = asset.url

  return entity
}

let trainHouseAsset = new ClassicAsset('images/asset/set1.png', 'trainHouse', 0, 0, 250, 250)
let campHouseAsset = new ClassicAsset('images/asset/set1.png', 'campHouse', 250, 0, 250, 250)
let treeBatchAsset = new ClassicAsset('images/asset/set1.png', 'treeBatch', 250, 730, 250, 250)
let coneTreeBatchAsset = new ClassicAsset('images/asset/set4.png', 'coneTreeBatch', 0, 250, 250, 250)


let allClassicAssets = [treeBatchAsset, trainHouseAsset, campHouseAsset, coneTreeBatchAsset]