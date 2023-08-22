gsap.registerPlugin('Draggable')
const rotatingOutput = document.querySelector('h1 span')
gsap.set('#dial', {transformOrigin: '50% 50%'})

Draggable.create('.myImage, #dial', {
type: 'rotation',
onDrag:function() {
    rotatingOutput.textContent = gsap.utils.wrap(0, 360, this.rotation)
}
})