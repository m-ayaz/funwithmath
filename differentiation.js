document.addEventListener("DOMContentLoaded",aaa);
// document.addEventListener("mousemove",()=>console.log("aaaaaaa"))

function aaa(){
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

    context.clearRect(0,0,300,300);

    // context.fillStyle = "green";
// Add a rectangle at (10, 10) with size 100x100 pixels
    let n=100;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            context.fillStyle = Math.random()>0.5?"white":"black";
            context.fillRect(i*300/n,j*300/n,300/n,300/n);
        }
    }


    // context.
 }