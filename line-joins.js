window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.beginPath()
    contex.lineWidth = 3
    contex.strokeStyle = 'red'
    contex.lineJoin = 'bevel'
    contex.moveTo(30, 10)
    contex.lineTo(80, 10)
    contex.lineTo(80, 60)
    contex.lineTo(30, 60)
    contex.lineTo(30, 110)
    contex.stroke()

    contex.beginPath()
    contex.lineWidth = 3
    contex.strokeStyle = 'green'
    contex.lineJoin = 'round'
    contex.moveTo(60, 40)
    contex.lineTo(110, 40)
    contex.lineTo(110, 90)
    contex.lineTo(60, 90)
    contex.lineTo(60, 140)
    contex.stroke()

    contex.beginPath()
    contex.lineWidth = 3
    contex.strokeStyle = 'blue'
    contex.moveTo(90, 70)
    contex.lineTo(140, 70)
    contex.lineTo(140, 120)
    contex.lineTo(90, 120)
    contex.lineTo(90, 170)
    contex.stroke()
}