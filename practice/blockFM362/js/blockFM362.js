
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
                this.anvils.get('anvil0').setState("10")
            }
        })
    }

    controlElement12Click() {
        $("#controlElement12").on('click', () => {
            if (this.getControlElementState(12)) {
                this.anvils.get('anvil0').setState("11")
            }
        })
    }

    controlElement13Click() {
        $("#controlElement13").on('click', () => {
            if (this.getControlElementState(13)) {
                this.anvils.get('anvil1').setState("0")
            }
        })
    }

    controlElement14Click() {
        $("#controlElement14").on('click', () => {
            if (this.getControlElementState(14)) {
                this.anvils.get('anvil1').setState("1")
            }
        })
    }

    controlElement15Click() {
        $("#controlElement15").on('click', () => {
            if (this.getControlElementState(15)) {
                this.anvils.get('anvil1').setState("2")
            }
        })
    }

    controlElement16Click() {
        $("#controlElement16").on('click', () => {
            if (this.getControlElementState(16)) {
                this.anvils.get('anvil1').setState("3")
            }
        })
    }

    controlElement17Click() {
        $("#controlElement17").on('click', () => {
            if (this.getControlElementState(0)) {
                this.anvils.get('anvil1').setState("4")
            }
        })
    }

    controlElement18Click() {
        $("#controlElement18").on('click', () => {
            if (this.getControlElementState(18)) {
                this.anvils.get('anvil1').setState("5")
            }
        })
    }

    controlElement19Click() {
        $("#controlElement19").on('click', () => {
            if (this.getControlElementState(19)) {
                this.anvils.get('anvil1').setState("6")
            }
        })
    }

    controlElement20Click() {
        $("#controlElement20").on('click', () => {
            if (this.getControlElementState(20)) {
                this.anvils.get('anvil1').setState("7")
            }
        })
    }

    controlElement21Click() {
        $("#controlElement21").on('click', () => {
            if (this.getControlElementState(21)) {
                this.anvils.get('anvil2').setState("0")
            }
        })
    }

    controlElement22Click() {
        $("#controlElement22").on('click', () => {
            if (this.getControlElementState(22)) {
                this.anvils.get('anvil2').setState("1")
            }
        })
    }


    controlElement23Click() {
        $("#controlElement23").on('click', () => {
            if (this.getControlElementState(23)) {
                this.anvils.get('anvil2').setState("2")
            }
        })
    }

    controlElement24Click() {
        $("#controlElement24").on('click', () => {
            if (this.getControlElementState(24)) {
                this.anvils.get('anvil2').setState("3")
            }
        })
    }

    controlElement25Click() {
        $("#controlElement25").on('click', () => {
            if (this.getControlElementState(25)) {
                this.anvils.get('anvil2').setState("4")
            }
        })
    }

    controlElement26Click() {
        $("#controlElement26").on('click', () => {
            if (this.getControlElementState(26)) {
                this.anvils.get('anvil2').setState("5")
            }
        })
    }

    controlElement27Click() {
        $("#controlElement27").on('click', () => {
            if (this.getControlElementState(27)) {
                this.anvils.get('anvil2').setState("6")
            }
        })
    }

    controlElement28Click() {
        $("#controlElement28").on('click', () => {
            if (this.getControlElementState(28)) {
                this.anvils.get('anvil2').setState("7")
            }
        })
    }

    controlElement29Click() {
        $("#controlElement29").on('click', () => {
            if (this.getControlElementState(29)) {
                this.anvils.get('anvil2').setState("8")
            }
        })
    }

    controlElement30Click() {
        $("#controlElement30").on('click', () => {
            if (this.getControlElementState(30)) {
                this.anvils.get('anvil2').setState("9")
            }
        })
    }

    controlElement31Click() {
        $("#controlElement31").on('click', () => {
            if (this.getControlElementState(31)) {
                this.anvils.get('anvil3').setState("0")
            }
        })
    }

    controlElement32Click() {
        $("#controlElement32").on('click', () => {
            if (this.getControlElementState(32)) {
                this.anvils.get('anvil3').setState("1")
            }
        })
    }

    controlElement33Click() {
        $("#controlElement33").on('click', () => {
            if (this.getControlElementState(33)) {
                this.anvils.get('anvil3').setState("2")
            }
        })
    }

    controlElement34Click() {
        $("#controlElement34").on('click', () => {
            if (this.getControlElementState(34)) {
                this.anvils.get('anvil3').setState("3")
            }
        })
    }

    controlElement35Click() {
        $("#controlElement35").on('click', () => {
            if (this.getControlElementState(35)) {
                this.anvils.get('anvil3').setState("4")
            }
        })
    }

    controlElement36Click() {
        $("#controlElement36").on('click', () => {
            if (this.getControlElementState(36)) {
                this.anvils.get('anvil3').setState("5")
            }
        })
    }

    controlElement37Click() {
        $("#controlElement37").on('click', () => {
            if (this.getControlElementState(37)) {
                this.anvils.get('anvil3').setState("6")
            }
        })
    }

    controlElement38Click() {
        $("#controlElement38").on('click', () => {
            if (this.getControlElementState(38)) {
                this.tumblers.get('tumbler0').setState("0")
            }
        })
    }

    controlElement39Click() {
        $("#controlElement39").on('click', () => {
            if (this.getControlElementState(39)) {
                this.tumblers.get('tumbler0').setState("1")
            }
        })
    }

    controlElement40Click() {
        $("#controlElement40").on('click', () => {
            if (this.getControlElementState(40)) {

            }
        })
    }

    controlElement41Click() {
        $("#controlElement41").on('click', () => {
            if (this.getControlElementState(41)) {

            }
        })
    }

    controlElement42Click() {
        $("#controlElement42").on('click', () => {
            if (this.getControlElementState(42)) {

            }
        })
    }

    controlElement43Click() {
        $("#controlElement43").on('click', () => {
            if (this.getControlElementState(43)) {

            }
        })
    }

    controlElement44Click() {
        $("#controlElement44").on('click', () => {
            if (this.getControlElementState(44)) {

            }
        })
    }

    controlElement45Click() {
        $("#controlElement45").on('click', () => {
            if (this.getControlElementState(45)) {

            }
        })
    }

    controlElement46Click() {
        $("#controlElement46").on('click', () => {
            if (this.getControlElementState(46)) {

            }
        })
    }

    controlElement47Click() {
        $("#controlElement47").on('click', () => {
            if (this.getControlElementState(47)) {

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
        this.controlElement20Click()
        this.controlElement21Click()
        this.controlElement22Click()
        this.controlElement23Click()
        this.controlElement24Click()
        this.controlElement25Click()
        this.controlElement26Click()
        this.controlElement27Click()
        this.controlElement28Click()
        this.controlElement29Click()
        this.controlElement30Click()
        this.controlElement31Click()
        this.controlElement32Click()
        this.controlElement33Click()
        this.controlElement34Click()
        this.controlElement35Click()
        this.controlElement36Click()
        this.controlElement37Click()
        this.controlElement38Click()
        this.controlElement39Click()
        this.controlElement40Click()
        this.controlElement41Click()
        this.controlElement42Click()
        this.controlElement43Click()
        this.controlElement44Click()
        this.controlElement45Click()
        this.controlElement46Click()
        this.controlElement47Click()
    }


}