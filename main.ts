let row = 0
let colunm = 0
basic.forever(function () {
    for (let colunm = 0; colunm <= 4; colunm++) {
        for (let row = 0; row <= 4; row++) {
            led.plot(colunm, row)
        }
        basic.pause(100)
        basic.clearScreen()
    }
})
