var cliente, endereco, valor, entregar, status, tabela;

function gerarTabela(){
    fetch('http://127.0.0.1:5000/tabela')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro ao obter os dados');
        }
        return response.json();
    })
    .then(data => {
        tabela = document.getElementById("tabelaTeste");

        var linha = tabela.insertRow(0);
        linha.insertCell(0).outerHTML = "<th id='pedidos-recente-grid-data'>Cliente</th>";
        linha.insertCell(1).outerHTML = "<th id='pedidos-recente-grid-data'>Endereço</th>";
        linha.insertCell(2).outerHTML = "<th id='pedidos-recente-grid-data'>Valor Pedido</th>";
        linha.insertCell(3).outerHTML = "<th id='pedidos-recente-grid-data'>Entregar</th>";  
        linha.insertCell(4).outerHTML = "<th id='pedidos-recente-grid-data'>Status</th>";
    
        data.forEach(row => {
            linha = tabela.insertRow(1);
            linha.insertCell(0).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[0]+"</td>";
            linha.insertCell(1).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[1]+"</td>";
            linha.insertCell(2).outerHTML ="<td id='pedidos-recentes-grid-data'>R$"+row[2]+"</td>";
            linha.insertCell(3).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[3]+"</td>";
            linha.insertCell(4).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[4]+"</td>";
        });
        console.log(data);
    })
    .catch(error => {
        console.error('Houve um problema ao obter os dados:', error);
    });
};

window.onload = gerarTabela;