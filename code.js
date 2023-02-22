let x;
let y = 0;

document.getElementById("generateBtn").onclick = function(){
    x = Math.floor(Math.random() * 20) + 1;
    document.getElementById("numbGen").innerHTML = x;
}
document.getElementById("clearBtn").onclick = function() {
    document.getElementById("numbGen").innerHTML = y;
}