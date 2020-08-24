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

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject 
}
