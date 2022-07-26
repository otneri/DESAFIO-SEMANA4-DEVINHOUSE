let num = document.getElementById ('numeroAqui');
let botao = document. getElementById ('botao');
let mensagem = document. getElementById ('mensagem');


const verificaParImpar =  () => { 
    var numero = parseInt(num.value);
    
    if (isNaN(numero)) {
        mensagem.textContent = 'Digite somente número.';
        return;
    }

    const resultado = numero % 2 === 0 ? 'par' : 'ímpar';
    mensagem.textContent = `O número ${numero} é ${resultado}. `;

    
};



botao.onclick = verificaParImpar ;



