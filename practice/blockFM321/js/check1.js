let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, { "0": "../img/off_lamp.png", "1": setActiveLampColor(i) },
            [0,].includes(i) ? "1" : 0, { "top": `${coordsLamps[i][0]}`, "left": `${coordsLamps[i][1]}`, "max-width": `${coordsLamps[i][2]}` }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, setTumblerKind(i),
            "1", { "top": `${coordsTumblers[i][0]}`, "left": `${coordsTumblers[i][1]}`, "max-width": `${coordsTumblers[i][2]}` }))
    }

    for (let i = 0; i < coordsButtons.length; i++) {
        this.buttons.set(`button${i}`, new Elem(`button${i}`, { "0": "../img/button.png" }, "0", { "top": `${coordsButtons[i][0]}`, "left": `${coordsButtons[i][1]}`, "max-width": `${coordsButtons[i][2]}` }))
    }

    for (let i = 0; i < coordsBlueButtons.length; i++) {
        this.buttons.set(`blue_button${i}`, new Elem(`blue_button${i}`, { "0": "img/blue_button.png" }, "0", { "top": `${coordsBlueButtons[i][0]}`, "left": `${coordsBlueButtons[i][1]}`, "max-width": `${coordsBlueButtons[i][2]}` }))
    }

    for (let i = 0; i < coordsArrows.length; i++) {
        this.arrows.set(`arrow${i}`, new Elem(`arrow${i}`, { "0": "img/arrow.png" }, "0", { "top": `${coordsArrows[i][0]}`, "left": `${coordsArrows[i][1]}`, "max-width": `${coordsArrows[i][2]}` }))
    }
    for (let i = 0; i < coordsAnvils.length; i++) {
        this.anvils.set(`anvil${i}`, new Anvil(`anvil${i}`, '../img/anvil.png', anvilState[i], "0",
            { "top": `${coordsAnvils[i][0]}`, "left": `${coordsAnvils[i][1]}`, "max-width": `${coordsAnvils[i][2]}` }))
    }

    for (let i = 0; i < coordsControlElems.length; i++) {
        this.controlElements.set(`controlElement${i}`, new ControlElem(`controlElement${i}`, {
            "top": `${coordsControlElems[i][0]}`, "left": `${coordsControlElems[i][1]}`, "width": `${coordsControlElems[i][2]}`,
            "height": `${coordsControlElems[i][3]}`,
        }))
    }
}



let mode = localStorage.getItem("mode");


if (mode === "learn") {
    let learnMassages = ["Тумблер РУЧН-АВТ – в положение АВТ",
        "Тумблер ИМИТ ПЧ – в положение ВЫКЛ"]


    let scrollParameter = 400

    let activeControlElements = new Array(12).fill(false)

    let main = new Main(activeControlElements, constructFunction)
    main.funcInvoke()


    let stepQueue = new StepQueue([6, 8])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
}
else {

    let activeControlElements = new Array(12).fill(true)

    let main = new Main(activeControlElements, constructFunction)
    main.funcInvoke()

    let stepQueue = new StepQueue([6, 8])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}