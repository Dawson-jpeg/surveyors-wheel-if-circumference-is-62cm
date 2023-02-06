input.onButtonPressed(Button.A, function () {
    basic.showNumber(Counter * 0.62)
    basic.showLeds(`
        . . . . .
        # # . # #
        # . # . #
        # . . . #
        . . . . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    Counter += 0.5
})
input.onGesture(Gesture.LogoDown, function () {
    Counter = 0.5
})
let Counter = 0
Counter = 0
