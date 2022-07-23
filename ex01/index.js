let contasClientes = [
    {
      id: 1,
      nome: 'Cliente 01',
      saldo: 500,
    },
    {
      id: 2,
      nome: 'Cliente 02',
      saldo: 3000,
    },  
    {
      id: 3,
      nome: 'Cliente 03',
      saldo: 5000,
    },
  ];

//ex03

let selectProp = document.getElementById('proprietario');
let selectOption = document.querySelector('#conta');
let botao = document.querySelector('#botao');
let insereValor = document.querySelector('#insereValor  ');


var proprietariosDasContas = (nome , id) => {
    var opção = document.createElement('option'); 
    opção.value= id;
    opção.innerText= nome; 
    return opção;
};

const popularSelect = () => {
  contasClientes.forEach ((contasClientes) => {
    selectProp.appendChild(proprietariosDasContas(contasClientes.nome,contasClientes.id));
  })
};
window.onload = popularSelect(contasClientes);  

//ex04


// selecionar a movimentação

let movimentacaoSelecionada = () => {
  botao.addEventListener('click' , function (e){
    e.preventDefault();
    if (selectOption.value === "sacar") {
      alert('Saque selecionado');
      capturaSaque()
    } else if (selectOption.value === "depositar"){
      alert('Deposito selecionado');
      capturaDeposito();
    }
    
    return;
  });

};

movimentacaoSelecionada()

var id ='';
var valor = '';
var opcao = '';
var total = '';


let capturaSaque = () => {
  var id = parseInt(document.getElementById('proprietario').value);
  var valor = parseInt(document.getElementById('insereValor').value);
  var opcao = document.getElementById('conta').value;
  var operação = document.getElementById('operacao');
  console.log(id, valor, opcao);
  let contaCliente= contasClientes.find(function (contaCliente) {
    return contaCliente.id === id;
  });



  let sacar = () => {
    var saldoAntigo = contaCliente.saldo;
    contaCliente.saldo -= valor;
    var exibir = `Nome do cliente ${contaCliente.nome}, Valor sacado ${valor}, Saldo atual ${contaCliente.saldo}, Saldo anterior ${saldoAntigo}. `
    operação.innerHTML = exibir;

    console.log(saldoAntigo, contaCliente.saldo); 
  }

  if (valor > contaCliente.saldo) {
    operação.innerHTML = `Operação negada! Valor selecionado ${valor}, valor em conta ${contaCliente.saldo}. `;
  } else if (opcao === 'sacar') {
    console.log('Saque selecionado!');
    sacar();
  }


  console.log(contaCliente);
  return id, valor, opcao

};

// ex 05 

/*Vamos

3. Criar função para depositar dinheiro que deve receber como parâmetro o valor a ser depositado e o id da conta;
3.1. Se o valor for menor ou igual zero deve exibir a mensagem de valor inválido e não realizar nenhuma operação;
3.2. Se o valor for maior que zero deve exibir a mensagem informado que o deposito ocorreu com sucesso e o saldo atual da conta após o deposito, além de atualizar o array com esse novo valor;

_Dica: Dê uma olhadinha em find, map, if..._*/





let capturaDeposito = () => {
  var id = parseInt(document.getElementById('proprietario').value);
  var valor = parseInt(document.getElementById('insereValor').value);
  var opcao = document.getElementById('conta').value;
  var operação = document.getElementById('operacao');
  console.log(id, valor, opcao);
  let contaCliente= contasClientes.find(function (contaCliente) {
    return contaCliente.id === id;
  });
  
  let depositar = () => {
    var saldoAntigo = contaCliente.saldo;
    contaCliente.saldo += valor;
    var exibir = `Nome do cliente ${contaCliente.nome}, Valor depositado ${valor}, Saldo atual ${contaCliente.saldo}, Saldo anterior ${saldoAntigo}. `
    operação.innerHTML = exibir;
  
    console.log(saldoAntigo, contaCliente.saldo); 
  }
  
  if (opcao === 'depositar') {
    console.log('Depósito selecionado!');
    depositar();
  }

  console.log(contaCliente);
  return id, valor, opcao

}



















// function sacarDinheiro () {
//   let selecionarCliente = selectProp.
//   options[selectProp.selectedIndex].value;

//   let achaIndice = contasClientes.findIndex(Element => Element.nome === selecionarCliente);

//   let dadosDoCliente = '';
//   if (achaIndice !== -1) {
//     dadosDoCliente = contasClientes[achaIndice];
//   }

//   let valoremConta = dadosDoCliente.saldo;
//   let dinheiroASacar = parseInt(insereValor.value); 
//   if (dinheiroASacar <= 0) {
//     alert('Valor inválido!');

//   }else if (dinheiroASacar > valoremConta) {
//     alert ('Saldo insuficiente!')
//   } else if (dinheiroASacar < valoremConta) {
//     valoremConta -= dinheiroASacar;
//     alert(`Saque bem sucedido! Você ainda possui ${valorEmConta} reais em sua conta.`);    
//     return valorEmConta;
//   }

// };



// function quandoClica () {
//   if (qualOperação === 'sacar') {
//     sacarDinheiro();   
//   } else if (qualOperação === 'depositar') {
//     alert('depósito')
//   }
// }

// var sacar = (() => {


//   contasClientes.map ((cliente) => { 
//     return { id: cliente.id, nome: cliente.nome, saldo: cliente.saldo
//     };

//   });
// } );



  


  