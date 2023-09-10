//EJERCICIO 1
let tengoBorde = false; //variable "de paso" que uso para validar el estado de uno u otro

function activarBorde() {
    
    const imagen = document.getElementById('img-bici');
    let p = document.querySelector('#instruccion');
    

    if (tengoBorde) { 
        imagen.style.border = 'none'; 
        p.innerHTML = 'Imagen sin borde.';
    } else {
        imagen.style.border = '2px solid red'; 
        p.innerHTML = 'Imagen con borde.';
    }
    
    tengoBorde = !tengoBorde;
}

//EJERCICIO 2


function verificarCantidades(){

    let pack1 = document.querySelector('#pack1').value;
    let pack2 = document.querySelector('#pack2').value;
    let pack3 = document.querySelector('#pack3').value;
    let total = +pack1 + +pack2 + +pack3;
    let p = document.querySelector('#dimeLaCantidad');
    
    if(total<= 0){
        p.innerHTML = '<span style="color: red;">La suma total de los stickers debe ser mayor a cero.</span>';
        return false;
    }

    if(total <= 10){
        p.innerHTML = 'Llevas ' + total + ' stickers';
    }

    if(total > 10){
        
        p.innerHTML = '<span style="color: red;">Llevas demasiados stickers.</span>';
    }    
}

//EJERCICIO 3

function verificarPassword(){

let digitoPrimer = document.getElementById('primerDigito').value;
let digitoSegun = document.getElementById('segundoDigito').value;
let digitoTercer = document.getElementById('tercerDigito').value;
let password = digitoPrimer+digitoSegun+digitoTercer;

let p = document.querySelector('#dimeSiEstoyBien');

if(password == '911'){
    p.innerHTML = '<span style="color: green;">La password 1 es correcta.</span>';
} else if (password == '714'){
    p.innerHTML = '<span style="color: green;">La password 2 es correcta.</span>';   
} else{
    p.innerHTML = '<span style="color: red;">Password incorrecta.</span>';   
}


}