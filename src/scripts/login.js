function validaUsuario(){
    var user = document.getElementById("user");
    var senha = document.getElementById("senha");

    console.log('User:'+user.value+'Senha:'+senha.value);
    if((user.value  == 'Jooj') & (senha.value == '977130')){
        window.open('home.html', '_self');
    }
    else{
        window.alert('Usuário ou senhas incorretos tente novamente.');
    }
}