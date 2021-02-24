var rotate = 0;
var flag = 0;
function spin() {
    var random = Math.floor((Math.random() * 360) + 7200);
    var img = document.getElementById("spinner_img");
    var spin_button = document.getElementById("spin");
    spin_button.setAttribute("disabled", "true");
    rotate += random;
    img.setAttribute("style", "transform: rotate(" + rotate + "deg);");
    setTimeout(function () { 
        spin_button.removeAttribute("disabled");
    }, 5000);
}