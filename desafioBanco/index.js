let contasClientes = [
    {
      id: 1,
      nome: 'Cliente 01',
      saldo: 500,
      senha: 111
    },
    {
      id: 2,
      nome: 'Cliente 02',
      saldo: 3000,
      senha: 222
    },  
    {
      id: 3,
      nome: 'Cliente 03',
      saldo: 5000,
      senha: 333
    },
  ];

//ex03

let selectProp = document.getElementById('proprietario');
let selectOption = document.querySelector('#conta');
let botao = document.querySelector('#botao');
let insereValor = document.querySelector('#insereValor');



var proprietariosDasContas = (nome , id) => {
    var opção = document.createElement('option'); 
    opção.value= id;
    opção.innerText= nome; 
    selectProp.appendChild(opção);
    return opção;
};

const popularSelect = () => {

  selectProp.innerHTML= '';
  proprietariosDasContas('(Selecione)', '0');
  contasClientes.forEach ((contasClientes) => {
    proprietariosDasContas(contasClientes.nome,contasClientes.id);
  })
};
window.onload = popularSelect(contasClientes);  

//ex04


var mensagem = document.getElementById('mensagem');
var exibeMensagem = (msg) => {
  mensagem.textContent=msg;
  return exibeMensagem ;
};

// selecionar a movimentação




let movimentacaoSelecionada = () => {
  botao.addEventListener('click' , function (e){
    e.preventDefault();
    
    if(insereValor.value === isNaN) {
      alert('Digite um valor!')
    };
    
    if (selectOption.value === "sacar") {
      capturaSaque();
    } else if (selectOption.value === "depositar"){
      capturaDeposito();
    }
    
    return;

  });

};

movimentacaoSelecionada();


let existeCliente = () => {
  let cliente = parseInt(document.getElementById('proprietario').value);
  let achaCliente = contasClientes[0].includes (cliente);
  if (achaCliente === 'true' ) {

  } else { 
    alert ('Conta não existe!');
  }
  return;
};



var id ='';
var valor = '';
var opcao = '';
var total = '';



let capturaSaque = () => {
  var id = parseInt(document.getElementById('proprietario').value);
  var valor = parseInt(document.getElementById('insereValor').value);
  var opcao = document.getElementById('conta').value;
  var operação = document.getElementById('operacao');
  var contaCliente= contasClientes.find(function (contaCliente) {
    return contaCliente.id === id;
  });
  let senha= parseInt(document.getElementById('senha').value) ;



  let sacar = () => {
    if (valor <=0 ) {
      exibeMensagem('Valor inválido!');
      return;
    }
    
    var saldoAntigo = contaCliente.saldo;
    contaCliente.saldo -= valor;
    var exibir = `Nome do cliente ${contaCliente.nome} <br/> Valor sacado R$${valor} <br/> Saldo atual R$${contaCliente.saldo} <br/> Saldo anterior R$${saldoAntigo}. `
    operação.innerHTML = exibir;
    console.log(saldoAntigo, contaCliente.saldo); 
  }
  
  if (contaCliente.senha !== senha) {
    
    mensagem.textContent = 'Senha inválida!';
    return;
  };
  
  if (valor > contaCliente.saldo) {
    operação.innerHTML = `Operação negada! Valor selecionado R$${valor}, valor em conta R$${contaCliente.saldo}. `;
  }  else if (opcao === 'sacar') {
    console.log('Saque selecionado!');
    sacar();
  };


  console.log(contaCliente);
  return id, valor, opcao

};

// ex 05 



let capturaDeposito = () => {
  var id = parseInt(document.getElementById('proprietario').value);
  var valor = parseInt(document.getElementById('insereValor').value);
  var opcao = document.getElementById('conta').value;
  var operação = document.getElementById('operacao');
  console.log(id, valor, opcao);
  let contaCliente= contasClientes.find(function (contaCliente) {
    return contaCliente.id === id;
  });
  let senha = parseInt(document.getElementById('senha').value);
  
  let depositar = () => {
    var saldoAntigo = contaCliente.saldo;
    contaCliente.saldo += valor;
    var exibir = `Nome do cliente ${contaCliente.nome} </br> Valor depositado R$${valor} </br> Saldo atual R$${contaCliente.saldo} </br> Saldo anterior R$${saldoAntigo}. `
    operação.innerHTML = exibir;
  
    console.log(saldoAntigo, contaCliente.saldo); 
  }

  if (contaCliente.senha !== senha) {
    
    mensagem.textContent = 'Senha inválida!';
    return;
  };
  
  if (opcao === 'depositar') {
    console.log('Depósito selecionado!');
    depositar();
  }

  console.log(contaCliente);
  return id, valor, opcao

}

//ex07










  