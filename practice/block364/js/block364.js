

class Main {
    constructor(activeControlElements, constructFunction) {
        this.lamps = new Map()
        this.tumblers = new Map()
        this.buttons = new Map()
        this.controlElements = new Map()
        this.activeControlElements = activeControlElements
        constructFunction.call(this)
        this.control = "dist"
        this.voltage = "off"
        this.dampers = "close"
        this.ventilation = "off"
        this.obj = {

            "tumbler0":
            {
                "0": () => {
                    this.control = "dist"
                    this.obj["tumbler1"]["0"]()
                },

                "1": () => {
                    this.control = "local"
                    if (this.tumblers.get("tumbler1").state === "1") {
                        this.obj["tumbler1"]["1"]()
                    }
                }

            },

            "tumbler1":
            {
                "0": () => {
                    this.lamps.get('lamp3').setState("0")
                    this.lamps.get('lamp5').setState("0")
                    this.lamps.get('lamp6').setState("0")
                    this.lamps.get('lamp7').setState("0")
                    this.lamps.get('lamp8').setState("0")
                    this.voltage = "off"
                    for (let key in this.obj) {
                        if (key != "tumbler1" && key != "tumbler0") {
                            this.obj[key]["0"]()
                        }
                    }
                    this.dampersOff()

                },

                "1": () => {
                    if (this.control === "local" && this.voltage === "off") {
                        this.lamps.get('lamp3').setState("1")
                        this.lamps.get('lamp5').setState("1")
                        this.lamps.get('lamp6').setState("1")
                        this.lamps.get('lamp7').setState("1")
                        this.lamps.get('lamp8').setState("1")
                        this.voltage = "on"
                        for (let key in this.obj) {
                            if (this.tumblers.get(key).state === "1" && key != "tumbler1" && key != "tumbler0") {
                                this.obj[key]["1"]()
                            }
                        }
                        if (this.dampers === "close") {
                            this.dampersClose()
                        }
                        else {
                            this.dampersOpen()
                        }
                    }

                },
            },

            "tumbler2":
            {
                "0": () => {
                    this.lamps.get('lamp13').setState("0")
                    this.lamps.get('lamp14').setState("0")
                    this.ventilation = "off"
                },

                "1": () => {
                    if (this.ventilation === "off" && this.voltage === "on") {
                        this.ventilation = "on"
                        this.lamps.get('lamp15').setState("1")
                        setTimeout(() => {
                            this.lamps.get('lamp15').setState("0")
                            this.lamps.get('lamp13').setState("1")
                            this.lamps.get('lamp14').setState("1")
                        }, 500)
                    }
                },
            },

            "tumbler3":
            {
                "0": () => {
                    this.lamps.get("lamp17").setState("0")
                },

                "1": () => {
                    if (this.voltage === "on") {
                        this.lamps.get("lamp17").setState("1")
                    }
                }
            },

            "tumbler5":
            {
                "0": () => {
                    this.lamps.get("lamp16").setState("0")
                    this.lamps.get("lamp18").setState("0")
                },

                "1": () => {
                    if (this.voltage === "on") {
                        this.lamps.get("lamp18").setState("1")
                        setTimeout(() => {
                            this.lamps.get('lamp16').setState("1")
                        }, 500)
                    }
                }
            },

            "tumbler6":
            {
                "0": () => {
                    this.lamps.get("lamp19").setState("0")
                    this.lamps.get("lamp20").setState("0")
                },

                "1": () => {
                    if (this.voltage === "on") {
                        this.lamps.get("lamp19").setState("1")
                        this.lamps.get("lamp20").setState("1")
                    }
                }
            }
        }



    }




    dampersClose() {
        if (this.voltage === "on") {
            setTimeout(() => {
                this.lamps.get("lamp9").setState("1")
                this.lamps.get("lamp10").setState("1")
                this.lamps.get("lamp11").setState("0")
                this.lamps.get("lamp12").setState("0")
                this.dampers = "close"
            }, 500)
        }
    }

    dampersOpen() {
        if (this.voltage === "on") {
            setTimeout(() => {
                this.lamps.get("lamp9").setState("0")
                this.lamps.get("lamp10").setState("0")
                this.lamps.get("lamp11").setState("1")
                this.lamps.get("lamp12").setState("1")
                this.dampers = "open"
            }, 500)
        }
    }

    dampersOff() {
        this.lamps.get("lamp9").setState("0")
        this.lamps.get("lamp10").setState("0")
        this.lamps.get("lamp11").setState("0")
        this.lamps.get("lamp12").setState("0")
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
                this.obj["tumbler0"]["0"]()
                this.tumblers.get('tumbler0').setState("0")
            }
        })
    }

    controlElement1Click() {
        $("#controlElement1").on('click', () => {
            if (this.getControlElementState(1)) {
                this.obj["tumbler0"]["1"]()
                this.tumblers.get('tumbler0').setState("1")
            }
        })
    }

    controlElement2Click() {
        $("#controlElement2").on('click', () => {
            if (this.getControlElementState(2)) {
                this.tumblers.get('tumbler1').setState("1")
                this.obj["tumbler1"]["1"]()
            }
        })
    }

    controlElement3Click() {
        $("#controlElement3").on('click', () => {
            if (this.getControlElementState(3)) {
                this.tumblers.get('tumbler1').setState("0")
                this.obj["tumbler1"]["0"]()
            }
        })
    }

    controlElement4Click() {
        $("#controlElement4").on('click', () => {
            if (this.getControlElementState(4)) {
                this.dampersClose()
            }
        })
    }

    controlElement5Click() {
        $("#controlElement5").on('click', () => {
            if (this.getControlElementState(5)) {
                this.dampersOpen()
            }
        })
    }


    controlElement6Click() {
        $("#controlElement6").on('click', () => {
            if (this.getControlElementState(6)) {
                this.tumblers.get('tumbler2').setState("1")
                this.obj["tumbler2"]["1"]()
            }
        })
    }

    controlElement7Click() {
        $("#controlElement7").on('click', () => {
            if (this.getControlElementState(7)) {
                this.tumblers.get('tumbler2').setState("0")
                this.obj["tumbler2"]["0"]()
            }
        })
    }

    controlElement8Click() {
        $("#controlElement8").on('click', () => {
            if (this.getControlElementState(8)) {
                this.tumblers.get('tumbler3').setState("1")
                this.obj["tumbler3"]["1"]()
            }
        })
    }

    controlElement9Click() {
        $("#controlElement9").on('click', () => {
            if (this.getControlElementState(9)) {
                this.tumblers.get('tumbler3').setState("0")
                this.obj["tumbler3"]["0"]()
            }
        })
    }

    controlElement10Click() {
        $("#controlElement10").on('click', () => {
            if (this.getControlElementState(10)) {
                this.tumblers.get('tumbler4').setState("1")
            }
        })
    }

    controlElement11Click() {
        $("#controlElement11").on('click', () => {
            if (this.getControlElementState(11)) {
                this.tumblers.get('tumbler4').setState("0")
            }
        })
    }

    controlElement12Click() {
        $("#controlElement12").on('click', () => {
            if (this.getControlElementState(12)) {
                this.tumblers.get('tumbler5').setState("1")
                this.obj["tumbler5"]["1"]()
            }
        })
    }

    controlElement13Click() {
        $("#controlElement13").on('click', () => {
            if (this.getControlElementState(13)) {
                this.tumblers.get('tumbler5').setState("0")
                this.obj["tumbler5"]["0"]()
            }
        })
    }

    controlElement14Click() {
        $("#controlElement14").on('click', () => {
            if (this.getControlElementState(14)) {
                this.tumblers.get('tumbler6').setState("1")
                this.obj["tumbler6"]["1"]()
            }
        })
    }

    controlElement15Click() {
        $("#controlElement15").on('click', () => {
            if (this.getControlElementState(15)) {
                this.tumblers.get('tumbler6').setState("0")
                this.obj["tumbler6"]["0"]()
            }
        })
    }

    controlElement16Click() {
        $("#controlElement16").on('click', () => {
            if (this.getControlElementState(16)) {
                this.tumblers.get('tumbler7').setState("1")
            }
        })
    }

    controlElement17Click() {
        $("#controlElement17").on('click', () => {
            if (this.getControlElementState(17)) {
                this.tumblers.get('tumbler7').setState("0")
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
    }




}

