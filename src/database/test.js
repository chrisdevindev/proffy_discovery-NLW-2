const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
        //inserindo dados
    proffyValue = {
        name: "Christian Castro",
        avatar: "https://avatars3.githubusercontent.com/u/47678397?s=460&u=61b6356f21130c8f107da90ab4b1fcf2fadad065&v=4",
        whatsapp: "8893686330",
        bio: "Lover of technology and programming.I’m currently working as Full Stack developer on @TecNorth and I helping young aspirants in the programming world at @DevInDev.br; I'm be specializing in ReactJs, React-Native and NodeJS.",

    }

    classValue = {
        subject: 1,
        cost: '100', 
    } 

    classScheduleValues = [
        {
            weekday: [0],
            time_from: [720],
            time_to:[1220]
        },
        { 
            weekday: [1],
            time_from: [520],
            time_to:[1220]
        }
    ]

    // criando proffys
    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //e trazer junto os dados do proffy

    const selecteClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)

    console.log(selecteClassesAndProffys)

    //

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
    `)
    console.log(selectClassesSchedules)
}) 