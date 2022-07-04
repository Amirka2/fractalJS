
function paint(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let k = document.getElementById("iterations").value;

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawDragon(canvas, 100, 100, 200, 100, k);
}

function drawDragon(canvas, x1, y1, x2, y2, k){
    
    if(canvas.getContext){
        let color = document.getElementById("colorSelect").value;
        let ctx = canvas.getContext('2d');
        let tx, ty;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;

        if(k == 0){
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
            
            return;
        }

        tx = (x1 + x2) / 2 + (y2 - y1) / 2;
        ty = (y1 + y2) / 2 - (x2 - x1) / 2;
        
        drawDragon(canvas, x2, y2, tx, ty, k - 1);
        drawDragon(canvas, x1, y1, tx, ty, k - 1);
    }
}
