const coordsLamps = [
    // сеть
    [70, 200, 110],
    // неиспр пит
    [70, 455, 110],
    // гот ду
    [615, 35, 110],
    // выкл фз
    [615, 350, 110],
    // вкл стс
    [615, 530, 110],
    // тревога
    [615, 860, 110],
    // неиспр шифр
    [935, 23, 110],
    // контр лит
    [935, 150, 110],
    // _
    [1580, 115, 80],
    // афк
    [1580, 195, 80],
    // псв
    [1580, 280, 80],
    // сбой стс
    [1580, 405, 80],
    // сбой инф
    [1580, 520, 80],
    // кпрд испр
    [1580, 715, 80],
    // неиспр всу
    [1580, 855, 80],
]

const coordsButtons = [
    // сброс
    [65, 695, 130],
    // фк имит
    [1640, 680, 140],
    // ру инт
    [1640, 845, 140],
    // запр выд
    [1920, 740, 140],
    // афк выкл
    [1920, 380, 140],
    // исби имит
    [1920, 245, 140],
    // контр инд
    [1920, 135, 140],
]

const coordsAnvils = [
    // сеанс
    [400, 80, 130],
    // код
    [400, 370, 130],
    // канал
    [400, 645, 130],
    // слово
    [400, 830, 130],
    // выбор связи
    [1710, 120, 130],
    // номер фз
    [1710, 315, 130],
    // режимы рк
    [1780, 765, 130],
]

// anvil = [{pos: angle}]
const anvilState = [{
    0: 10,
    1: 40,
    2: 85,
    3: 140,
}, {
    0: 0,
    1: 25,
    2: 55,
    3: 130,
    4: 160,
    5: 180,
    6: 200,
    7: 225,
    8: 295,
    9: 325
}, {
    0: 40,
    1: 60,
    2: 90,
    3: 150,
}, {
    0: 30,
    1: 70,
    2: 120,
    3: 150,
}, {
    0: 50,
    1: 130,
}, {
    0: 30,
    1: 70,
    2: 120,
    3: 140,
}, {
    0: 345,
    1: 10,
    2: 50,
    3: 135,
    4: 165,
    5: 190
}, ]

const coordsButtons8 = [
    // бр -> ... -> лит2
    [740, 26, 70],
    [740, 149, 70],
    [740, 282, 70],
    [740, 410, 70],
    [740, 540, 70],
    [740, 675, 70],
    [740, 800, 70],
    [740, 915, 70],
]

const coordsButtons6 = [
    // вкл фз
    [642, 202, 70],
    // пу1
    [843, 33, 70],
]

const coordsButtons5 = [
    // пу2
    [843, 163, 70],
    // пу3
    [843, 282, 70],
]

const coordsButtons7 = [
    // поднять
    [843, 413, 70],
    // опустить
    [843, 547, 70],
]

const coordsButtons1 = [
    // кпрд угл распр
    [960, 323, 70],
    // к вкл
    [960, 455, 70],
    // к выкл
    [960, 595, 70],
    // результат фк 1
    [964, 800, 70],
    // результат фк 2
    [964, 925, 70],
    // 5B55 left 1-4
    [1100, 27, 70],
    [1100, 155, 70],
    [1100, 280, 70],
    [1100, 415, 70],
    // 5B55 right 1-4
    [1100, 545, 70],
    [1100, 680, 70],
    [1100, 805, 70],
    [1100, 927, 70],
    // ресурс 1-4
    [1361, 542, 70],
    [1361, 675, 70],
    [1361, 804, 70],
    [1361, 930, 70],
]

const coordsButtons4 = [
    // комплект 1-4
    [1232, 542, 70],
    [1232, 675, 70],
    [1232, 804, 70],
    [1232, 930, 70],
]

const coordsButtons9 = [
    // паз-пхз
    [642, 713, 70],
]

const coordsButtons2 = [
    // подгот
    [1224, 27, 70],
    // углы введены
    [1224, 155, 70],
    // снятие блокир пуска
    [1224, 280, 70],
    // пуск
    [1224, 415, 70],
    // подгот вкл
    [1353, 27, 70],
    // гот
    [1353, 155, 70],
    // гот к пуску
    [1353, 280, 70],
    // сход
    [1476, 286, 70],
    // испр
    [1476, 678, 70],
]

const coordsButtons3 = [
    // отказ
    [1476, 155, 70],
    // неиспр
    [1476, 810, 70],
]

// // сеанс
// [400, 80, 130],
// // код
// [400, 370, 130],
// // канал
// [400, 645, 130],
// // слово
// [400, 830, 130],
// // выбор связи
// [1710, 120, 130],
// // номер фз
// [1710, 315, 130],
// // режимы рк
// [1780, 765, 130],
const coordsControlElems = [
    // сброс
    [105, 736, 50, 50],

    // сеанс - общ
    [400, 15, 70, 35],
    // сеанс - 1
    [360, 55, 70, 35],
    // сеанс - 2
    [346, 107, 70, 35],
    // сеанс - 3
    [360, 165, 70, 35],

    // TODO: код - доделать

    // канал - общ
    [378, 605, 65, 30],
    // канал - 1
    [347, 630, 65, 30],
    // канал - 2
    [338, 675, 65, 30],
    // канал - 3
    [348, 719, 65, 30],
    // канал - 4
    [376, 744, 65, 30],

    // слово - 1
    [385, 805, 65, 30],
    // слово - 2
    [352, 840, 65, 30],
    // слово - 3
    [350, 895, 65, 30],
    // слово - 4
    [385, 926, 65, 30],
]