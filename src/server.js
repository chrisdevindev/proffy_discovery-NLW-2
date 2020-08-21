const express = require('express')
const server = express()

server.use(express.static('public'))

server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/index.html')
})

server.get('/study', (req, res) => {
    return res.sendFile(__dirname + '/views/study.html')
})

server.get('/give-classes', (req, res) => {
    return res.sendFile(__dirname + '/views/give-classes.html')
})

server.listen(5500)