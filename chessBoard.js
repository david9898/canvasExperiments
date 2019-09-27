window.onload = function () {

    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    let whiteColor = '#ffd480'
    let darkColor  = '#993333'

    contex.strokeStyle = 'black'
    contex.strokeRect(10, 10, 160, 160)

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if ( (x + y) % 2 === 0 ) {
                contex.fillStyle = whiteColor
            }else {
                contex.fillStyle = darkColor
            }
            contex.fillRect(60 + x * 20, 10 + y * 20, 20, 20)
        }
    }

    // for (let i = 0; i < 8; i++) {
    //     if ( i % 2 === 0 ) {
    //         contex.fillStyle = whiteColor
    //     }else {
    //         contex.fillStyle = darkColor
    //     }
    //
    //     contex.fillRect(60 + i * 20, 10, 20, 20)
    //
    // }

    // contex.fillStyle = whiteColor
    // contex.fillRect(10, 10, 20, 20)
    //
    // contex.fillStyle = darkColor
    // contex.fillRect(30, 10, 20, 20)
}