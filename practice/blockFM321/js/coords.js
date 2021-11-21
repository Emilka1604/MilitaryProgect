

const coordsLamps = [["30px", "180px", "120px"],
["30px", "285px", "120px"],
["330px", "55px", "120px"],
["330px", "425px", "120px"],]

const coordsButtons = [["45px", "390px", "90px"],
["990px", "255px", "90px"]]

const coordsBlueButtons = [["770px", "345px", "90px"],
["770px", "452px", "90px"]]

const coordsTumblers = [["757px", "68px", "36px"],
["757px", "170px", "36px"]]

const coordsAnvils = [["630px", "250px", "90px"]]

const coordsArrows = [["400px", "225px", "150px"]]

const coordsControlElems = [["65px", "410px", "50px", "50px"],
["600px", "190px", "50px", "30px"],
["570px", "235px", "50px", "30px"],
["570px", "300px", "50px", "30px"],
["600px", "350px", "50px", "30px"],
["740px", "60px", "50px", "30px"],
["820px", "60px", "50px", "30px"],
["740px", "145px", "80px", "30px"],
["820px", "160px", "60px", "30px"],
["765px", "340px", "100px", "100px"],
["765px", "447px", "100px", "100px"],
["1010px", "275px", "50px", "50px"],]

const anvilState = [{ "0": "30deg", "1": "60deg", "2": "115deg", "3": "150deg", }]

function setActiveLampColor(i) {
    if ([0,].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([1, 3].includes(i)) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}

function setTumblerKind(i) {
    return { "0": "../img/down_tumbler.png", "1": "../img/up_tumbler.png" }
}