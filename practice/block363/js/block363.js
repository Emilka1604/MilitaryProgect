


class Main {
    constructor(activeControlElements, constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.controlElements = new Map()
        this.activeControlElements = activeControlElements
        constructFunction.call(this)
        this.voltage = "on"
        this.obj = {

            "tumbler0":
            {
                "0": () => {
                    this.voltage = "off"
                    this.lamps.get('lamp3').setState("0")
                    this.lamps.get('lamp2').setState("0")

                },

                "1": () => {
                    if (this.voltage === "off") {
                        this.voltage = "on"
                        this.lamps.get('lamp3').setState("1")
                        setTimeout(() => {
                            this.lamps.get('lamp3').setState("0")
                            this.lamps.get('lamp2').setState("1")
                        }, 500)
                    }
                }
            },

            "anvil0":
            {
                "0": () => {

                },

                "1": () => {

                },

                "2": () => {


                },

                "3": () => {

                },

                "4": () => {


                }
            }



        }
    }

    getControlElementState(i) {
        return this.activeControlElements[i]
    }

    setControlElementState(i, value) {
        this.activeControlElements[i] = value
    }

    controlElement0Click() {
        $("#controlElement0").on('click', () => {
            if (this.getControlElementState(0)) {
                this.tumblers.get('tumbler0').setState("1")
                this.obj["tumbler0"]["1"]()
            }
        })
    }

    controlElement1Click() {
        $("#controlElement1").on('click', () => {
            if (this.getControlElementState(1)) {
                this.tumblers.get('tumbler0').setState("0")
                this.obj["tumbler0"]["0"]()
            }
        })
    }

    controlElement2Click() {
        $("#controlElement2").on('click', () => {
            if (this.getControlElementState(2)) {
                this.anvils.get('anvil0').setState("0")
            }
        })
    }

    controlElement3Click() {
        $("#controlElement3").on('click', () => {
            if (this.getControlElementState(3)) {
                this.anvils.get('anvil0').setState("1")
            }
        })
    }

    controlElement4Click() {
        $("#controlElement4").on('click', () => {
            if (this.getControlElementState(4)) {
                this.anvils.get('anvil0').setState("2")
            }
        })
    }

    controlElement5Click() {
        $("#controlElement5").on('click', () => {
            this.anvils.get('anvil0').setState("3")
        })
    }


    controlElement6Click() {
        $("#controlElement6").on('click', () => {
            if (this.getControlElementState(6)) {
                this.anvils.get('anvil0').setState("4")
            }
        })
    }

    funcInvoke() {
        this.controlElement1Click()
        this.controlElement0Click()
        this.controlElement2Click()
        this.controlElement3Click()
        this.controlElement4Click()
        this.controlElement5Click()
        this.controlElement6Click()
    }



}

