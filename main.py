def on_forever():
    basic.show_number(innobit.read_humidity())
basic.forever(on_forever)
