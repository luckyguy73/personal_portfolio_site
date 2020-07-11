let img, y = 0, rotYINT;

function rotateYDIV() {
    img = document.querySelector("#rotate3D");
    clearInterval(rotYINT);
    rotYINT = setInterval("startYRotate()", 1);
}

function startYRotate() {
    y++;
    img.style.transform = "rotateY(" + y + "deg)";
    if (y >= 360) {
        clearInterval(rotYINT);
        if (y >= 360) {
            y = 0;
        }
    }
}
