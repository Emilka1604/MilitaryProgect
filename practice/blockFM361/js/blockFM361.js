class Main {
    constructor(activeControlElements, constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.controlElements = new Map()
        this.activeControlElements = activeControlElements
        constructFunction.call(this)
        this.obj = {

            "tumbler0":
            {
                "0": () => {


                },

                "1": () => {

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


                },

                "5": () => {

                },

                "6": () => {


                }
            },


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
                this.tumblers.get('tumbler0').setState("0")
                $('#tumbler0').css({ 'transform': 'rotate(0deg)' })
            }
        })
    }

    controlElement1Click() {
        $("#controlElement1").on('click', () => {
            if (this.getControlElementState(1)) {
                this.tumblers.get('tumbler0').setState("1")
                $('#tumbler0').css({ 'transform': 'rotate(180deg)' })
            }
        })
    }

    controlElement2Click() {
        $("#controlElement2").on('click', () => {
            if (this.getControlElementState(2)) {

            }
        })
    }

    controlElement3Click() {
        $("#controlElement3").on('click', () => {
            if (this.getControlElementState(3)) {
                this.anvils.get('anvil0').setState("0")

            }
        })
    }

    controlElement4Click() {
        $("#controlElement4").on('click', () => {
            if (this.getControlElementState(4)) {
                this.anvils.get('anvil0').setState("1")
            }
        })
    }

    controlElement5Click() {
        $("#controlElement5").on('click', () => {
            if (this.getControlElementState(5)) {
                this.anvils.get('anvil0').setState("2")
            }
        })
    }


    controlElement6Click() {
        $("#controlElement6").on('click', () => {
            if (this.getControlElementState(6)) {
                this.anvils.get('anvil0').setState("3")
            }
        })
    }

    controlElement7Click() {
        $("#controlElement7").on('click', () => {
            if (this.getControlElementState(7)) {
                this.anvils.get('anvil0').setState("4")
            }
        })
    }

    controlElement8Click() {
        $("#controlElement8").on('click', () => {
            if (this.getControlElementState(8)) {
                this.anvils.get('anvil0').setState("5")
            }
        })
    }

    controlElement9Click() {
        $("#controlElement9").on('click', () => {
            if (this.getControlElementState(9)) {
                this.tumblers.get('tumbler1').setState("1")
            }
        })
    }

    controlElement10Click() {
        $("#controlElement10").on('click', () => {
            if (this.getControlElementState(10)) {
                this.tumblers.get('tumbler1').setState("0")
            }
        })
    }

    controlElement11Click() {
        $("#controlElement11").on('click', () => {
            if (this.getControlElementState(11)) {
                this.tumblers.get('tumbler2').setState("0")
            }
        })
    }

    controlElement12Click() {
        $("#controlElement12").on('click', () => {
            if (this.getControlElementState(12)) {
                this.tumblers.get('tumbler2').setState("1")
            }
        })
    }

    controlElement13Click() {
        $("#controlElement13").on('click', () => {
            if (this.getControlElementState(13)) {
                this.tumblers.get('tumbler3').setState("1")
            }
        })
    }

    controlElement14Click() {
        $("#controlElement14").on('click', () => {
            if (this.getControlElementState(14)) {
                this.tumblers.get('tumbler3').setState("0")
            }
        })
    }

    controlElement15Click() {
        $("#controlElement15").on('click', () => {
            if (this.getControlElementState(15)) {

            }
        })
    }

    controlElement16Click() {
        $("#controlElement16").on('click', () => {
            if (this.getControlElementState(16)) {
                this.tumblers.get('tumbler0').setState("2")
                $('#tumbler0').css({ 'transform': 'rotate(90deg)' })
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
        this.controlElement7Click()
        this.controlElement8Click()
        this.controlElement9Click()
        this.controlElement10Click()
        this.controlElement11Click()
        this.controlElement12Click()
        this.controlElement13Click()
        this.controlElement14Click()
        this.controlElement15Click()
        this.controlElement16Click()
    }


}