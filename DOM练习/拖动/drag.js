var elem = document.getElementById("div1");
var clientX,clientY,moving;
moving = 0;
var mouseDownHandler = function(event){
    event = event || window.event;
    clientX = event.clientX;
    clientY = event.clientY;
    moving = !0;
    console.log(moving);
};
var  mouseMoveHandler = function(event){
    console.log(moving);
    if(!moving) return;
    event = event || window.event;
    var newClientX = event.clientX,
        newClientY = event.clientY;
    var left = parseInt(window.getComputedStyle(elem).left) || 0,
        top = parseInt(window.getComputedStyle(elem).top) || 0;
    elem.style.left = left + (newClientX-clientX) + "px";
    elem.style.top = top + (newClientY-clientY) + "px";
    clientX = newClientX;
    clientY = newClientY;
};
var mouseUpHandler = function(event){
    moving = !1;
    console.log(moving);
};
elem.addEventListener('mousedown',mouseDownHandler);
elem.addEventListener('mousemove',mouseMoveHandler);
elem.addEventListener('mouseup',mouseUpHandler);