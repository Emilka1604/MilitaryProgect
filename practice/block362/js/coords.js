
const coordsTumblers = [["426px", "305px", "40px"]]

const coordsLamps = [["55px", "105px", "110px"],
["55px", "260px", "110px"],
["255px", "50px", "110px"],
["255px", "130px", "110px"],
["255px", "205px", "110px"],
["255px", "275px", "110px"],
["255px", "345px", "110px"],
["255px", "410px", "110px"],
["255px", "485px", "110px"],
["320px", "50px", "110px"],
["320px", "130px", "110px"],
["320px", "205px", "110px"],
["320px", "275px", "110px"],
["320px", "345px", "110px"],
["320px", "410px", "110px"],
["320px", "485px", "110px"],
["460px", "90px", "110px"],
["460px", "440px", "110px"],
["740px", "80px", "110px"],
["740px", "137px", "110px"],
["740px", "194px", "110px"],
["740px", "355px", "110px"],
["740px", "415px", "110px"],
["740px", "470px", "110px"],
["810px", "135px", "110px"],
["810px", "205px", "110px"],
["810px", "275px", "110px"],
["810px", "335px", "110px"],
["810px", "415px", "110px"],
["920px", "65px", "110px"],
["920px", "135px", "110px"],
["920px", "205px", "110px"],
["920px", "275px", "110px"],
["920px", "335px", "110px"],
["920px", "415px", "110px"],
["920px", "490px", "110px"],
["1000px", "205px", "110px"],
["1000px", "275px", "110px"],
["1000px", "335px", "110px"],
["1000px", "415px", "110px"],]


const coordsButtons = [["65px", "435px", "90px"],
["560px", "280px", "90px"],
["1150px", "145px", "90px"],
["1150px", "425px", "90px"],]

const coordsAnvils = [["590px", "90px", "110px"],
["590px", "440px", "110px"]]

const coordsControlElems = [["85px", "455px", "50px", "50px"],
["410px", "293px", "60px", "30px"],
["482px", "293px", "60px", "30px"],
["580px", "300px", "50px", "50px"],
["600px", "35px", "50px", "30px"],
["575px", "50px", "50px", "30px"],
["550px", "70px", "50px", "30px"],
["540px", "120px", "50px", "30px"],
["550px", "180px", "50px", "30px"],
["575px", "205px", "50px", "30px"],
["600px", "210px", "50px", "30px"],
["600px", "390px", "50px", "30px"],
["575px", "405px", "50px", "30px"],
["550px", "425px", "50px", "30px"],
["540px", "475px", "50px", "30px"],
["550px", "520px", "50px", "30px"],
["575px", "545px", "50px", "30px"],
["600px", "555px", "50px", "30px"],
["623px", "545px", "50px", "30px"],
["650px", "525px", "50px", "30px"],
["1170px", "165px", "50px", "50px"],
["1170px", "445px", "50px", "50px"],]

const anvilState = [{ "0": "0deg", "1": "30deg", "2": "50deg", "3": "90deg", "4": "135deg", "5": "155deg", "6": "180deg" },
{ "0": "0deg", "1": "30deg", "2": "50deg", "3": "90deg", "4": "135deg", "5": "155deg", "6": "180deg", "7": "195deg", "8": "220deg", }]


function setActiveLampColor(i) {
    if ([0].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([1, 16, 17].includes(i) || i > 28) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}