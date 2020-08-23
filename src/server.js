const proffys = [
    {
        name: "Christian Castro",
        avatar: "https://avatars3.githubusercontent.com/u/47678397?s=460&u=61b6356f21130c8f107da90ab4b1fcf2fadad065&v=4",
        whatsapp: "8893686330",
        bio: "Lover of technology and programming.I’m currently working as Full Stack developer on @TecNorth and I helping young aspirants in the programming world at @DevInDev.br; I'm be specializing in ReactJs, React-Native and NodeJS.",
        subject: "Programação",
        cost: '100', 
        weekday: [0, 1, 2, 3, 4, 5, 6],
        time_from: [720],
        time_to:[1220]

    }
]
const subjects = [
    "Arte",
    "Programação",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')



function pageLanding(req, res){
    return res.render('index.html')
}

function pageStudy(req, res){
    const filters = req.query

    return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
    return res.render('give-classes.html', {subjects, weekdays})
}


//configurar nunjucks 
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//configurando arquivos estáticos
server.use(express.static('public'))

server.get('/', pageLanding)

server.get('/study', pageStudy)

server.get('/give-classes', pageGiveClasses)

server.listen(5500)