<?php
     $destino='antonypultay100@gmail.com';
     $asunto="Nuevo pedido";
     $nombre=$_POST ["nombre"];
     $apellido=$_POST ["apellido"];
     $producto=$_POST ["asunto"];
     $telefono=$_POST ["correo"];
     $direccion=$_POST ["direccion"];
     $mensaje=$_POST ["mensaje"];

     $contenido="Nombres: " . $nombre  . "\nApellidos: " . $apellido . "\nProductos pedidos: " . $producto . "\nTelefono: " . $telefono . "\nDireccion: " .$direccion . "\nComentario realizado por el cliente: " .$mensaje;
    
    mail($destino,$asunto, $contenido);

    header("location:gracias.html");
?>