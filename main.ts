let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() <= 20.7) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (input.lightLevel() >= 31.234543456) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (input.lightLevel() > 20.7 && input.lightLevel() < 31.234543456) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
