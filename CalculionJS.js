var valor;
var enviar = document.getElementById("enviar")
var h3 = document.getElementById("h3for").innerHTML;
var z = 10;

var menu = document.getElementById("Menu");
var tabuada1 = document.getElementById("tabuada").innerHTML;
var j = 0;
var j1 = 0;

function TABUADA() {
    j1 += 1
    document.getElementById("TABLE").style.left = "300px";
    document.getElementById("h3for").style.left = "300px";
    document.getElementById("valor").style.left = "300px";
    document.getElementById("enviar").style.left = "630px";
    if (j1 == 2) {
        document.getElementById("TABLE").style.left = "-600px";
        document.getElementById("h3for").style.left = "-600px";
        document.getElementById("valor").style.left = "-600px";
        document.getElementById("enviar").style.left = "-630px";
        j1 = 0
    }
}



function MENU() {
    j += 1;
    document.getElementById("tabuada").style.left = "0px";



    document.getElementById("Categorias").style.height = "900px";
    document.getElementById("Categorias").style.padding = "10px";

    if (j1 == 1) {
        document.getElementById("TABLE").style.left = "300px";
        document.getElementById("h3for").style.left = "300px";
        document.getElementById("valor").style.left = "300px";
        document.getElementById("enviar").style.left = "630px";
    }

    if (j == 2) {
        document.getElementById("tabuada").style.left = "-3000px";

        document.getElementById("Categorias").style.height = "0px";
        document.getElementById("Categorias").style.padding = "0px";

        if (j1 == 1) {
            document.getElementById("TABLE").style.left = "10px";
            document.getElementById("h3for").style.left = "10px";
            document.getElementById("valor").style.left = "10px";
            document.getElementById("enviar").style.left = "340px";
        }

        j = 0
    }
}



enviar.onclick = function() {
    valor = document.querySelector("#valor");
    var k = Number.parseInt(valor.value)
    var valor01 = k * 1;
    var c = z * k
    document.getElementById("h3for").style.padding = "5px";
    document.getElementById("h3for").style.border = "2px solid white";

    for (var i = 1; i <= 9; i++) {
        valor01 = k * i;
        h3 = h3 + "<h3>" + k + " x  " + i + " = " + valor01 + "</h3>";
        document.getElementById("h3for").innerHTML = h3;
        if (i == 9) {
            h3 = h3 + "<h3>" + k + " x  " + z + " = " + c + "</h3>";
            document.getElementById("h3for").innerHTML = h3;
            h3 = "";
        }
    }
}
