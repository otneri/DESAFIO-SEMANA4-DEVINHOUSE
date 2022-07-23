let num = parseOntdocument.getElementById ('numeroAqui').value;
let botao = document. getElementById ('botao');
let mensagem = document. getElementById ('mensagem');



const resultado =  (numero) => { 
    if (num % 2 == 0) {
       numero  =  'Par ✌'
    } else{
        numero = 'Ímpar ☝' ;
    }
    return;
}; 



botao.addEventListener ('click', (numero) => {
    mensagem.innerText = resultado(numero) ;
});
