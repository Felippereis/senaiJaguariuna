var campo = document.querySelector("#campo");
var enviar = document.querySelector("#enviar");
const mensagens = document.querySelector(".mensagens");



function adicionar() {    
 
    pedido.campo = document.querySelector("#campo").value    
    console.log(JSON.stringify(pedido))
    criaCard(pedido)
}

function criaCard(obj) {
    //Cria o CARD na div Pedidos
    let card = document.createElement("div")
    let dados = document.createElement("div")
    let botao = document.createElement("button")
    card.className = "card"
    dados.className = "dados"
    dados.innerHTML = `<p>campo: ${obj.campo} </p>`
    botao.innerHTML = "<img width='50px' src='/exclama.jpg'>Importante"
   
    card.appendChild(dados)
    card.appendChild(botao)
    producao.appendChild(card)
}