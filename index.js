document.addEventListener("DOMContentLoaded",function eng() {
    createQuestion("eng");
    resizeCanvas();
    generateRandomSquare();
});

window.addEventListener("resize",()=> {
    resizeCanvas();
    generateRandomSquare();

})
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
        document.getElementById("sle1").innerHTML = "<div id=\"sle1\" style=\"font-size: 100pt;\">" + eq1Desc + "</div>";
        document.getElementById("sle2").innerHTML = "<div id=\"sle1\" style=\"font-size: 100pt;\">" + eq2Desc + "</div>";
    } else {
        document.getElementById("sle1").innerHTML = "<div id=\"sle1\" style=\"font-size: 100pt;font-family:  'B Nazanin',serif;\">" + eq1Desc + "</div>";
        document.getElementById("sle2").innerHTML = "<div id=\"sle1\" style=\"font-size: 100pt;font-family:  'B Nazanin',serif;\">" + eq2Desc + "</div>";
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

function generateRandomSquare(){
    // console.log("aaaa");
    let diffCanvas = document.getElementById("diffCanvas");
    let context = diffCanvas.getContext("2d");
    // context.beginPath();
    // context.moveTo(0, 250);      // starting point at the top of the triangle
    // for(let i=0;i<1000;i++){
    //     context.lineTo(i/10, 250-(i/10)*(i/10)/100);     // line to right bottom corner
    //     // context.lineTo(50, 100);      // line to left bottom corner
    // }
    // context.stroke();
    //
    // // context.closePath();
    // context.beginPath();
    // context.moveTo(100, 250);      // starting point at the top of the triangle
    // for(let i=0;i<1000;i++){
    //     context.lineTo(100-i/10, 250-(i/10)*(i/10)/100);     // line to right bottom corner
    //     // context.lineTo(50, 100);      // line to left bottom corner
    // }
    // // context.closePath();
    //
    // context.stroke();            // draw the lines

    context.clearRect(0,0,diffCanvas.width,diffCanvas.height);

    // context.fillStyle = "green";
// Add a rectangle at (10, 10) with size 100x100 pixels
//     let diffCanvasWidth=window.innerWidth;
//     let diffCanvasHeight=window.outerHeight;
    let cellSize=20;
    let nX=Math.floor(window.outerWidth/cellSize)+2;
    let nY=Math.floor(window.outerHeight/cellSize)+2;
    for(let i=0;i<nX;i++){
        for(let j=0;j<nY;j++){
            context.fillStyle = Math.random()<0.5?"white":"#cccccc";
            context.fillRect(i*cellSize,j*cellSize,cellSize,cellSize);
        }
    }


    // context.
}


function resizeCanvas(){
    document.getElementById("diffCanvas").width=window.outerWidth;
    document.getElementById("diffCanvas").height=window.outerHeight;
}