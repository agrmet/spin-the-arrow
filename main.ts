input.onButtonPressed(Button.A, function () {
    stepdirection(true)
})
function spinclockwise (steps: number) {
    for (let index = 0; index < steps; index++) {
        stepdirectionclockwise()
    }
}
function spin (steps: number, clockwise: boolean) {
    for (let index = 0; index < steps; index++) {
        if (clockwise) {
            spinclockwise(1)
        } else {
            spincounterclockwise(1)
        }
    }
}
function stepdirectionclockwise () {
    if (direction < 7) {
        direction += 1
    } else {
        direction = 0
    }
}
input.onButtonPressed(Button.AB, function () {
    spin(randint(1, 5), false)
})
input.onButtonPressed(Button.B, function () {
    stepdirection(false)
})
input.onGesture(Gesture.Shake, function () {
    spin(randint(1, 5), true)
})
function spincounterclockwise (steps: number) {
    stepdirectioncounterclockwise()
}
function stepdirectioncounterclockwise () {
    if (direction > 0) {
        direction += -1
    } else {
        direction = 7
    }
}
function stepdirection (clockwise: boolean) {
    if (clockwise) {
        stepdirectionclockwise()
    } else {
        stepdirectioncounterclockwise()
    }
}
let direction = 0
direction = 0
basic.forever(function () {
    basic.showArrow(direction)
})
