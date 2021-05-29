input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (勇士.Rocker(勇士.enRocker.Up)) {
        radio.sendNumber(1)
        basic.showArrow(ArrowNames.North)
    }
    if (勇士.Rocker(勇士.enRocker.Down)) {
        radio.sendNumber(2)
        basic.showArrow(ArrowNames.South)
    }
    if (勇士.Rocker(勇士.enRocker.Left)) {
        radio.sendNumber(3)
        basic.showArrow(ArrowNames.West)
    }
    if (勇士.Rocker(勇士.enRocker.Right)) {
        radio.sendNumber(4)
        basic.showArrow(ArrowNames.East)
    }
    if (勇士.Rocker(勇士.enRocker.Nostate)) {
        radio.sendNumber(5)
        basic.showIcon(IconNames.SmallDiamond)
    }
    if (勇士.Rocker(勇士.enRocker.Press)) {
        radio.sendNumber(6)
    }
})
