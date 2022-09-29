// Exercício 1
// function adicionaItem(event) {
//     event.preventDefault()

//     const lista = document.getElementById("container")
//     const novoItem = document.createElement("item")
//     novoItem.innerHTML = "123"
//     lista.appendChild(novoItem)


//     novoItem.insertAdjacentElement("beforeend")

// }

// Exercício 2
function adicionaItem(event) {
    event.preventDefault()

    const lista = document.getElementById("container")
    const novoItem = document.createElement("item")

    novoItem.onclick = function removeItem(event) {
        event.target.remove()
    }

    novoItem.classList.add("item")
    lista.appendChild(novoItem)
    lista.insertAdjacentElement("beforeend", novoItem) 
}

// Exercício 3
function removeItem(event) {
    event.target.remove()
}
