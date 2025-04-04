//Exercicio 1

// let numero = prompt("Digite um número:"); //23

// if (numero > 0) {
//     console.log("Positivo.");

// } else {

//     if (numero < 0) {

//         console.log("Negativo.")
//     } else { 

//         console.log("É Zero.")
//     }


// }

//Exercicio 2

let numero = prompt("Digite um número");

function solucao() {
    let resto = numero % 2;
    if (resto === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}

solucao();
