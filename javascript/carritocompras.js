//Genere un alert donde indica el carrito con el listado de articulos a la venta el cual el usuario puede ir agregando para luego precionar 1 y finalizar con la compra.


//ARTICULOS A LA VENTA.

let articulo = "buda sentado";
let articulo1 = "buda rezando";
let articulo2 = "llamador de angeles";
let articulo3 = "atrapa sueños";
let articulo4 = "elefante sentado";
let articulo5 = "elefante mesa";
let articulo6 = "sahumerios";

// LISTADO DE ARTICULOS.

alert("Ingrese de los siguientes productos, cual quiere agregar al carrito:\n\n buda sentado [$900] \n buda rezando [$1000] \n llamador de angeles [$450] \n atrapa sueños [$300] \n elefante sentado [$1050] \n elefante mesa [$1200 \n sahumerios [$150]");

// FINALIZAR LA COMPRA.

let inicio = prompt("Ingrese los articulos que quiera comprar y para finalizar escriba [1]");
let finalizar = 1;


function carritoDeCompras(){

        while(inicio != 1){

        if(inicio == articulo){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo);
        }else if (inicio == articulo1){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo1);
        }else if (inicio == articulo2){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo2);
        }else if (inicio == articulo3){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo3);
        }else if (inicio == articulo4){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo4);
        }else if (inicio == articulo5){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo5);
        }else if (inicio == articulo6){
            alert("Se ha agregado al carrito de compras: " + inicio);
            console.log("Usted a comprado: " + articulo6);
        }else {
            alert("El articulo que ha ingresado no existe.");
        }
        inicio = prompt("Ingrese los articulos que quiera comprar y para finalizar escriba [1]");
    }
}

function finalizarCarrito() {
    if(finalizar == "1");
}

carritoDeCompras();
finalizarCarrito();