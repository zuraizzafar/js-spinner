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
        var check = ((rotate - (7200 * flag)) % 360);
        if (check >= 20 && check <= 66) {
            alert("Red!");
        }
        else if (check >= 67 && check <= 112) {
            alert("Orange!");
        }
        else if (check >= 113 && check <= 156) {
            alert("Yellow!");
        }
        else if (check >= 157 && check <= 199) {
            alert("Black!");
        }
        else if (check >= 200 && check <= 241) {
            alert("Green!");
        }
        else if (check >= 242 && check <= 285) {
            alert("Blue!");
        }
        else if (check >= 286 && check <= 331) {
            alert("Purple!");
        }
        else if (check >= 332 && check <= 379) {
            alert("Pink!");
        }
        ++flag;
    }, 5000);
}

$(document).on("click", ".wheel", function() {
    spin();
})