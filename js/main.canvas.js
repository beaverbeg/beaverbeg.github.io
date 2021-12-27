const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
const ctx = canvas.getContext("2d");
let mouse = { x: 0, y: 0 };
draw = function(){
    ctx.beginPath();
    ctx.strokeStyle = "#FFFF00";
    ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
    ctx.stroke()
}

//events
document.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
})
document.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})
animate = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw()
    requestAnimationFrame(animate)
}
animate();