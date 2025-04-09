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


function exercicio02() {
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
        alert("Você é maior de idade")
    } else {
        alert("Você é menor de idade")
    }





}

function exercicioextra() {
    let nota = prompt("Coloque sua nota:");

    if (nota == 100) {
        alert("Aprovado com distinção")
    } else if (nota >= 60) {
        alert("Aprovado");
    } else {
        alert("Desaprovado");
    }

}

function exercicio04() {
    let idade = prompt("Coloque sua idade:");

    if (idade >= 18) {
        alert("Adulto");
    } else if (idade >= 13) {
        alert("Adolescente");
    } else if (idade >= 0) {
        alert("Criança");
    } else {
        alert("idade inválida");
    }
}

function exercicio05() {
    let nota = prompt("Digite sua nota");

    if (nota >= 60) {
        alert("Aprovado");
    } else {
        alert("Desaprovado")
    }
}

//intermediario

function intermediario01() {

    let num1 = prompt("Digite o primeiro número");
    let num2 = prompt("Digite o segundo número");
    let num3 = prompt("Digite o terceiro número");


    let maior;

    if (num1 >= num2 && num1 >= num3) { maior = num1; }
    else if (num2 >= num1 && num2 >= num3) { maior = num2 }
    else {
        maior = num3;
    }

    alert("O maior é:" + maior)




}

function intermediario02() {
    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    let operacao = prompt("Digite a operação: ");

    // let resultado;

    // if (operacao == "+") {
    //     resultado = n1 + n2;

    // } else if (operacao == "-") {
    //     resultado = n1 - n2;

    // } else if (operacao == "*") {
    //     resultado = n1 * n2;

    // } else if (operacao == "/") {
    //     resultado = n1 / n2;

    // }

    // alert(resultado);

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;

        case "-":
            resultado = n1 - n2;
            break;

        case "*":
            resultado = n1 * n2;
            break;

        case "/":
            resultado = n1 / n2;
            break;

        default:
            alert("Saia daqui agora")
            break;
    }

}

function intermediario03() {

    let valor = prompt("Coloque o valor da compra")
    let desconto = (10)

    if (valor >= 100) {
        alert(valor - desconto)

    } else {
        alert(valor);
    }

}


function intermediario04 () {

    let usuario = prompt("Coloque o Usuário: ")
    let senha = prompt("Coloque a Senha: ")

    if (usuario === "admin" && senha === "1234") {
        alert("Login Bem-sucedido");
    } else {
        alert("Acesso Negado");
    }
    
}

function avancado01 () { 

    let nota = prompt("Coloque sua nota de 0 - 100: ");
    
    if (nota >= 90) {
        alert("A")
    } else if (nota >= 80) {
        alert("B")
    } else if (nota >= 70) {
        alert("C")
    } else if (nota >= 60) {
        alert ("D")
    } else {
        alert ("F")
    } 

}
