function listaProdutos() {
    var produtos = ["Brocolis", "Cenoura", "CocaColaaaaaa"];

    var listblock = document.querySelector("#listaEstoque"); 
    var listaEstoqueProdutos = document.createElement("ul");

    produtos.forEach(item => {
        var lista = document.createElement("li");
        lista.innerHTML = item;
        listaEstoqueProdutos.appendChild(lista);
        console.log(item);
    });
    listblock.appendChild(listaEstoqueProdutos);
}

window.onload = listaProdutos; 
