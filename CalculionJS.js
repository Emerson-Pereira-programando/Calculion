var valor;
var enviar = document.querySelector("Button");
var h3 = document.getElementById("h3for").innerHTML;
enviar.onclick = function() {
    valor = document.querySelector("#valor");
    var k = Number.parseInt(valor.value)
    var valor01 = k * 1;
    for (var i = 1; i <= 10; i++) {
        valor01 = k * i;
        h3 = h3 + "<h3>" + k + " x  " + i + " = " + valor01 + "</h3>";
        document.getElementById("h3for").innerHTML = h3;
    }
}










