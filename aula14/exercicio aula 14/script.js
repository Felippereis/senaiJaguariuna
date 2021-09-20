var body = document.querySelector("body");
var card = document.querySelector(".card");




fetch("https://api.magicthegathering.io/v1/cards")
.then((response)=>{
    return response.json();

})
.then((obj)=> {
    obj.cards.forEach(item=> {
        let name = document.createElement("name");
        name.innerHTML = item.name;
        let type = document.createElement("type");
        type.innerHTML=item.type;
        let img = document.createElement("img");
        img.src = item.imageUrl;
        let p = document.createElement("p");
        p.innerHTML=item.artist;
        

   
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(p);
        card.appendChild(type);
    })
})    
.catch((err)=> {
    console.log(err);
})

