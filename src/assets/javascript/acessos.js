// AS FUNÇÕES DESSE MÓDULO SÃO UTILIZADAS NA LÓGICA DE TODOS OS MÉTODOS
// DE SELEÇÃO DE ACESSOS.


// DESABILITA OS OBJETOS NA SEQUENCIA DO FLUXOGRAMA
export function disableObject(ids=[]){
    ids.forEach((id) =>{
        // Altera a opacidade da div a partir do id
        document.querySelector(`#${id}`).style.opacity = "0.5"
        // Desabilita o input a partir da classe
        const elementos = document.querySelectorAll(`.${id}`)
        elementos.forEach(element => {
            element.disabled = true
        })
    })
}

// HABILITA O PRÓXIMO ELEMENTO DO FLUXOGRAMA
export function enableObjects(id){
    // Altera a opacidade da div a partir do id
    document.querySelector(`#${id}`).style.opacity = "1"
    // Desabilita o input a partir da classe
    const elementos = document.querySelectorAll(`.${id}`)
    elementos.forEach(element => {
        element.disabled = false
    })
}
