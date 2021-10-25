function total() {
    var tipo;
    var total;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
   
    if (categoria == 'Estudiante'){
        tipo = 0.2;
    }else if (categoria == 'Trainer'){
        tipo = 0.5;
    }else if (categoria == 'Juniors'){
        tipo = 0.85;
    }
    total = 200 * cantidad * tipo;
    /* Control de resultado
    console.log(cantidad);
    console.log(tipo);
    console.log(total);
    */
    document.getElementById('a-pagar').innerHTML = 'Total a pagar:$ '+total;
  }