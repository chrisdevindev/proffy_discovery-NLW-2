const express = require('express')
const server = express() 
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')




//configurar nunjucks 
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//receber os dados do req.body
.use(express.urlencoded({ extended: true }))

//configurando arquivos estáticos
server.use(express.static('public'))

server.get('/', pageLanding)

server.get('/study', pageStudy)

server.get('/give-classes', pageGiveClasses)

server.post('/give-classes', saveClasses)

server.listen(5500)