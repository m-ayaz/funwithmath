
function aaaa(){
    // console.log("saasas");
    let x=Math.floor(Math.random()*20-10);
    let y=Math.floor(Math.random()*20-10);
    let a11,a12,a21,a22;
    while (true) {
         a11 = Math.floor(Math.random() * 20 - 10);
         a12 = Math.floor(Math.random() * 20 - 10);
         a21 = Math.floor(Math.random() * 20 - 10);
         a22 = Math.floor(Math.random() * 20 - 10);
        if(a11*a22-a21*a12!==0){
            break;
        }
    }
    let b1=a11*x+a12*y;
    let b2=a21*x+a22*y;

    // a11=0;
    // a12=1;

    let part11=stringifyMonomial(a11,"x");
    let part12=stringifyMonomial(a12,"y");
    let part21=stringifyMonomial(a21,"x");
    let part22=stringifyMonomial(a22,"y");
    let middle1=a12>0 && a11!==0?"+":"";
    let middle2=a22>0 && a21!==0?"+":"";
    let eq1Desc=part11+middle1+part12+"="+b1;
    let eq2Desc=part21+middle2+part22+"="+b2;
    // if(a11>0||a11<0){
    //     part1=a11+"x";
    // }else {
    //     part1="";
    // }
    // if(a12>0){
    //     part1="+"+a12+"y";
    // }else if(a12<0) {
    //     part1="+"+a12+"y";
    //
    // }
    document.getElementById("sle1").innerHTML="<div id=\"sle1\" style=\"font-size: 50pt;\">"+eq1Desc+"</div>";
    document.getElementById("sle2").innerHTML="<div id=\"sle1\" style=\"font-size: 50pt;\">"+eq2Desc+"</div>";
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