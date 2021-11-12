
const anvilState = [{ "0": "0deg", "1": "20deg", "2": "40deg", "3": "95deg", "4": "135deg", "5": "160deg" }]


const coordsTumblers = [["160px", "405px", "90px"],
["680px", "260px", "45px"],
["682px", "415px", "90px"],
["1100px", "290px", "45px"]]

const coordsLamps = [["45px", "80px", "110px"],
["45px", "150px", "110px"],
["45px", "220px", "110px"],
["45px", "400px", "110px"],
["210px", "110px", "110px"],
["210px", "255px", "110px"],
["355px", "15px", "110px"],
["355px", "87px", "110px"],
["355px", "160px", "110px"],
["355px", "305px", "110px"],
["355px", "430px", "110px"],
["420px", "250px", "110px"],
["440px", "420px", "110px"],]


const coordsButtons = [["220px", "405px", "90px"],
["1090px", "410px", "90px"],]

const coordsAnvils = [["540px", "240px", "110px"],]

const coordsControlElems = [["168px", "348px", "50px", "30px"],
["168px", "515px", "50px", "30px"],
["240px", "425px", "50px", "50px"],
["555px", "175px", "50px", "30px"],
["530px", "200px", "50px", "30px"],
["510px", "230px", "50px", "30px"],
["500px", "275px", "50px", "30px"],
["510px", "315px", "50px", "30px"],
["530px", "350px", "50px", "30px"],
["655px", "220px", "110px", "30px"],
["780px", "260px", "50px", "30px"],
["690px", "375px", "50px", "30px"],
["690px", "490px", "50px", "30px"],
["1080px", "270px", "80px", "30px"],
["1165px", "285px", "50px", "30px"],
["1110px", "430px", "50px", "50px"],]


function setActiveLampColor(i) {
    if ([3, 12].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([5, 11].includes(i) || i > 28) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}

function setTumblerKind(i) {
    if ([0, 2].includes(i)) {
        return { "0": "../img/left_tumbler.png", "1": "../img/right_tumbler.png" }
    }
    return { "0": "../img/down_tumbler.png", "1": "../img/up_tumbler.png" }
}

