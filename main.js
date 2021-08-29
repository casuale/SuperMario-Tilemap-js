var w 		=	window.innerWidth,
	h 		= 	window.innerHeight;

var down 		= false,left 		= false,
	onground 	= false,right 		= false,
	xp 			  = w/2,
	yp 			  = h/2,
	wp	      = 24, hp = 24,
	
	frameX 	  = 16,
	lw 			  = 64,
	lh 			  = 19,
	sw 			  = 24,
	sh 			  = 24,
	color		  = "red",
	xt,yt,
	offsetX=0,offsetY=0,
	speed=0.5,
	spx=16,spy=32,
	spw=16,sph=16,
	time=0,
	dx 	   	  = 5,
	dy			  = 5;

var level		=	[
	 "                                                                ",
	 "                                                                ",
	 "                                                                ",
	 "                                                                ",
	 "                                                                ",
	 "     	                                                          ",
	 "     	                                                          ",
	 "     	  CCC  CCC   CCCC C   C  CCC  C     CCCC                  ",
	 "     	 C    C   C C     C   C C   C C     C                     ",
	 "       C    CCCCC  CCC  C   C CCCCC C     CCC                   ",
	 "       C    C   C     C C   C C   C C     C                     ",
	 "        CCC C   C CCCC   CCC  C   C CCCCC CCCC                  ",
	 "                                                                ",
	 "                                                                ",
	 "                                                                ",
	 "                                                                ",
	 "                                                                ",
	 "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
	 "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",			
					];

cc(w, h, "#09f");
	
setInterval(()=>{
	time++;
},1000/5);

function update() {

	draw();
	usl();

  yp += dy;
	dy += speed;
	offsetX += dx;
	

	requestAnimationFrame(update);
}

function usl() {

	if(right) dx=5;
	else if(left) dx=-5;
	else dx = 0;

	

	// if (onground)
	// if (onground==false)dy = 5;
	if(down&&onground){
		onground=false;
		dy-=8;

	}
	 
	}


function draw() {

	
	for (var y = 0; y < lh; y++)
	for (var x = 0; x < lw; x++) {
 	xt=x*sw;
 	yt=y*sh;
		
		if(level[y][x]=="B") spx=0,spy=0;
		else if(level[y][x]=="A") spx=32,spy=0;
		else if(level[y][x]=="C") spx=24*16,spy=16;
		else if(level[y][x]==' ') continue;
		else if(level[y][x]=='	') continue;
		
	spr(spx,spy,spw,sph,xt-offsetX, yt-offsetY, sw, sh, "sprite.png");
	spr(frameX,16*31,16,17,xp, yp, wp, hp, "mario.png");

	coll(xp+8,yp,wp-16,hp,xt-offsetX,yt-offsetY,sw,sh,()=>{
		
		stroke(xt-offsetX, yt-offsetY, sw, sh, "blue",3);

		
		if(yp<yt) onground=true, dy -= (yp+hp)-yt;
		else dy = 5;

		if (xp<xt&&yp>yt)left=false;
	  if (xp>xt&&yp>yt)right=false;

		});
}

	stroke(xp+8,yp,wp-16, hp, "red");
}

document.addEventListener("keydown",function(e){
	var key = e.keyCode;
	// console.log(e);

	if (key == 65&&key == 87) down = true,left = true;
	if (key == 68&&key == 87) down = true,right = true;
	if (key == 65) left = true;
	if (key == 68) right = true;
	if (key == 87) down = true;

});
document.addEventListener("keyup",function(){
	down=left=right=false; 
});
document.addEventListener("mouseup",function(e){
	xp=e.x;
	yp=e.y;
});
update();


/*
if (down)
{

  cy = -spd;

  if (camera.y + 64 > y) spd = 20;
  else spd -= 0.03;
}
else {
  if (camera.y + 64 > y) cy = 0;
  else spd = 20, cy = spd;
}*/