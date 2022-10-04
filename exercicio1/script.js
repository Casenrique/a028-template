//Criando uma nova Tag li (elemento)

const itemNovo = document.createElement("li")
console.log(itemNovo)

//Criando conteúdo para ser colocado dentro da Tag
const conteudoItemNovo = document.createTextNode("Item 0")
console.log(conteudoItemNovo)

//Adicionando conteúdo dentro da Tag
itemNovo.appendChild(conteudoItemNovo)
console.log(itemNovo)

//Definir conteúdo de referência
const elementoReferencia = document.getElementById("lista")
console.log(elementoReferencia)

//Adicionar à tela
elementoReferencia.insertAdjacentElement("afterbegin", itemNovo)

//Criando e adicionando item 5
const itemFinal = document.createElement("li")

const conteudoItemFinal = document.createTextNode("Item 5")

itemFinal.appendChild(conteudoItemFinal)

elementoReferencia.insertAdjacentElement("beforeend", itemFinal)
