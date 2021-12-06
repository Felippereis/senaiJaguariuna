// revisao de manipulaçao
/*
//let texto = document.querySelector("p")
let arr = document.querySelectorAll("p")


//innerHTML pega o que ta entre as tags
//console.log(texto)

//texto.innerHTML = "Olá Mundo !"

///console.log(texto.innerHTML)

arr.forEach(item => {
    console.log(item.innerHTML)
})

*/
/* --------
var valor1= document.querySelector("#v1")
var valor2= document.querySelector("#v2")
var result = document.querySelector("#h2")

function somar() {
    let v1 = valor1.value
    let v2 = valor2.value

    let res = Number(v1) + Number(v2)

    result.innerHTML = res

    if(res < 5) {
        result.style.color = "red"
    }else {
        result.style.color = "green"
    }
   
}

*/

let div = document.querySelector("div")
let divGerada = document.querySelector("div")
let body = document.querySelector("body")

//appendChild referencia o pai
body.appendChild(divGerada)

//div.className = "div1"
//divGerada.className = "div2"
//div.classList.add = "div1"
//divGerada.classList.add = "div2"

//console.log(div, divGerada)

div.remove()  // remove o elemento

