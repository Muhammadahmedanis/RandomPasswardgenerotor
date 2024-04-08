var passwardBox = document.getElementById("passward");
var num = "123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sym = "#&&$";
var length = 8;
var allChar = num + lowerCase+ upperCase + sym;

function genPass() {
    var passward = "";
    passward += num[Math.floor(Math.random() * num.length)];
    passward += upperCase[Math.floor(Math.random() * upperCase.length)];
    passward += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passward += sym[Math.floor(Math.random() * sym.length)];
    while (passward.length != length) {
        passward += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwardBox.value = passward;
}

function copy() {
    var q = passwardBox.select();
    document.execCommand("copy")
}
