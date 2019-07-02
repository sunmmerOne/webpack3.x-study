// import hello from 'components/hello'

function show(content) {
  // hello()
  window.document.querySelector('#app').innerText = 'Hello,' + content  
  const p = document.createElement('p')
  p.id = 'p1'
  p.innerText = '我是生成的p标签'
  console.log(p,111)
  window.document.querySelector('#app').appendChild(p)
}

module.exports = show