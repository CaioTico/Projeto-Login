/* Código de validação de formulário de login */

function acessar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    if(!email || !senha){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }else{
       window.location.href = "aula2.html";
    }
}

// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY
var dadosLista = [];
function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    if(nomeUser){
        dadosLista.push(nomeUser);
    }
}