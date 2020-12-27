function adjust_lights () {
    for (let index = 0; index <= number_of_lights_on_strip - 1; index++) {
        // player b logic -- show lights
        // 
        if (accumulator >= Player_B_min_light && index == accumulator) {
            lights[index] = neopixel.colors(NeoPixelColors.Blue)
        } else {
            lights[index] = neopixel.colors(NeoPixelColors.Black)
        }
        // player b logic -- show lights
        // 
        if (accumulator <= Player_A_max_light && index == accumulator) {
            lights[index] = neopixel.colors(NeoPixelColors.Green)
        } else {
        	
        }
    }
    for (let index = 0; index <= number_of_lights_on_strip - 1; index++) {
        strip.setPixelColor(index, lights[index])
    }
    strip.show()
}
function init_lights (num_lights: number) {
    lights = []
    for (let index = 0; index <= num_lights - 1; index++) {
        lights.push(neopixel.colors(NeoPixelColors.Black))
    }
    lights[14] = neopixel.colors(NeoPixelColors.Red)
    lights[15] = neopixel.colors(NeoPixelColors.Red)
    for (let index = 0; index <= num_lights - 1; index++) {
        strip.setPixelColor(index, lights[index])
    }
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    accumulator += -1
})
input.onButtonPressed(Button.B, function () {
    accumulator += 1
})
let lights: number[] = []
let accumulator = 0
let strip: neopixel.Strip = null
let Player_B_min_light = 0
let Player_A_max_light = 0
let number_of_lights_on_strip = 0
number_of_lights_on_strip = 30
let Player_A_min_light = 0
Player_A_max_light = 13
Player_A_min_light = 0
Player_B_min_light = 16
let Player_B_max_light = 29
strip = neopixel.create(DigitalPin.P0, number_of_lights_on_strip, NeoPixelMode.RGB)
strip.clear()
let old_accumulator = 15
accumulator = 15
init_lights(number_of_lights_on_strip)
basic.forever(function () {
    adjust_lights()
    // if they are not equal do stuff, otherwise just skip it
    // 
    if (accumulator != old_accumulator) {
    	
    }
    old_accumulator = accumulator
    serial.writeValue("accumulator", accumulator)
})
