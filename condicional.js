function media() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = (parseInt(val1) + parseInt(val2)) / 2;


    
    if(result ==10)
    alert('Gênio')
    else if(result == 0)
    alert('saido celular!')
    if (result >= 6)
        alert('Sua média foi: ' + result + '. Você foi aprovado!');
    else
        alert('Sua média foi: ' + result + '. Você foi reprovado, TMJ.');
}

function comparação() {
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;


    if (val1 == val2)
    alert('os valores são iguais')
    else
    if (val1 > val2)
    alert('valor 1 é maior que o valor 2')
    else
    alert('Valor 2 é maior que o vaor 1')

}