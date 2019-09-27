window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.strokeStyle = 'red'
    contex.lineWidth = 2
    contex.lineJoin = 'round'
    contex.fillStyle = 'green'
    contex.rect(100, 10, 150, 100)
    contex.stroke()
    contex.fill()

    //second rect
    contex.fillStyle = 'red'
    contex.fillRect(5, 10, 50 , 50)

    //third rect
    contex.lineWidth = 3
    contex.strokeStyle = 'red'
    contex.fillStyle = 'green'
    contex.lineJoin = 'round'
    contex.strokeRect(5, 70, 50, 50)
}