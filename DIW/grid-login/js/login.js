let usuarios = new Map();

// Agregar más usuarios de ejemplo
usuarios.set('juan', { correo: 'juan@gmail.com', contrasena: 'abc123' });
usuarios.set('maria', { correo: 'maria@example.com', contrasena: 'maria123' });
usuarios.set('pedro', { correo: 'pedro@example.com', contrasena: 'pedro123' });
usuarios.set('luisa', { correo: 'luisa@example.com', contrasena: 'luisa123' });

// Funciones de redirección
function irRegistro() {
  window.location.href = "register.html";  // te redirige al .html que indiques
}

function irLogin() {
  window.location.href = "login.html"; 
}

function irMain() {
  window.location.href = "index.html"; 
}

// Función de registro
function registrar() {
  const usuario = document.getElementById('usuario-reg').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena-reg').value.trim();
  const confirmarContrasena = document.getElementById('confirmar-contrasena').value.trim();

  if (contrasena !== confirmarContrasena) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  if (usuarios.has(usuario)) {
    alert("El usuario ya está registrado.");
    return;
  }

  // Agregar nuevo usuario al Map
  usuarios.set(usuario, { correo: correo, contrasena: contrasena }); 

  // Mostrar en consola la información del nuevo usuario
  console.log(`Nuevo usuario registrado: ${usuario}`);
  console.log(`Correo: ${correo}`);
  console.log(`Usuarios registrados actualmente:`);
  usuarios.forEach((valor, clave) => {
    console.log(`Usuario: ${clave}, Correo: ${valor.correo}`);
  });

  alert("Usuario registrado con éxito");
  irLogin(); 
}

// Función de login
function loguear() {
  const usuario = document.getElementById('usuario').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();

  if (usuarios.has(usuario)) {
    const datosUsuario = usuarios.get(usuario);
    if (datosUsuario.contrasena === contrasena) {
      alert("¡Bienvenido, " + usuario + "!");
      irMain();
    } else {
      alert("Contraseña incorrecta.");
    }
  } else {
    alert("El usuario no está registrado.");
    const usuariosExistentes = Array.from(usuarios.keys()); 
    console.log(`El usuario ${usuario} no está registrado. Usuarios existentes: ${usuariosExistentes}`);
  }
  }

  