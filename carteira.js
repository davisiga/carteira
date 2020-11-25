//Função para adicionar linha de investimento
function addLinha(){
    var valorInvest = document.getElementById("idValor").value;
    var dataInvest = document.getElementById("idData").value;
    var tableRF = document.getElementById("tableRF");
    
    if(valorInvest == ''){
        alert("Não é possivel inserir um investimento sem o valor!");
    }else{
        alert(dataInvest)
        var tr = document.createElement("tr");
        var tdData  = document.createElement("td");
        tdData.textContent = dataInvest;
        tr.appendChild(tdData);
       
        var tdValor = document.createElement("td");
        tdValor.textContent = valorInvest;
        tr.appendChild(tdValor);

        var tdButton =  document.createElement("td");
        tdButton.appendChild(criarButton());
        tr.appendChild(tdButton)
        tableRF.appendChild(tr);


    }
}
//Função para criar um botão na linha e remover a mesma se acionado.    
function criarButton(){
    var button = document.createElement("button");
    button.textContent = "Remover"
    button.addEventListener('click', function(event){
        var returnButton = event.target;
        var colunButton = returnButton.parentNode;
        var lineButton = colunButton.parentNode;
        lineButton.remove();
    });
    return button;
}

// function maskValor(){
//     var valor = document.getElementById('idValor');
//     var er = new RegExp("[0-9]+");
//     if(er.test(valor.value)){
//         if(valor.value.length == 2 || valor.value.length == 6){
//           valor.value += ".";
//     }else if(rg.value.length == 10){
//       valor.value += "-";
//     }
// }else{
//         alert("Favor preencher apenas com números");
//         valor.value = "";
//     } 
// }