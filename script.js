let thickness = 5;
let slopeness = 5;
function color() {
    n = Math.floor(Math.random() * 360) + 1;
    c = `hsla(${n},100%,50%,1)`;
    return (c);
}
function digit() {
    let xColor = Math.floor(Math.random() * 60) + 20;
    let xChar = Math.random() >= 0.50 ? "0" : "1";
    let x = document.createElement("span");

    if (xColor > 75) {
        x.style.color = color();
        xChar = "+";

    }
    else {
        x.style.color = "hsla(120,100%, " + xColor + "%,1)";
    }
    x.innerHTML = xChar;
    return x;
}
function digitline(x) {

    for (let i = 0; i < x; i++) {
        document.body.appendChild(digit())
    }
}

function br() {
    document.body.appendChild(document.createElement("br"))
}
function triangle(x) {
    for (let i = 0; i < x; i++) {
        digitline(i * parseInt(slopeness) + parseInt(thickness));
        if (i != x) {
            br()
        }
    }
}

function triangleTop(x) {
    for (let i = 0; i <x; i++) {
        digitline(i);
        br();
    }
}
function stump() {
    for (let i = 0; i <slopeness-1; i++) {
        digitline(thickness);
        br()
    }
}
function saludo() {
    let sa = document.createElement("p");
    sa.innerHTML=" HAPPY NEW YEAR";
    document.body.appendChild(sa)
}
function tree() {
    document.body.innerHTML = '';
    triangleTop(5);
    triangle(2);
    triangle(5);
    triangle(8);
   stump();
   saludo()
}
setInterval(function() {
    tree();
},200);