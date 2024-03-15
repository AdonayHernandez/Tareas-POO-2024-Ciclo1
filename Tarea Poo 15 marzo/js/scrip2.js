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
            window.location.href = 'index.html'; // Redirigir a la página de perfil
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

function enviarPerfil() {
    alert('Registro completado con éxito');
    window.location.href = 'index.html'; // Redirigir a la página de perfil
}

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    enviarPerfil(); // Llamar a la función enviarPerfil al enviar el formulario
});
