// JavaScript Document
var x=0;
var y=16;
var q;
var gallery_array= new Array();
gallery_array[1]="1.jpg";
gallery_array[2]="2.jpg";
gallery_array[3]="3.jpg";
gallery_array[4]="4.jpg";
gallery_array[5]="5.jpg";
gallery_array[6]="6.jpg";
gallery_array[7]="7.jpg";
gallery_array[8]="8.jpg";
gallery_array[9]="9.jpg";
gallery_array[10]="10.jpg";
gallery_array[11]="11.jpg";
gallery_array[12]="12.jpg";
gallery_array[13]="13.jpg";
gallery_array[14]="14.jpg";
gallery_array[15]="15.jpg";
gallery_array[16]="16.jpg";
gallery_array[17]="17.jpg";
gallery_array[18]="18.jpg";
gallery_array[19]="19.jpg";
gallery_array[20]="20.jpg";
gallery_array[21]="21.jpg";
gallery_array[22]="22.jpg";
gallery_array[23]="23.jpg";
gallery_array[24]="24.jpg";
gallery_array[25]="25.jpg";
gallery_array[26]="26.jpg";
gallery_array[27]="27.jpg";
gallery_array[28]="28.jpg";
gallery_array[29]="29.jpg";
gallery_array[30]="30.jpg";
gallery_array[31]="31.jpg";

var current=1;


function rightArrow()
{
	switch (x)
	{
		case 0:{q=current;current=1;thumb2();current=q;}break;
		case 1:{q=current;current=1;thumb3();current=q;}break;
		case 2:{q=current;current=1;thumb4();current=q;}break;
		case 3:{q=current;current=1;thumb5();current=q;}break;
		case 4:{q=current;current=1;thumb6();current=q;}break;
		case 5:{q=current;current=1;thumb7();current=q;}break;
		case 6:{q=current;current=1;thumb8();current=q;}break;
		case 7:{q=current;current=1;thumb9();current=q;}break;
		case 8:{q=current;current=1;thumb10();current=q;}break;
		case 9:{q=current;current=1;thumb11();current=q;}break;
		case 10:{q=current;current=1;thumb12();current=q;}break;
		case 11:{q=current;current=1;thumb13();current=q;}break;
		case 12:{q=current;current=1;thumb14();current=q;}break;
		case 13:{q=current;current=1;thumb15();current=q;}break;
		case 14:{q=current;current=1;thumb16();current=q;}break;
		case 15:{q=current;current=1;thumb17();current=q;}break;
		case 16:{q=current;current=1;thumb18();current=q;}break;
		case 17:{q=current;current=1;thumb19();current=q;}break;
		case 18:{q=current;current=1;thumb20();current=q;}break;
		case 19:{q=current;current=1;thumb21();current=q;}break;
		case 20:{q=current;current=1;thumb22();current=q;}break;
		case 21:{q=current;current=1;thumb23();current=q;}break;
		case 22:{q=current;current=1;thumb24();current=q;}break;
		case 23:{q=current;current=1;thumb25();current=q;}break;
		case 24:{q=current;current=1;thumb26();current=q;}break;
		case 25:{q=current;current=1;thumb27();current=q;}break;
		case 26:{q=current;current=1;thumb28();current=q;}break;
		case 27:{q=current;current=1;thumb29();current=q;}break;
		case 28:{q=current;current=1;thumb30();current=q;}break;
		case 29:{q=current;current=1;thumb31();current=q;}break;
		case 30:{q=current;current=1;thumb1();current=q;}break;
	}
}

function leftArrow()
{
	switch(x)
	{
		case 0:thumb31();break;
		case 1:thumb1();break;
		case 2:thumb2();break;
		case 3:thumb3();break;
		case 4:thumb4();break;
		case 5:thumb5();break;
		case 6:thumb6();break;
		case 7:thumb7();break;
		case 8:thumb8();break;
		case 9:thumb9();break;
		case 10:thumb10();break;
		case 11:thumb11();break;
		case 12:thumb12();break;
		case 13:thumb13();break;
		case 14:thumb14();break;
		case 15:thumb15();break;
		case 16:thumb16();break;
		case 17:thumb17();break;
		case 18:thumb18();break;
		case 19:thumb19();break;
		case 20:thumb20();break;
		case 21:thumb21();break;
		case 22:thumb22();break;
		case 23:thumb23();break;
		case 24:thumb24();break;
		case 25:thumb25();break;
		case 26:thumb26();break;
		case 27:thumb27();break;
		case 28:thumb28();break;
		case 29:thumb29();break;
		case 30:thumb30();break;
	}
}

function setSize(a,b,nextImage)
{
	if (a<b)
	{
		if ((b/a)<1.6)
		{
			nextImage.height="504";
		}
		else
		{
			nextImage.width="750";
			nextImage.height="421";
		}
	}
	else
	{
		nextImage.height="504";
	}
}

function thumb1()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1)
	{nextImage.src="gallery/lego/pictures/1.jpg";}	
	else
	{nextImage.src="gallery/lego/pictures/"+gallery_array[current];}
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=0;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb2()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/2.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+1];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=1;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb3()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/3.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+2];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=2;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb4()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/4.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+3];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=3;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb5()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/5.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+4];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=4;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb6()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/6.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+5];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=5;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb7()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/7.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+6];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=6;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb8()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/8.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+7];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=7;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb9()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/9.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+8];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=8;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb10()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/10.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+9];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=9;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb11()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/11.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+10];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=10;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb12()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	if (current==1){
	nextImage.src="gallery/lego/pictures/12.jpg";}
	else
	nextImage.src="gallery/lego/pictures/"+gallery_array[current+11];
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=11;
	document.getElementById("numar").innerHTML=current+x+"/"+y;
}

function thumb13()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	nextImage.src="gallery/lego/pictures/13.jpg";
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=12;
	document.getElementById("numar").innerHTML=1+x+"/"+y;
}

function thumb14()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	nextImage.src="gallery/lego/pictures/14.jpg";
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=13;
	document.getElementById("numar").innerHTML=1+x+"/"+y;
}

function thumb15()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	nextImage.src="gallery/lego/pictures/15.jpg";
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=14;
	document.getElementById("numar").innerHTML=1+x+"/"+y;
}

function thumb16()
{
	var nextImage = document.createElement("img");
	nextImage.onload = function(){
		var a=nextImage.height;
		var b=nextImage.width;
		setSize(a,b,nextImage);
	}
	nextImage.src="gallery/lego/pictures/16.jpg";
	var imageDiv=document.getElementById("imagine");
	imageDiv.replaceChild(nextImage,imageDiv.childNodes[1]);
	x=15;
	document.getElementById("numar").innerHTML=x+1+"/"+y;
}


function jos(){
	if (current<4){
		current+=2;
	}
	document.getElementById("thumb_1").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current]);
	document.getElementById("thumb_2").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+1]);
	document.getElementById("thumb_3").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+2]);
	document.getElementById("thumb_4").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+3]);
	document.getElementById("thumb_5").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+4]);
	document.getElementById("thumb_6").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+5]);
	document.getElementById("thumb_7").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+6]);
	document.getElementById("thumb_8").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+7]);
	document.getElementById("thumb_9").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+8]);
	document.getElementById("thumb_10").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+9]);
	document.getElementById("thumb_11").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+10]);
	document.getElementById("thumb_12").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+11]);
	return;
}

function sus(){
	if (current>2){
		current-=2;
	}
		document.getElementById("thumb_1").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current]);
	document.getElementById("thumb_2").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+1]);
	document.getElementById("thumb_3").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+2]);
	document.getElementById("thumb_4").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+3]);
	document.getElementById("thumb_5").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+4]);
	document.getElementById("thumb_6").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+5]);
	document.getElementById("thumb_7").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+6]);
	document.getElementById("thumb_8").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+7]);
	document.getElementById("thumb_9").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+8]);
	document.getElementById("thumb_10").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+9]);
	document.getElementById("thumb_11").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+10]);
	document.getElementById("thumb_12").setAttribute("src","gallery/lego/thumbnails/"+gallery_array[current+11]);
	return;
}
	
	
