var avisos = document.querySelector("#aviso")  //  select
var texto = document.querySelector("#texto") // text area
var link = document.querySelector("#link") /// input

// funcçao que ta no botao confirmar
function recados() {
    let avi = avisos.value  // avisos select
    let tx = texto. value  // texto text area
    let lk = link.value   // link input
    
  
  //  alert("teste")

    let mural = document.querySelector(".mural")  //div mural 
    let div = document.createElement("div")  // criando
    let paragrafo = document.createElement("p")  // criando o element p
    let lik = document.createElement("p")
    paragrafo.innerHTML=tx
    lik.innerHTML=lk

    let x = document.createElement("p")
    x.innerHTML="X"  // eecluir
    x.style.color = "red"
    x.style.backgroundColor="yellow"
    x.style.cursor = "pointer" 
    x.addEventListener("click",()=> {
        div.remove()
    })

        // ele pegara o valor do select option
    if(avi == "Normal"){        // decisão de escolha
        div.style. backgroundColor = "blue";
    }if(avi == "Importante"){
        div.style. backgroundColor = "green";
    }if(avi == "Urgente"){
        div.style. backgroundColor = "red";
    }



// adicionara 
    div.appendChild(x)
    div.appendChild(lik)
    div.appendChild(paragrafo)
    mural.appendChild(div)


  
}