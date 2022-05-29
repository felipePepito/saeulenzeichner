
let row = 0
for (let i = 0; i < 6; i++) {
    led.plot(row, i)
}

input.onButtonPressed(Button.A, () => {
    for (let i = 0; i < 6; i++) {
        led.unplot(row, i)
    }
    if (row > 0) {
        row--;
    }
    for(let i = 0; i < 6; i++) {
        led.plot(row, i)
    }
})

input.onButtonPressed(Button.B, () => {
    for (let i = 0; i < 6; i++) {
        led.unplot(row, i)
    }
    if (row < 4) {
        row++;
    }
    for (let i = 0; i < 6; i++) {
        led.plot(row, i)
    }
})