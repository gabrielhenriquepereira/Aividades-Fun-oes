//usei if e else para mostrar se a senha foi aceita  alem de const para senha e nome do usuario
function validarSenha(senha) {
    return senha.length >= 6;
}

function autenticarUsuario(usuario, senha) {
    if (validarSenha(senha)) {
        return `Acesso concedido para ${usuario}`;
    } else {
        return `Senha muito curta para o usuário ${usuario}`;
    }
}


const usuarioDigitado = prompt("Digite o nome de usuário:");
const senhaDigitada = prompt("Digite a sua senha:");

const resultado = autenticarUsuario(usuarioDigitado, senhaDigitada);


console.log(resultado);
alert(resultado);