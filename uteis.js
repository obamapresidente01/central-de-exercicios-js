function exemploDeFilter() {

    let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosFiltrados = numeros.filter(numero => numero > 2); 
    console.log(numerosFiltrados);

}

function exercicio01filter() {

const numeros =  [2, 3, 6, 8, 84, 23, 55, 73, 7, 9, 42, 23];

const maioresQueSete = numeros.filter(numero => numero > 5);
console.log(maioresQueSete);

}

function exercicio02filter() {
    const nomes = [Andre, Caio, Lucas, Matheus, Luiz, Gabriel, Adriano, Ricardo, Anderson]

    const nomesComA = nomes.filter(nome => nome > nome.startWith(A));
    console.log(nomesComA); 
    
}

function exercicio03filter() {
    const MeusProdutos = [
        {nome: "Whiskey com Energetico Mansao Maromba", preco: 32},
        {nome: "Boneco Enaldinho", preco: 12},
        {nome: "Ovo de Pascoa do Free Fire", preco: 45},
        {nome: "Meu Curso", preco: 75},
        {nome: "Ovo de Pascoa do AuthenticGames", preco: 80}
    ];

    const produtosBaratos = MeusProdutos.filter(produto => produto.preco < 50);
    alert (JSON.stringify(produtosBaratos));
}

function exercicio01Find() {
    let nomes  = ["Augusto", "Bruno", "Henrique", "Carlos", "Yuri", "Alberto"];
    let bruno = nomes.find(nome => nome == "Bruno");
    console.log(bruno);

}

function exercicio02Find() {
    let listausuarios = [
        { id: 1, nome: "Kaio"},
        { id: 2, nome: "Lucas"},
        { id: 3, nome: "Hugo"}
    ];

    let usuarioEncontrado = listausuarios.find(usuario + usuario.id == 2);

    console.log(usuarioEncontrado);

}

function exemploMap () {

    let numeros = [1, 2, 3, 4, 5];

    let numerosDodrados = numeros.map(numero => numero * 2)

    console.log(numerosDodrados);
}

function exercicio01map() {

    const palavras = ["ola", "mundo", "javascript"];

    const enfatizadas = palavras.map(palavra => palavra + "!!!");
    console.log(enfatizadas); 

    
}

function exercicio02map() {
    const nomes = ["Lucas", "Memphis", "Messi"]
    const nomesMaiuculos =
}