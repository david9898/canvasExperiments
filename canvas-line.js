window.onload = function () {

    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.beginPath()
    contex.strokeStyle = 'red'
    contex.lineWidth   = '2'
    contex.moveTo(50, 70)
    contex.lineTo(130, 70)
    contex.stroke()
}