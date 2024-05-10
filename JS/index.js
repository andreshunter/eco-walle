function limpiarCampos(){
    $('#txt_correo').val('');
    $('#txt_password').val('');
    $('#txt_nombre').val('');
    $('#txt_apellido').val('');
}

$(document).ready(function(){
    //REGISTRA CORREO
    $('#btn_registrar').click(function(){
        let mail = $('#txt_correo').val()
        let pass = $('#txt_password').val()
        let nombre = $('#txt_nombre').val()
        let apellido = $('#txt_apellido').val()


        let url ="https://programadormaldito.cl/route/usuario_duoc_almacenar"

        let datos = {
            mail: mail,
            pass: pass,
            nombre: nombre,
            apellido: apellido
        }

        $.ajax({
            url: url,
            type: "POST", //POST es para enviar informacion a la api // GET es para obtener la informacion
            contentType: "application/json",
            data: JSON.stringify(datos),

            success: function(response) {
                console.log(response)
                limpiarCampos();

            },
            error: function(status, error){
                console.log(error + " " + status)
                limpiarCampos();
            }
        })
    })

    //INICIO DE SESION -- LOGIN

    $('#btn_ingresar').click(function(){
        let mail = $('#txt_mail').val()
        let pass = $('#txt_pass').val()


        let url ="https://programadormaldito.cl/route/usuario_duoc_login"

        let datos = {
            mail: mail,
            pass: pass
        }

        $.ajax({
            url: url,
            type: "POST", //POST es para enviar informacion a la api // GET es para obtener la informacion
            contentType: "application/json",
            data: JSON.stringify(datos),
            
            success: function(response) {
                if(response[0].RESPUESTA == "0"){
                    Swal.fire({
                        title:"Ingreso invalido",
                        text: "Correo y/o contraseña es invalido",
                        icon: "error",
                        confirmButtonText:"OK"
                    });

                } else {
                    let correoP = {};
                    correoP.mail = mail;
                    
                    localStorage.setItem(codigo,JSON.stringify(correoP));

                    Swal.fire({
                        title:"Ingreso correcto",
                        icon: "success",
                        confirmButtonText:"OK"
                    });

                }
                console.log(response)
            },
            error: function(status, error){
                console.log(error + " " + status)
            }
        })
    })

    // Navegar
    $('#btn_tienda').click(function(){
        window.location.href = "tienda.html"; 
    });

    $('#btn_index').click(function(){
        window.location.href = "index.html"; 
    });
});