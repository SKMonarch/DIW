function loguear(){
    let usuarios = new Map();
    usuarios.set('juan',{email:'juan@gmail.com',contraseña: 'abc123'});

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contrasena").value;
     

    if(usuarios.has(user)){
        const datosUsuarios = usuarios.get(user);
        if(datosUsuarios.contraseña === pass){
            
            console.log("Contraseña correcta");
            }else{
                console.log("Contraseña incorrecta");
            }
    }else{
        
        console.log("Usuario no encontrado")
    }
}




let usuariosNuevos = new Map();

function registrar() {
    let user = document.getElementById("usuario").value;
    let email = document.getElementById("correo").value;
    let pass = document.getElementById("contrasena").value;
    let passConfirm = document.getElementById("confirmar-contrasena").value;

    
    if (pass !== passConfirm) {
        console.log("Las contraseñas no coinciden.");
        return;
    }

    
    if (usuariosNuevos.has(user)) {
        console.log("El usuario ya existe.");
    } else {
        
        usuariosNuevos.set(user, { email: email, contraseña: pass });
        console.log("Usuario registrado con éxito.");
    }
}
