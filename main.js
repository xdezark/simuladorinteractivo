function seleccionaProducto(){
    let seleccion;
    do{
    seleccion = parseInt(prompt("Selecciona un producto: \n1 Papa \n2 Tomate \n3 Zapallito \n4 Huevos"));
    }while(seleccion != 1 && seleccion !=2 && seleccion !=3 && seleccion !=4);


switch(seleccion){
    case 1:
    return "Papa";
    case 2:
    return "Tomate";
    case 3:
    return "Zapallito";
    case 4:
    return "Huevos";
}
}

function validarPrecio(producto){
    if(producto==="Papa"){
        return 100;
    }
    else if (producto==="Tomate"){
        return 300;
    }
    else if (producto==="Zapallito"){
        return 250;
    }
    else{
        return 1000;
    }
}

function cobrar(nombre,precio){
alert("Seleccionaste "+ nombre+"\nPrecio: $"+precio);
let pago= parseInt(prompt("Con cuanto pagas?"))
if(pago>precio){
    alert("Gracias! Tu vuelto es "+ (pago - precio))
}else if (pago===precio){
    alert("Gracias por tu compra!")
}
else{
    alert("El monto ingresado es insuficiente")
}
}



let productoSelect = seleccionaProducto();
let precioProducto = validarPrecio(productoSelect);
cobrar(productoSelect,precioProducto);

seleccionaProducto();
 