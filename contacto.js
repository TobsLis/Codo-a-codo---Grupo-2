function validarEnviar() {

    if (document.fcontacto.nom.value.length <= 4) {
        alert("Debe escribir su nombre y apellido completos");
        document.fcontacto.nom.focus();
        return;
    }
    
    if (document.fcontacto.correo.validity.typeMismatch ||
        document.fcontacto.correo.value.length <=1) {
        alert("Debe ingresar una casilla de correo válida");
        document.fcontacto.correo.focus();
        return;
    }

    if (fcontacto.sexo[0].checked == false &&
        fcontacto.sexo[1].checked == false &&
        fcontacto.sexo[2].checked == false &&
        fcontacto.sexo[3].checked == false) {
        alert("Debe seleccionar un servicio");
        document.fcontacto.servicios.focus();
        return;
    }

    if (document.fcontacto.con.value.length <=1) {
        alert("Por favor, escriba el motivo de su consulta");
        document.fcontacto.con.focus();
        return;
    }

    alert("Su consulta ha sido enviada");
    document.fcontacto.submit();
    
   } 

   function sololetras(e){
    key = e.KeyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ ";
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
