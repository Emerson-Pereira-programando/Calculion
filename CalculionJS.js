var valor;
var enviar = document.querySelector("Button");
var h3 = document.getElementById("h3for").innerHTML;
var z = 10;
enviar.onclick = function() {
    valor = document.querySelector("#valor");
    var k = Number.parseInt(valor.value)
    var valor01 = k * 1;
    var c = z * k
    for (var i = 1; i <= 9; i++) {
        valor01 = k * i;
        h3 = h3 + "<h3>" + k + " x  " + i + " = " + valor01 + "</h3>";
        document.getElementById("h3for").innerHTML = h3;
        if (i == 9) {
            h3 = h3 + "<h3>" + k + " x  " + z + " = " + c + "——————————————" + "</h3>";
            document.getElementById("h3for").innerHTML = h3;
        }
    }
}
