const Database = require('./db.js')

Database.then((db) => {
        //inserindo dados
    proffy = {
        name: "Christian Castro",
        avatar: "https://avatars3.githubusercontent.com/u/47678397?s=460&u=61b6356f21130c8f107da90ab4b1fcf2fadad065&v=4",
        whatsapp: "8893686330",
        bio: "Lover of technology and programming.I’m currently working as Full Stack developer on @TecNorth and I helping young aspirants in the programming world at @DevInDev.br; I'm be specializing in ReactJs, React-Native and NodeJS.",

    }

    classValue = {
        subject: "Programação",
        cost: '100', 
    }

    classSchedule = [
        {
            weekday: [0, 1, 2, ],
            time_from: [720],
            time_to:[1220]
        },
        {
            weekday: [3, 4, 5, 66],
            time_from: [520],
            time_to:[1220]
        }
    ]

        //consultar dados
})