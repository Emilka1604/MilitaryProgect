
class Main {
    constructor(activeControlElements, constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.anvils = new Map()
        this.arrows = new Map()
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

            "anvil1":
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


                },

                "7": () => {

                },

                "8": () => {


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

            }
        })
    }

    controlElement1Click() {
        $("#controlElement1").on('click', () => {
            if (this.getControlElementState(1)) {
                this.anvils.get('anvil0').setState("0")
            }
        })
    }

    controlElement2Click() {
        $("#controlElement2").on('click', () => {
            if (this.getControlElementState(2)) {
                this.anvils.get('anvil0').setState("1")
            }
        })
    }

    controlElement3Click() {
        $("#controlElement3").on('click', () => {
            if (this.getControlElementState(3)) {
                this.anvils.get('anvil0').setState("2")
            }
        })
    }

    controlElement4Click() {
        $("#controlElement4").on('click', () => {
            if (this.getControlElementState(4)) {
                this.anvils.get('anvil0').setState("3")
            }
        })
    }

    controlElement5Click() {
        $("#controlElement5").on('click', () => {
            if (this.getControlElementState(5)) {
                this.anvils.get('anvil0').setState("4")
            }
        })
    }


    controlElement6Click() {
        $("#controlElement6").on('click', () => {
            if (this.getControlElementState(6)) {
                this.anvils.get('anvil0').setState("5")
            }
        })
    }

    controlElement7Click() {
        $("#controlElement7").on('click', () => {
            if (this.getControlElementState(7)) {
                this.anvils.get('anvil0').setState("6")
            }
        })
    }

    controlElement8Click() {
        $("#controlElement8").on('click', () => {
            if (this.getControlElementState(8)) {
                this.anvils.get('anvil0').setState("7")
            }
        })
    }

    controlElement9Click() {
        $("#controlElement9").on('click', () => {
            if (this.getControlElementState(9)) {
                this.anvils.get('anvil0').setState("8")
            }
        })
    }

    controlElement10Click() {
        $("#controlElement10").on('click', () => {
            if (this.getControlElementState(10)) {
                this.anvils.get('anvil0').setState("9")
            }
        })
    }

    controlElement11Click() {
        $("#controlElement11").on('click', () => {
            if (this.getControlElementState(11)) {
                this.anvils.get('anvil1').setState("0")
            }
        })
    }

    controlElement12Click() {
        $("#controlElement12").on('click', () => {
            if (this.getControlElementState(12)) {
                this.anvils.get('anvil1').setState("1")

            }
        })
    }

    controlElement13Click() {
        $("#controlElement13").on('click', () => {
            if (this.getControlElementState(13)) {
                this.anvils.get('anvil1').setState("2")

            }
        })
    }

    controlElement14Click() {
        $("#controlElement14").on('click', () => {
            if (this.getControlElementState(14)) {
                this.anvils.get('anvil1').setState("3")

            }
        })
    }

    controlElement15Click() {
        $("#controlElement15").on('click', () => {
            if (this.getControlElementState(15)) {
                this.anvils.get('anvil1').setState("3")

            }
        })
    }

    controlElement16Click() {
        $("#controlElement16").on('click', () => {
            if (this.getControlElementState(16)) {

            }
        })
    }

    controlElement17Click() {
        $("#controlElement17").on('click', () => {
            if (this.getControlElementState(0)) {
                this.anvils.get('anvil2').setState("0")
            }
        })
    }

    controlElement18Click() {
        $("#controlElement18").on('click', () => {
            if (this.getControlElementState(18)) {
                this.anvils.get('anvil2').setState("1")
            }
        })
    }

    controlElement19Click() {
        $("#controlElement19").on('click', () => {
            if (this.getControlElementState(19)) {
                this.anvils.get('anvil2').setState("2")

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
        this.controlElement17Click()
        this.controlElement18Click()
        this.controlElement19Click()
    }


}