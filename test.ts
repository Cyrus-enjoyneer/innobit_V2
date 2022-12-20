// 在這裡測試；當此封包作為擴充功能時，將不會編譯此內容。
/* Press A to switch mode
    In each mode, press button B to test the function
*/
input.onButtonPressed(Button.A, function () {
    _mode += 1
})

let _mode:number = 0

basic.forever(function () {
    if (_mode == 0) {
        // the motor connected to M1 switch on for 1 second
        if (input.buttonIsPressed(Button.B)) {
            innobit.motor_M1(255)
            basic.pause(1000)
            innobit.motor_M1(0)
        }
    } else if (_mode == 1) {
        // the humidity is shown on the microbit, and then the temperature
        if (input.buttonIsPressed(Button.B)) {
            basic.showNumber(innobit.readHumidity())
            basic.pause(1000)
            basic.showNumber(innobit.readTemperature())
        }
    } else if (_mode == 2) {
        // the LED connected to the output port turn on
        if (input.buttonIsPressed(Button.B)) {
            innobit.LED_setPixelColor3(innobit.colors(NeoPixelColors.Red), innobit.colors(NeoPixelColors.Yellow), innobit.colors(NeoPixelColors.Green))
        }
    } else if (_mode == 3) {
        // the servo connected to the outpur switch to 90 degrees for 1 second, and then switch back to 0 degrees
        if (input.buttonIsPressed(Button.B)) {
            innobit.createServo(90)
            basic.pause(1000)
            innobit.createServo(0)
        }
    } else if (_mode == 4) {
        // either 0 or 1 is shown on the microbit
        // 0 means no animal or people detected
        // 1 means someone or an animal pass through the PIR sensor
        if (input.buttonIsPressed(Button.B)) {
            basic.showNumber(innobit.PIRvalue())
            basic.pause(1000)
        }
    } else if (_mode == 5) {
        // the electric fan connected to M1 switch on for 1 second
        if (input.buttonIsPressed(Button.B)) {
            innobit.fan_M1(100)
            basic.pause(1000)
            innobit.fan_M1(0)
        }
    } else if (_mode == 6) {
        // the distance in CM between the sonar sensor and the nearest object is shown on the microbit, and then the the distance in Inch
        if (input.buttonIsPressed(Button.B)) {
            basic.showNumber(innobit.distanceInch())
            basic.pause(1000)
            basic.showNumber(innobit.distanceCM())
        }
    }
})