var body = document.querySelector("body");

fetch("https://api.magicthegathering.io/v1/cards")
.then((response)=>{
    return response.json();
})
.then((obj)=> {
    let img = document.createElement("img");
    img.src = obj.cards[0].imageUrl;
    body.appendChild(img);
    console.log(obj.cards[0]);
})
.catch((err)=> {
    console.log(err);
});