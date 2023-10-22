function validarEnviar() {

    if (document.fturnos.nombre.value.length <= 2) {
        alert("Debe escribir su nombre");
        document.fturnos.nombre.focus();
        return;
    }
    
    if (document.fturnos.apellido.value.length <= 1) {
        alert("Debe escribir su apellido");
        document.fturnos.apellido.focus();
        return;
    }

    if (document.fturnos.telefono.value.length < 8 ||
        document.fturnos.telefono.value.length > 14) {
        alert("El teléfono debe contener entre 8 y 14 caracteres");
        document.fturnos.telefono.focus();
        return;
    }

    if (document.fturnos.email.validity.typeMismatch) {
        alert("Debe ingresar una casilla de correo válida");
        document.fturnos.email.focus();
        return;
    }
    
    if (document.fturnos.especialidad.selectedIndex == 0) {
        alert("Debe seleccionar un servicio.");
        document.fturnos.especialidad.focus();
        return;
    }

    if (document.fturnos.turno.selectedIndex == 0) {
        alert("Debe seleccionar un turno.");
        document.fturnos.turno.focus();
        return;
    }

    if (fturnos.opcion[0].checked == false &&
        fturnos.opcion[1].checked == false &&
        fturnos.opcion[2].checked == false &&
        fturnos.opcion[3].checked == false &&
        fturnos.opcion[4].checked == false &&
        fturnos.opcion[5].checked == false) {
        alert("Debe seleccionar un tipo de mascota");
        document.fturnos.mascota.focus();
        return;
    }

    alert("Nos comunicaremos a la brevedad para confirmar su turno");
    document.fturnos.submit();
    
   } 

   function sololetras(e){
    key = e.KeyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46";
    teclado_especial = false;
    for(var i in especiales){
        if (key == especiales[i]){
            teclado_especial=true;
            break
        }
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }

   }

   function solonumeros(e){
    key = e.KeyCode || e.which;
    teclado = String.fromCharCode(key);
    numeros = "0123456789";

    if(numeros.indexOf(teclado)==-1){
        return false;
    }

   }


   

  
  
    
    