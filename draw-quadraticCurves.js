window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.beginPath()
    contex.strokeStyle = 'red'
    contex.lineWidth = 2
    contex.moveTo(50, 100)
    contex.quadraticCurveTo(100, 100, 40, 80)
    contex.stroke()

}