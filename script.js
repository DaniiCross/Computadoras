llenarSelect();
function llenarSelect(){
    let pc = ['Pc De Mesa Core I7','Pc Hp Prodesk 400','HP 21-B0003LA INTEL CELERON','HP 22-dd0522la','IdeaCentre AIO 5i','IdeaCentre 3i'];
    let select =document.getElementById("tipo");

        for(let i=0; i < pc.length; i++){
            let option = document.createElement("option"); 
            option.innerHTML = pc[i]; //metemos el texto en la opcion
            select.appendChild (option); //meter la opcion en el selec
    }
}


function calcularOrdenDeCompra(){
    const valorUnitario = 820000;

    cantidadComputadores = document.getElementById("cantidad").value

    total = valorUnitario * cantidadComputadores;

    var descuento = 0;

    switch(true){
        case total >= 1640000 && total <= 3280000:
            descuento = 15;
            break;
        case total > 3280000 && total <= 6560000:
            descuento = 25;
            break;
        case total > 6560000 && total <= 9840000:
            descuento = 35;
            break;
        case total > 9840000:
            descuento = 0;
            break;
    }

    let totalConDescuento = total * ((100-descuento)/100);
    let valorDescuento = total - totalConDescuento;

    document.getElementById("vCompra").value = total;
    document.getElementById("vDescuento").value = valorDescuento;
    document.getElementById("vTotal").value = totalConDescuento;
    document.getElementById("descuento").innerHTML = "Su descuento fue del " + descuento + "%";
}