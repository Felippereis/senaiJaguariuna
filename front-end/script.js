//Adiciona um valor ao localStorage
localStorage.setItem("id",35);

//Captura um valor do localStorage
//localStorage.getItem("id");  // essa e um forma debaixo tbm
let id = localStorage.getItem("id");

//Apaga um valor especifico do localStorage
localStorage.removeItem("id");

//Limpa todos os valores do localStorage
localStorage.clear();

let data = '{"nome":"Fulano":"telefones":["1998987458","1915151"]}';

console.log(data);