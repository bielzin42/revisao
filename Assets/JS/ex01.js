document.getElementById("botaoum").addEventListener("click", function(e) {
    var nome = document.getElementById("nome").value;

    //VALIDANDO NOME

    if (nome.length < 3) {        
        /* Tem erro - preventDefault() vai cancelar a ação de submit - ele previne o acontecimento do event submit*/
        e.preventDefault();
        document.getElementById("nome").style.borderColor="red";
    }
    else {
        document.getElementById("nome").style.borderColor="green";
    }

    //FIM DA VALIDAÇÃO DO NOME

    //VALIDANDO E-MAIL

    var email = document.getElementById("email").value

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.value < 6)
    {
        e.preventDefault();
        document.getElementById("email").style.borderColor="red"
    }
    else {
        document.getElementById("email").style.borderColor="green"
    }

    //FIM DA VALIDAÇÃO DO E-MAIL
});
