window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.fillStyle = 'red'
    contex.fillRect(10, 10, 50, 50)

    contex.fillStyle = 'blue'
    contex.fillRect(70, 10, 50, 50)

    contex.fillStyle = 'green'
    contex.fillRect(130, 10, 50, 50)

    let data = canvas.toDataURL()
}