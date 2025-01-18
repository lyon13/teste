function varProduto(){
    let produto = document.getElementById("produto").value;
    let desconto = document.getElementById("desconto").value;
    
    let resultado = produto - (produto * (desconto / 100));
    document.getElementById("resultado").innerHTML = "O valor do produto com o desconto de " + desconto + "% eh de R$" + resultado;
     console.log(produto);
    if (desconto > 100) {
        document.getElementById("resultado").innerHTML = "Erro, desconto maior que 100%";
    }
    
    else if (desconto < 0) {
        document.getElementById("resultado").innerHTML = "Erro, desconto menor que 0%";


    
    }
     
    else if (isNaN(desconto)) {
        document.getElementById("resultado").innerHTML = "Erro, desconto nao eh um numero";

    }
    else if (isNaN(produto)) {
        document.getElementById("resultado").innerHTML = "Erro, preco nao eh um numero";
    }
    
}
function trocaCor(){
    const botaoUm = document.getElementById("botaoTrocacor");
    if(botaoUm.style.backgroundColor === "red"){

      botaoUm.style.backgroundColor = "green";           
    
    }
    else if(botaoUm.style.backgroundColor === "green"){
      botaoUm.style.backgroundColor = "";
    }
      else {
        botaoUm.style.backgroundColor = "red";
      }    
    
}

function enviar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado ="" ;
    
if(isNaN(num1) || isNaN(num2)){
    document.getElementById("result").innerHTML = "Erro, digite um numero";
}
else{
    switch(operador){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if(num2 === 0){
                resultado = "Erro, divisao por 0 é inválida";
                break;
            }
            else{
                resultado = num1 / num2;
            }
            
            break;
            default:
                resultado = "Erro, operador invalido";
        
    }
    document.getElementById("result").innerHTML = "O resultado eh: " + resultado;
}

   
}

let frutas = [];
function adicionar(){
    const fruta = [document.getElementById("frutas").value];
    frutas.push(fruta);
    document.getElementById("lista").innerHTML = "Frutas: " + frutas ;
}

    


