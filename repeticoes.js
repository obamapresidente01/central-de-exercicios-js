function exemplofor() {

    // for
    // 1o = declarar contador.
    // 2o = condição (enquanto).
    // 3o = incremento.

    for (let contador = 1; contador <= 5; contador++) {

        alert(contador);

    }
}

function exemplowhile() {

    let contador = 1;

    while (contador <= 5); {

        console.log(contador);
        contador++;
    }
}

function exemplodowhile() {
    let contador = 1;

    do {

        alert(contador);
        contador++;

    } while (contador <= 5);
}

function exercicio01() {
    for (let contador = 1; contador <= 10; contador++) {

        alert(contador);

    }
}

function exercicio02() {
    let numero = parseInt(prompt("Digite um numero: ")); //parseInt serve para converter string por um numero inteiro

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    alert(resultado);
}



function exercicio03() {

    let N = parseInt(prompt("Digite um numero N: "));
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    console.log(soma);


}

function intermediario01() {
    let contador = 1

    while (contador <= 50) {
        if (contador % 2 === 0)
            console.log(contador)
    }
    contador++
}

intermediario01 ()




