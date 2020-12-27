def on_button_pressed_a():
    range2.shift(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    range2.shift(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

range2: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
range2 = strip.range(0, 30)
range2.show_color(neopixel.colors(NeoPixelColors.RED))

def on_forever():
    pass
basic.forever(on_forever)
