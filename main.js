var mouseEvent="empty";
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_x_position,last_y_position;
var new_x_position,new_y_position;
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    new_x_position=e.clientX-canvas.offsetLeft;
    new_y_position=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.moveTo(last_x_position,last_y_position);
        ctx.lineTo(new_x_position,new_y_position);
        ctx.stroke();
    }
    last_x_position=new_x_position;
    last_y_position=new_y_position;
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    last_x_position=e.touches[0].clientX-canvas.offsetLeft;
    last_y_position=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    new_x_position=e.touches[0].clientX-canvas.offsetLeft;
    new_y_position=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
}