input.onPinPressed(TouchPin.P1, function () {
	
})
basic.showString("Love meter")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showNumber(randint(0, 100))
    }
})
