//procurar o botão
document.querySelector('#add-time')

//quando clicar no botão
.addEventListener('click', cloneField)


//executar uma ação
function cloneField(){
    console.log('hello uordi')
    
    //duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldsContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ''
    })
     

    //colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}

