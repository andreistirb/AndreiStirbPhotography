// JavaScript Document

$(document).ready(function(e) {
	//vectorul contine numele imaginilor, numerotate intr-o ordine convenabila
    var imagini = new Array("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg");
	var caption = new Array("Luna","Soare","frumos","munte","a","a","d","w","4","233","t","a");
	var page = document.location.href.match(/[^\/]+$/)[0];
	var cale_tb,cale;
	//alege ce imagini sa incarce (in functie de galerie)
	if(page === "landscape(nou).html"){
		cale_tb = "gallery/landscape/thumbnails/";
		cale = "gallery/landscape/pictures/";
	}
	
	for(var i=0; i<imagini.length; i++){
		$(".mask").append('<div class="thumbnail"><img src ="' + cale_tb + imagini[i] + '"/>' + '</div>');
	}
	
	$('.thumbnail').mousedown(function(e) {
		x = $("img",this).attr("src").match(/[^\/]+$/)[0];
        console.log(parseInt($("img",this).attr("src").match(/[^\/]+$/)[0]));
		$(".container_poza").replaceWith('<div class="container_poza"><img src =' + cale + x + ' /></div>');
    });
	//console.log($('.thumbnail img').attr("src"));
});