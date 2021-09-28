var userName = document.querySelector("#userName");
userName.innerHTML = localStorage.getItem("name");


let totodos = document.querySelector("#totodos");
let toalbuns = document.querySelector("#toalbuns");
let toposts = document.querySelector("#toposts");

if(totodos !== null){
document.querySelector("#totodos").addEventListener("click", () => {
    window.location.href = "/todos";
});
}
if(toalbuns !== null){
document.querySelector("#toalbuns").addEventListener("click", () => {
    window.location.href = "/albuns";
});
}
if(toposts !== null){
document.querySelector("#toposts").addEventListener("click", () => {
    window.location.href = "/posts";
})
}