window.onload = function () {
    let canvas = document.getElementById('canvas')
    let contex = canvas.getContext('2d')

    // canvas.addEventListener('mousedown', function (event) {
    //     console.log('mouseDown')
    //     console.log(event)
    // })
    //
    // canvas.addEventListener('mouseup', function (event) {
    //     console.log('mouseUp')
    //     console.log(event)
    // })
    //
    // canvas.addEventListener('mousemove', function (event) {
    //     console.log('mousemove')
    // })

    canvas.addEventListener('click', function (event) {
        console.log('click')
    })

    canvas.addEventListener('dblclick', function (event) {
        console.log('dbclick')
    })

}