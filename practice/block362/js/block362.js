class Main {
    constructor(activeControlElements, constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.controlElements = new Map()
        this.activeControlElements = activeControlElements
        constructFunction.call(this)
    }
}