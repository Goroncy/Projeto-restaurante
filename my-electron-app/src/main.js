function gerarTabela(){
    var tabela = document.getElementById("tabelaTeste");
    
    var row = tabela.insertRow(0);
    row.insertCell(0).outerHTML = "<th id='pedidos-recente-grid-data'>Cliente</th>"
    row.insertCell(1).outerHTML = "<th id='pedidos-recente-grid-data'>Endereço</th>"
    row.insertCell(2).outerHTML = "<th id='pedidos-recente-grid-data'>Valor Pedido</th>"
    row.insertCell(3).outerHTML = "<th id='pedidos-recente-grid-data'>Entregar</th>";  
    row.insertCell(4).outerHTML = "<th id='pedidos-recente-grid-data'>Status</th>";  // rather than innerHTML

    row = tabela.insertRow(1);
    row.insertCell(0).outerHTML ="<td id='pedidos-recentes-grid-data'>Dona Algusta</td>"
    row.insertCell(1).outerHTML ="<td id='pedidos-recentes-grid-data'>Tchurusbango tchurusbago, centro, 500</td>"
    row.insertCell(2).outerHTML ="<td id='pedidos-recentes-grid-data'>R$ 124,80</td>"
    row.insertCell(3).outerHTML ="<td id='pedidos-recentes-grid-data'>Sim</td>"
    row.insertCell(4).outerHTML ="<td id='pedidos-recentes-grid-data'>Entregue</td>"
}

window.onload = gerarTabela;