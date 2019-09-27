window.onload = function () {

    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.beginPath()
    contex.strokeStyle = 'blue'
    contex.lineWidth   = 4
    contex.lineCap     = 'butt'
    contex.moveTo(50, 20)
    contex.lineTo(150, 20)
    contex.stroke()

    contex.beginPath()
    contex.strokeStyle = 'red'
    contex.lineWidth   = 4
    contex.lineCap     = 'round'
    contex.moveTo(50, 40)
    contex.lineTo(150, 40)
    contex.stroke()

    contex.beginPath()
    contex.strokeStyle = 'green'
    contex.lineWidth   = 4
    contex.lineCap     = 'square'
    contex.moveTo(50, 60)
    contex.lineTo(150, 60)
    contex.stroke()
}