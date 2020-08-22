const express = require('express')
const server = express()



function pageLanding(req, res){
    return res.sendFile(__dirname + '/views/index.html')
}

function pageStudy(req, res){
    return res.sendFile(__dirname + '/views/study.html')
}

function pageGiveClasses(req, res){
    return res.sendFile(__dirname + '/views/give-classes.html')
}

server.use(express.static('public'))

server.get('/', pageLanding)

server.get('/study', pageStudy)

server.get('/give-classes', pageGiveClasses)

server.listen(5500)