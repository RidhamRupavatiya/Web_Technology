left = 700;
top1 = 400;
ileft = 0;
itop = 0;
idown = 0;
iright = 0;
x = 0;
y = 0;

function startleft() {
	clearInterval(iright);
	clearInterval(itop);
	clearInterval(idown);
	ileft = setInterval(goToLeft,5)
}
function startright() {
	clearInterval(ileft);
	clearInterval(itop);
	clearInterval(idown);
	iright = setInterval(goToRight,5)		
}

function startup() {
	clearInterval(iright);
	clearInterval(ileft);
	clearInterval(idown);
	itop = setInterval(goToUp,5)
}
function startdown() {
	clearInterval(iright);
	clearInterval(itop);
	clearInterval(ileft);
	idown = setInterval(goToDown,5)
}
function goToLeft() {
	checkForscore();
	s = document.getElementById("image");
	left-=1;
	if(left<0){
		clearInterval(ileft);
		//document.writeln("Killed");
		alert("you killed");
	}
	s.style.left = left+"px";
}
function goToRight() {
	checkForscore();
	s = document.getElementById("image");
	left+=1;
	if(left>screen.availWidth-100){
		clearInterval(iright);
		//document.writeln("Killed");
		alert("you killed");
	}
	s.style.left = left+"px";
}
function goToUp() {
	checkForscore();
	s = document.getElementById("image");
	top1-=1;
	if(top1<0){
		clearInterval(itop);
		//document.writeln("Killed");
		alert("you killed");
	}
	s.style.top = top1+"px";
}
function goToDown() {
	checkForscore();
	s = document.getElementById("image");
	top1+=1;
	if(top1>screen.availHeight-200){
		clearInterval(idown);
		//document.writeln("Killed");
		alert("you killed");
	}
	s.style.top = top1+"px";
}

function placeKhavanu(){
	x = parseInt(Math.random()*(screen.availWidth-100));
	y = parseInt(Math.random()*(screen.availHeight-100));
	document.getElementById("khavanu").style.left = x + "px";
	document.getElementById("khavanu").style.top = y + "px";
}
function checkForscore(){
	if(x-80<left && x+80>left && y-80<top1 && y+80>top1){
		placeKhavanu();
	}
}
function checkKey(e){
	if(e.keyCode==37){
		startleft();
	}
	else if(e.keyCode==38){
		startup();
	}
	else if(e.keyCode==39){
		startright();
	}
	else if(e.keyCode==40){
		startdown();
	}
}