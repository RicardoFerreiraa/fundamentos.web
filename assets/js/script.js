let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let pedido = document.querySelector('#pedido')

nome.style.width='40%'
email.style.width='40%'

function validarNome(){
    let txtnome=document.querySelector('#txtnome')
    if (nome.value.length < 3){
        txtnome.innerHTML ='Nome inválido'
        txtnome.style.color = 'red'
    }else {
        txtnome.innerHTML = 'Nome Válido'
        txtnome.style.color = 'green'
    }
}

function validarEmail(){
    let txtemail= document.querySelector('#txtemail')

    if (email.value.indexOf('@') == -1 ){
        txtemail.innerHTML ='E-mail Inválido'
        txtemail.style.color= 'red'
    }else {
        txtemail.innerHTML ='E-mail válido'
        txtemail.style.color='green'
    }
}

function validarPedido(){
    let txtpedido = document.querySelector('#txtpedido')

    if(pedido.value.length >= 200){
        txtpedido.innerHTML = 'Limite de 200 caracteres'
        txtpedido.style.color = 'red'
    }else{
        txtpedido.innerHTML = 'Texto Váldo'
        txtpedido.style.color = 'green'
    }
}