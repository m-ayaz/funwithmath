document.addEventListener("DOMContentLoaded",function eng() {
    createQuestion("eng");
});
function createQuestion(lang) {
    const MAX = 20;
    let x = Math.floor(Math.random() * 2 * MAX - MAX);
    let y = Math.floor(Math.random() * 2 * MAX - MAX);
    let a11, a12, a21, a22;

    while (true) {
        a11 = Math.floor(Math.random() * 2 * MAX - MAX);
        a12 = Math.floor(Math.random() * 2 * MAX - MAX);
        a21 = Math.floor(Math.random() * 2 * MAX - MAX);
        a22 = Math.floor(Math.random() * 2 * MAX - MAX);
        if (a11 * a22 - a21 * a12 !== 0) {
            break;
        }
    }
    let b1 = a11 * x + a12 * y;
    let b2 = a21 * x + a22 * y;

    let part11 = stringifyMonomial(a11, "x");
    let part12 = stringifyMonomial(a12, "y");
    let part21 = stringifyMonomial(a21, "x");
    let part22 = stringifyMonomial(a22, "y");
    let middle1 = a12 > 0 && a11 !== 0 ? "+" : "";
    let middle2 = a22 > 0 && a21 !== 0 ? "+" : "";
    let eq1Desc = part11 + middle1 + part12 + "=" + b1;
    let eq2Desc = part21 + middle2 + part22 + "=" + b2;

    if (lang === "eng") {
        document.getElementById("sle1").innerHTML = "<div id=\"sle1\" style=\"font-size: 50pt;\">" + eq1Desc + "</div>";
        document.getElementById("sle2").innerHTML = "<div id=\"sle1\" style=\"font-size: 50pt;\">" + eq2Desc + "</div>";
    } else {
        document.getElementById("sle1").innerHTML = "<div id=\"sle1\" style=\"font-size: 50pt;font-family:  'B Nazanin',serif;\">" + eq1Desc + "</div>";
        document.getElementById("sle2").innerHTML = "<div id=\"sle1\" style=\"font-size: 50pt;font-family:  'B Nazanin',serif;\">" + eq2Desc + "</div>";
    }

}

function stringifyMonomial(coeff,varStr) {
    if (coeff === 0) {
        return "";
    } else if (coeff === 1) {
        return "" + varStr;
    } else if (coeff === -1) {
        return "-" + varStr;
    } else {
        return coeff + "" + varStr;
    }
}