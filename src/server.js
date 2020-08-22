const express = require('express')
const server = express()
const nunjucks = require('nunjucks')



function pageLanding(req, res){
    return res.sendFile(__dirname + '/views/index.html')
}

function pageStudy(req, res){
    return res.sendFile(__dirname + '/views/study.html')
}

function pageGiveClasses(req, res){
    return res.sendFile(__dirname + '/views/give-classes.html')
}


//configurar nunjucks 
nunjucks.configure('/src/views', {
    express: server,
    noCache: true
})


//configurando arquivos estáticos
server.use(express.static('public'))

server.get('/', pageLanding)

server.get('/study', pageStudy)

server.get('/give-classes', pageGiveClasses)

server.listen(5500)