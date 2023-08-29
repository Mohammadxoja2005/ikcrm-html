const activeList = document.querySelector('#activeList23')
const activeSvg = document.querySelector('#activeSvg')
const activePath = document.querySelector('#activePath')

if (activeList.className == 'list active') {
    activePath.attributes.fill.nodeValue = 'black'
}