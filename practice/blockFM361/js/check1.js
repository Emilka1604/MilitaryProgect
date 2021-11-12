
let constructFunction = function () {
    for (let i = 0; i < coordsLamps.length; i++) {
        this.lamps.set(`lamp${i}`, new Elem(`lamp${i}`, { "0": "../img/off_lamp.png", "1": setActiveLampColor(i) },
            [0, 1, 2, 4].includes(i) ? "1" : "0", { "top": `${coordsLamps[i][0]}`, "left": `${coordsLamps[i][1]}`, "max-width": `${coordsLamps[i][2]}` }))
    }
    for (let i = 0; i < coordsTumblers.length; i++) {
        this.tumblers.set(`tumbler${i}`, new Elem(`tumbler${i}`, setTumblerKind(i),
            [0, 3].includes(i) ? "0" : "1", { "top": `${coordsTumblers[i][0]}`, "left": `${coordsTumblers[i][1]}`, "max-width": `${coordsTumblers[i][2]}` }))
    }
    for (let i = 0; i < coordsButtons.length; i++) {
        this.buttons.set(`button${i}`, new Elem(`button${i}`, { "0": "../img/button.png" }, "0", { "top": `${coordsButtons[i][0]}`, "left": `${coordsButtons[i][1]}`, "max-width": `${coordsButtons[i][2]}` }))
    }
    for (let i = 0; i < coordsAnvils.length; i++) {
        this.anvils.set(`anvil${i}`, new Anvil(`anvil${i}`, '../img/anvil.png', anvilState[i], "1",
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
    let learnMassages = ["Переключатель ВКЛ-ВЫКЛ-ДИСТ в положение ВКЛ",
        "Переключатель КОНТРОЛЬ ЯЧЕЕК (ВЫКЛ-У1…У6) – в положение ВЫКЛ",
        "Тумблер РАЗР ПОДСТР – в положение ВЫКЛ",
        "Тумблер РЕЖИМ – в положение «2»",
        "Тумблер ВКЛ ИНД – в положение ВКЛ"]


    let scrollParameter = 400

    let activeControlElements = new Array(17).fill(true)

    let main = new Main(activeControlElements, constructFunction)
    main.funcInvoke()


    let stepQueue = new StepQueue([1, 3, 10, 11, 13])

    let learnMode = new LearnMode(main, stepQueue, learnMassages, scrollParameter)
    learnMode.mainSequence()
}
else {

    let activeControlElements = new Array(17).fill(true)

    let main = new Main(activeControlElements, constructFunction)
    main.funcInvoke()

    let stepQueue = new StepQueue([1, 3, 10, 11, 13])

    let controlMode = new ControlMode(main, stepQueue)
    controlMode.mainSequence()
    controlMode.errorMassage()
}