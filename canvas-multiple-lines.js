window.onload = function () {
    let canvas =  document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    //draw lines
    contex.beginPath()
    contex.fillStyle = 'red'
    contex.lineWidth = 10
    contex.moveTo(30, 30)
    contex.lineTo(80, 80)
    contex.lineTo(130, 30)
    contex.lineTo(180, 80)
    contex.lineTo(230, 30)
    contex.stroke()

}