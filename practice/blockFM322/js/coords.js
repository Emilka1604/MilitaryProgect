const coordsLamps = [
    [25, 105, 120],
    [25, 245, 120],
    [225, 135, 120],
    [225, 350, 120],
    [290, 70, 120],
    [290, 250, 120],
    [290, 420, 120],
    [812, 245, 110],
]

const coordsButtons = [
    [35, 408, 90],
    [900, 440, 90]
]

const coordsAnvils = [
    [760, 255, 90],
    [920, 240, 90],
    [1100, 255, 90],
]

const anvilState = [{
        0: -30,
        1: -10,
        2: 10,
        3: 25,
        4: 40,
        5: 50,
        6: 90,
        7: 135,
        8: 170,
        9: 210,
    },
    {
        0: 0,
        1: 20,
        2: 50,
        3: 110,
        4: 150,
    },
    {
        0: 20,
        1: 90,
        2: 160,
    },
]

const coordsArrows = [
    [410, 240, 120],
    [545, 240, 120]
]

const coordsControlElems = [
    [60, 433, 40, 40],
    [800, 230, 40, 20],
    [780, 230, 40, 20],
    [765, 230, 40, 20],
    [750, 230, 40, 20],
    [740, 230, 40, 20],
    [730, 240, 40, 20],
    [730, 280, 40, 20],
    [750, 320, 40, 20],
    [770, 320, 40, 20],
    [790, 320, 40, 20],
    [930, 170, 50, 30],
    [905, 180, 50, 30],
    [880, 220, 50, 30],
    [888, 270, 50, 30],
    [888, 330, 50, 30],
    [925, 465, 40, 40],
    [1085, 105, 120, 30],
    [1060, 260, 80, 30],
    [1085, 370, 90, 30],
]

function setActiveLampColor(i) {
    if ([0, ].includes(i)) {
        return "../img/yellow_lamp.png"
    }
    if ([1, 4, 6, 7].includes(i)) {
        return "../img/red_lamp.png"
    }
    return "../img/green_lamp.png"
}