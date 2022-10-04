function insereItem(event) {
    let itemNovo = document.createElement("li")
    let input = document.getElementById("meu-input")
    itemNovo.innerHTML = input.value
    // itemNovo.appendChild(conteudoItemNovo.value)
    let referencia = document.getElementById("lista")
    referencia.insertAdjacentElement("beforeend", itemNovo)
    input.value = ""
}