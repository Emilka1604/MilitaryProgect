

const coordsLamps = [["25px", "105px", "120px"],
["25px", "245px", "120px"],
["225px", "135px", "120px"],
["225px", "350px", "120px"],
["290px", "70px", "120px"],
["290px", "250px", "120px"],
["290px", "420px", "120px"],
["812px", "245px", "110px"],]

const coordsButtons = [["35px", "408px", "90px"],
["900px", "440px", "90px"]]

const coordsAnvils = [["760px", "255px", "90px"],
["920px", "240px", "90px"],
["1100px", "255px", "90px"],
]

const anvilState = [{
    "0": "-30deg", "1": "-10deg", "2": "10deg", "3": "25deg", "4": "40deg", "5": "50deg", "6": "90deg",
    "7": "135deg", "8": "170deg", "9": "210deg",
},

{
    "0": "0deg", "1": "20deg", "2": "50deg", "3": "110deg", "4": "150deg",
},

{
    "0": "20deg", "1": "90deg", "2": "160deg",
},]

const coordsArrows = [["410px", "240px", "120px"],
["545px", "240px", "120px"]]

function setActiveLampColor(i) {
    if ([0,].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([1, 4, 6, 7].includes(i)) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}

const coordsControlElems = [["60px", "433px", "40px", "40px"],
["800px", "230px", "40px", "20px"],
["780px", "230px", "40px", "20px"],
["765px", "230px", "40px", "20px"],
["750px", "230px", "40px", "20px"],
["740px", "230px", "40px", "20px"],
["730px", "240px", "40px", "20px"],
["730px", "280px", "40px", "20px"],
["750px", "320px", "40px", "20px"],
["770px", "320px", "40px", "20px"],
["790px", "320px", "40px", "20px"],
["930px", "170px", "50px", "30px"],
["905px", "180px", "50px", "30px"],
["880px", "220px", "50px", "30px"],
["888px", "270px", "50px", "30px"],
["888px", "330px", "50px", "30px"],
["925px", "465px", "40px", "40px"],
["1085px", "105px", "120px", "30px"],
["1060px", "260px", "80px", "30px"],
["1085px", "370px", "90px", "30px"],]