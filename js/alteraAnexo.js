var formulario = document.getElementById('formulario');
var anexoI = document.getElementById('anexoIform').innerHTML;
console.log( anexoI );

function alterAttchementHtml() {
    formulario.innerHTML = "<form action=''><div><label>Faturamento ultimos 12 meses</label><input type='text' name='FatAcumulado'></div><div><label>Vendas</label><input type='text' name='Vendas'></div></form>"
}

function alterAttchementHtml1() {
    formulario.innerHTML = anexoI;
}