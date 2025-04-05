function exercicio01() {

let numero = prompt("Digite um número:"); //23

if (numero > 0) {
    console.log("Positivo.");

} else {

    if (numero < 0) {

        console.log("Negativo.")
    } else { 

        console.log("É Zero.")
    }


}
}


function solucao() {
   let numero = prompt("Digite um número");
    let resto = numero % 2;
    if (resto === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}

//Exercicio 3

function exercicio03() {


    debugger;

    let idade = prompt("Digite sua idade:");

    if (idade >= 18) {
        alert ("Você é maior de idade")
    } else {
        alert ("Você é menor de idade")
     }





}

function exercicioextra() {
    let nota = prompt("Coloque sua nota:");

    if (nota == 100) {
        alert ("Aprovado com distinção")
    } else if (nota >= 60) {
        alert ("Aprovado");
    } else {
        alert ("Desaprovado");
    }
    
}

function exercicio04() {
    let idade = prompt ("Coloque sua idade:");

    if (idade >= 18) {
        alert ("Adulto");
    } else if (idade >= 13) {
        alert ("Adolescente");
    } else if (idade >=0) {
        alert ("Criança"); 
    } else {
        alert ("idade inválida");
    }
}

function exercicio05() {
    let nota = prompt("Digite sua nota");

    if (nota >= 60) {
        alert ("Aprovado");
    } else {
        alert ("Desaprovado")
    }
}

function exercicio06 () {

    
}
