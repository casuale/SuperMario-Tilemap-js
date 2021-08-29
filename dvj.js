var can = document.createElement("canvas"),
    con = can.getContext("2d");

function cc(w,h,color){
    const body=document.querySelector("body").appendChild(can);
    can.width=w;
    can.height=h;
    can.style.background=color;
    can.style.position="absolute";
    can.style.margin=(-8)+"px";
    
    setInterval(function(){con.clearRect(0,0,w,h)},1000/60)
}
function drawImg(xd, yd, wd, hd, src,a,type) {
  con.imageSmoothingEnabled=false;
  var img = new Image();
  img.src = src;
  var dfx = xd + wd / 2,
      dfy = yd + hd / 2;

  if (a) {
    a = a * (Math.PI / 100);
    con.save();
    con.translate(dfx, dfy);
    con.rotate(a);
    con.translate(-dfx, -dfy);
  }
  con.drawImage(img,xd, yd, wd, hd);
  if(a)con.restore();
}

function spr(dx,dy,dw,dh,x, y, w, h, src,a) {
  con.imageSmoothingEnabled=false;
  var img = new Image();
  img.src = src;
  var dfx = x +  w / 2,
      dfy = y + h / 2;
  if(a) {
    a = a * (Math.PI / 100);
    con.save();
    con.translate(dfx, dfy);
    con.rotate(a);
    con.translate(-dfx, -dfy);
  }
  con.drawImage(img,dx,dy,dw,dh,x, y, w, h);
  if(a){
    con.restore();
  }
}
function collision(obj,obj2,f,p) {
    if(obj.x+obj.w>=obj2.x&&obj.x<=obj2.x+obj2.w
      &&obj.y+obj.h>=obj2.y&&obj.y<=obj2.y+obj2.h){
    if(f)f();
    else p();
  }
}
function coll(xf,yf,wf,hf,dxf,dyf,dwf,dhf,func,plys){
  if(xf+wf>=dxf&&xf<=dxf+dwf&&yf+hf>=dyf&&yf<=dyf+dhf){
    if(func)func()
  }else {
    if(plys)plys()
  }
}
function line(x,y,dx,dy,s,color){
  con.strokeStyle=color;
  con.beginPath();
  con.lineWidth=s;
  con.moveTo(x,y);
  con.lineTo(dx,dy);
  con.stroke(); 
  con.closePath();
}
function sarc(x,y,s,r,color,w){
  if (w);
  else w=1;
  con.strokeStyle=color;
  con.beginPath();
  con.lineWidth=w;
  con.arc(x,y,s,0,Math.PI*r);
  con.stroke();
}
function farc(x,y,s,r,color){
  con.fillStyle=color;
  con.beginPath();
  con.arc(x,y,s,0,Math.PI*r);
  con.fill();
}
function fill(x,y,w,h,color,a){
   var dfx = x +  w / 2,
      dfy = y + h / 2;
  if(a) {
    a = a * (Math.PI / 100);
    con.save();
    con.translate(dfx, dfy);
    con.rotate(a);
    con.translate(-dfx, -dfy);
  }
 con.fillStyle=color;
 con.beginPath();
 con.fillRect(x,y,w,h);
 con.fill();
 if(a){
    con.restore();
  }
}
function stroke(x,y,w,h,color,s,a){ 
  var dfx = x +  w / 2,
      dfy = y + h / 2;
  if(a) {
    a = a * (Math.PI / 100);
    con.save();
    con.translate(dfx, dfy);
    con.rotate(a);
    con.translate(-dfx, -dfy);
  }
  if (s);
  else s=1;
  con.strokeStyle=color;
  con.beginPath();
  con.lineWidth=s;
  con.strokeRect(x,y,w,h);
  con.stroke();
  if(a){
    con.restore();
  }
}
function ftext(color,font,text,x,y) {
  con.fillStyle=color;
  con.font=font;
  con.fillText(text,x,y);
  con.fill();
}
function stext(color,font,text,x,y) {
  con.strokeStyle=color;
  con.font=font;
  con.strokeText(text,x,y);
  con.stroke();
}

//Мой движок)))