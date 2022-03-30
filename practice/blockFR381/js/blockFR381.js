class Main {
    constructor(constructFunction) {
        this.lamps = new Map()
        this.smallLamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.quaterButtons = new Map()
        this.anvils = new Map()
        this.controlElements = new Map()
        constructFunction.call(this)
        this.obj = {}
    }
}