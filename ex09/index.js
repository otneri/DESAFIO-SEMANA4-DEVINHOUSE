var num = document.getElementById('numero');
var botao = document.getElementById('botao');
var mostrarClassificação = document.getElementById('classificar');


function faixaEtaria (num)  {
    num = num.value

    if (num <=15) {
       resultado = 'Jovem';
    } else  if(num> 15 && num < 65) {
        resultado = 'Adulto';
    } else if (num >= 65) {
        resultado = 'Idoso';
    };
    
    return resultado;
};

botao.addEventListener('click',  () => { 
    mostrarClassificação.innerText = faixaEtaria (num);
});

    






