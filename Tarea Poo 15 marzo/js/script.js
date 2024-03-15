class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        this.usuario = usuario;
        this.pass = pass;
        this.bdusuario = bdusuario;
        this.bdpwd = bdpwd;
    }

    validar() {
        if (this.usuario === this.bdusuario && this.pass === this.bdpwd) {
            alertify.success('Inicio de sesión exitoso');
            window.location.href = 'perfil1.html'; // Redirigir a la página de perfil
        } else {
            alertify.error('Las credenciales no son correctas');
        }
    }
}

class Usuario extends Sesion {
    constructor(usuario, pass, bdusuario, bdpwd) {
        super(usuario, pass, bdusuario, bdpwd);
    }
}

function login() {
    let user = document.getElementById('usuario').value;
    let pwd = document.getElementById('pwd').value;

    let consulta = new Usuario(user, pwd, 'William', '123');
    consulta.validar();
}
