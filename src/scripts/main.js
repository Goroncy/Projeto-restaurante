var cliente, endereco, valor, entregar, status, tabela;

function carregarJanela(){
    gerarTabela();
    gerarTotalPedidos();
    gerarTotalValor();
}

function inserirCabecalhoTabela(linha){
    linha = tabela.insertRow(0);
    linha.insertCell(0).outerHTML = "<th id='pedidos-recente-grid-data'>Cliente</th>";
    linha.insertCell(1).outerHTML = "<th id='pedidos-recente-grid-data'>Endereço</th>";
    linha.insertCell(2).outerHTML = "<th id='pedidos-recente-grid-data'>Valor Pedido</th>";
    linha.insertCell(3).outerHTML = "<th id='pedidos-recente-grid-data'>Entregar</th>";  
    linha.insertCell(4).outerHTML = "<th id='pedidos-recente-grid-data'>Status</th>";
}

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

        var linha;
        inserirCabecalhoTabela(linha);
        var index = 1;
        data.forEach(row => {
            linha = tabela.insertRow(index);
            linha.insertCell(0).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[0]+"</td>";
            linha.insertCell(1).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[1]+"</td>";
            linha.insertCell(2).outerHTML ="<td id='pedidos-recentes-grid-data'>R$"+row[2]+"</td>";
            linha.insertCell(3).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[3]+"</td>";
            linha.insertCell(4).outerHTML ="<td id='pedidos-recentes-grid-data'>"+row[4]+"</td>";
            index++;
        });
        console.log(data);
    })
    .catch(error => {
        console.error('Houve um problema ao obter os dados:', error);
    });
};

function gerarTotalPedidos(){
    fetch('http://127.0.0.1:5000/totalPedidos')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro ao obter os dados');
        }
        return response.json();
    })
    .then(data => {
        var TotalPedidos = document.getElementById("display-text-Tpedidos");
        data.forEach(row => {
            TotalPedidos.innerHTML = row[0];
            console.log('Total pedidos: ' + row[0]);
        });
    })
    .catch(error => {
        console.error('Houve um problema ao obter os dados:', error);
    });
}

function gerarTotalValor(){
    fetch('http://127.0.0.1:5000/totalValor')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro ao obter os dados');
        }
        return response.json();
    })
    .then(data => {
        var TotalValor = document.getElementById("display-text-Tvalor");
        data.forEach(row => {
            TotalValor.innerHTML = 'R$ ' + row[0].toFixed(2);
            console.log('Total Valor: ' + row[0]);
        });
    })
    .catch(error => {
        console.error('Houve um problema ao obter os dados:', error);
    });
}

window.onload = carregarJanela();