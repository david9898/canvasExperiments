window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    let image = new Image();
    image.src = 'img.jpeg'

    contex.drawImage(image, 100, 100)
}