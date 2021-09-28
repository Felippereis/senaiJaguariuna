var body = document.querySelector("body");

function loadData(e) {
    let file = e.files[0];

    let fr = new FileReader();

    fr.onload = () => {
        let data = JSON.parse(fr.result);
        console.log(data);
        generateHTML(data);
    }

    fr.readAsText(file);
}

function generateHTML(data) {

    data.forEach(element => {
        
        let title = document.createElement("h2");
        title.innerHTML = element.titulo;
    
        let autor = document.createElement("h4");
        autor.innerHTML = element.autor;
    
        let paginas = document.createElement("h4");
        paginas.innerHTML = element.paginas;
    
        let ano = document.createElement("h5");
        ano.innerHTML = element.ano;
    
        let capa = document.createElement("img");
        capa.src = element.capa;
        capa.style.width = "100px";
        
        body.appendChild(title);
        body.appendChild(autor);
        body.appendChild(paginas);
        body.appendChild(ano);
        body.appendChild(capa);

    });

   
    
}

