

let botao = document.getElementById('btn');

function estacao () {
    console.log('oasos')
    let data = document.getElementById('data');
    let titulo = document.getElementById('titulo');
    
    let dia = data.substring(8,10); 
    let mes = data.substring(5,7);
    console.log(mes);
    console.log(dia);

    if (
        mes === "01" ||
        mes === "02" ||
        (mes === "12" && dia >= "22") ||
        (mes === "03" && dia <= "21")
    ) {
        titulo.innerHTML =
            "Verão" + '<img src="https://images.pexels.com/photos/12812235/pexels-photo-12812235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">'
        } else if (
            (mes === "03" && dia >= "22") ||
            mes === "04" ||
            mes === "05" ||
            (mes === "06" && dia <= "21")
        ) {
            titulo.innerHTML =
            "Outono" + '<img src="https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">'
        } else if (
            (mes === "06" && dia > "21") ||
        mes === "07" ||
        mes === "08" ||
        (mes === "09" && dia <= "21")) {
            titulo.innerHTML =
            "Inverno" + '<img src="https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">' 
        } else {
            resposta.innerHTML =
            "Primavera" + '<img src="https://images.pexels.com/photos/1040911/pexels-photo-1040911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">'
        };
};
botao.addEventListener ('click', estacao());

