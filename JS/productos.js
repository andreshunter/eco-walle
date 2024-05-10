function limpiarCampos(){
    $('#txt_codigo').val('');
    $('#txt_nombre').val('');
    $('#txt_descripcion').val('');
    $('#txt_precio').val('');
}

$(document).ready(function() {
    //LIMPIA LOS CAMPOS
    $('#btn_limpiar').click(function(){
        $('#div_formulario').find('input[type="text"], textarea').val(''); 
    });


    $('#btn_navegar').click(function(){
        window.location.href = "buscador.html"; ///PARA NAVEGAR
    });


    $('#btn_buscar').click(function(){
        let codigo = $('#txt_codigo').val();//busca el producto por el codigo
        let producto = JSON.parse(localStorage.getItem(codigo));//trae el producto del localstore 
        //get trae  -- set ingresa

        if(producto){
            console.log(producto);
        } else{
            console.log('PRODUCTO NO ENCONTRADO');
        }
    })
});

function almacenarProducto(){
    //let codigo = document.getElementById("txt_codigo").value

    let codigo = $('#txt_codigo').val();
    let nombre = $('#txt_nombre').val();
    let descripcion = $('#txt_descripcion').val();
    let precio = $('txt_precio').val();

    if(codigo ==''||nombre==''||descripcion==''||precio==''){

        Swal.fire({
            title:"Informacion",
            text: "Todos los campos son obligatorios",
            icon: "error",
            confirmButtonText:"OK"
        });

        limpiarCampos();
    }else{
        localStorage.getItem(codigo,JSON.stringify(correoProducto.mail));
        
        let producto = {};
        producto.codigo = codigo;
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.correoCreador = correoProducto.mail;
        

        localStorage.setItem(codigo,JSON.stringify(producto));

        Swal.fire({
            title:"Informacion",
            text: "Producto almacendo correctamente",
            icon: "success",
            confirmButtonText:"OK"
        });
        limpiarCampos();

    }
    

}