/**
 *  var- global, 
 * let - local, 
 *  const - seu valor não pode ser alterado
 */

/**var a = 5;
var b = 10;

var soma = a ** b;

alert (soma);  */

/**
 *  !== Estritamente diferente
 * === Estritamente iguais
 * != Diferente
 * == igual
 */

/*
var a = "15";
var b = "15";

alert (a !== b);
*/


/**
 * Operadores relacionais lógicos
 * &&  E
 * || OU
 */
/**
const media = 5

var backend = 6;
var frontend = 7;

if(backend >= media && frontend >= media) {
    console.log("Aprovado")
}else {
    console.log("REPROVADO")
}
*/

/*
var nota1 = 6
var nota2 = 7
var nota3 = 2

var media = (nota1 + nota2 + nota3) /3

if(media >5){
    console.log("Aprovado", media)
}else {
    console.log("REPROVADO", media)
}
*/

/** laços de repetição */
/*
var notas = [10, 6, 2, 5, 7]
var nota = 0
*/
/**
// comeco do contador - notas.lenght  tamanho do vetor - i++ 
for(let i = 0; i < notas.length; i++) {
   //nota = nota + notas[i] referente abaixo mais simplificado
    nota += notas[i]
}

var media = nota / notas.length
console.log(media)
*/
/**
notas.forEach(item => {
    nota += item 
})

var media = nota / notas.length

console.log(media
)
*/
/*
var pos1 = 0
var pos2 = 0 
// map valor das posições e seu index
notas.map((item, index) => {
    if( item == 10){
         pos1 = index
    }
    if( item == 5){ 
        pos2 = index
    }    
})

console.log(notas)
// invertend os valores de vetores
var temp = notas[pos1]
notas[pos1] = notas[pos2]
notas[pos2] = temp
console.log(notas)
*/
/*
var notas = []
var nota = 0

while(nota > -1){
    nota = Number(prompt("Informe uma nota: "))
    if(notas>-1) notas.push(nota)
}

/* do {
    nota = Number(prompt("Informe uma nota: "))
    if(notas>-1) notas.push(nota)
}while(nota>-1)

console.log(notas)
*/


/* Arvore dom */

