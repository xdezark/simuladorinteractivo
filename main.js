let entrada= prompt("Selecciona un producto \n 1-Papa $20 \n 2-Tomate $30 \n 3-Lechuga $15 \n 4-Zapallito $12 \n 5-Ningun producto" );
let productos = "";

while (entrada !="5"){
productos += entrada +"\n"
entrada = prompt("Selecciona un producto \n 1-Papa $20 \n 2-Tomate $30 \n 3-Lechuga $15 \n 4-Zapallito $12 \n 5-Ningun producto" );
}
console.log(productos);
