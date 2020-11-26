//Função para adicionar linha de investimento
function addLinha(){
    var valorInvest = document.getElementById("idValor").value;
    var dataInvest = document.getElementById("idData").value;
    var tipo = document.getElementById("idRenda").value;
    var tableRF = document.getElementById("tableRF");
    var tabelaRV = document.getElementById("tabelaRV")
 
    if(valorInvest != '' && dataInvest != ''){
        if(tipo == "RENDA-FIXA"){
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

        }else{

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
            tabelaRV.appendChild(tr);    
        }
    }else{     
        alert("Não é possivel inserir um investimento sem o tipo, valor e a data!");
        window.location.reload();
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

//Chart
window.onload = function chart(){
    var valorF = 50;
    var valorV = 30;
    var ctx = document.getElementById("bar-chart")

    var myBarChart = new Chart(ctx, {
    type: 'pie',

    data: {
        labels: ['Renda Fixa', 'Renda Variável'],

        datasets: [{
            label: 'Valores por tipo de investimento',
            data:[valorF, valorF],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                ],
            }]
        }
    });
}
