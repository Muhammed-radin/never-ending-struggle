var GRAPHCODE = '4f5t6ye7'
var model = document.querySelector('.model')
var userName = document.getElementById('userName')
var graph = document.querySelector('#graphcode')

if (localStorage.getItem('graph')) {
  model.style.display = 'none'
  document.querySelector('.block-div').style.display = 'none'
}

document.getElementById('button').onclick = function() {
  if (graph.value) {
    if (userName.value) {
      if (graph.value == GRAPHCODE) {
        model.style.display = 'none'
        document.querySelector('.block-div').style.display = 'none'

        localStorage.setItem('graph', true)
        window.location.reload()
      } else {
        alert('ERROR: graphcode is wrong, retry it')
      }
    }
  }
}

