window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    contex.fillStyle = 'red'
    contex.fillRect(10, 10, 50, 50)
    contex.save()

    contex.fillStyle = 'blue'
    contex.fillRect(70, 10, 50, 50)
    contex.save()

    contex.fillStyle = 'green'
    contex.fillRect(130, 10, 50, 50)
    contex.save()

    contex.fillRect(10, 70, 50, 50)
    contex.restore()

    contex.fillRect(70, 70, 50, 50)
    contex.restore()

    contex.fillRect(130, 70, 50, 50)
    contex.restore()

}