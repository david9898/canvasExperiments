window.onload = function () {

    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    let radian = Math.PI / 180

    //draw circle
    contex.beginPath()
    contex.strokeStyle = 'red'
    contex.lineWidth   = 5
    contex.arc(50, 80, 30, 0 * radian, 360 * radian, false)
    contex.stroke()
}