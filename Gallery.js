// JavaScript Document
$(document).ready(function(e) {
	
	//parte de landscape(1).js
	var imagini = new Array("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg");
	var caption_landscape = new Array("Stana Scorota","Plum tree","Buta lake","Clouds above Bucura Lake","Moon","Presaca",
	"Hay stacks","Custurii Lakes","The dark side of the moon","Milky Way","Dancing in the dark","The lonely mountain",
	"The pyramid","Buta cabin","Bucura Lake","In the morning","Sunrise","Good morning","Misty river","Bad valley","Peleaga lake",
	"Goodbye, sun!","On the top of the world","Twisted lake","Stanisoara Valley","Snow, snow everywhere!","Misty mountains",
	"Winter","Frozen lakes","Down to Bucura Lake");
	var caption_nature = new Array("Morning grass","Turdus Merula","Violet beauty","Ursu, the tired dog","Pet me, please!",
	"My little home","The king","Buffalo soldier", "Breakfast","Dead nature","Ice, ice, ice!", "Autumn" );
	var caption_lego = new Array("Call an ambulance, please!", "Yo-ho and a bottle of rum!","This is my forest!",
	"Unexpected lights","Fire", "Clearing the way for the president","Hard work","Transmitting live for Metro News One",
	"The good, the bad and the ugly","All hail the king!","Hot dog?", "The sniper","Too much snow","Star wars");
	var caption_city = new Array("Deva Mail", "Speed of light","Deva panorama");
	var caption_new_work = new Array("Autumn","Dead nature");
	var caption;
	var page = document.location.href.match(/[^\/]+$/)[0];
	var cale_tb,cale,nr_imagini=0;
        var fileExtension = ".jpg";
	
	//alege ce imagini sa incarce (in functie de galerie)
	
	switch(page){
		case "Landscape.html":
			cale_tb = "gallery/landscape/thumbnails";
			cale = "gallery/landscape/pictures";
			caption = caption_landscape;
			break;
		case "Nature.html":
			cale_tb = "gallery/nature/thumbnails";
			cale = "gallery/nature/pictures";
			caption = caption_nature;
			break;
		case "Lego.html":
			cale_tb = "gallery/lego/thumbnails";
			cale = "gallery/lego/pictures";
			caption = caption_lego;
			break;
		case "City.html":
			cale_tb = "gallery/city/thumbnails";
			cale = "gallery/city/pictures";
			caption = caption_city;
			break;
		case "New_work.html":
			cale_tb = "gallery/new_work/thumbnails";
			cale = "gallery/new_work/pictures";
			caption = caption_new_work;
			break;
	}

	$.ajax({
          async:false,
	  url: cale_tb,
          success: function(data){
            $(data).find("a:contains(" + fileExtension + ")").each(function(){
              var filename = this.href.replace(window.location.host, "").replace("http://", "");
              $(".mask").append('<div class = "thumbnail"> <img src="' + cale_tb + filename + '"/>' + '</div>');
              nr_imagini = nr_imagini + 1;
            });
          } 
        });
	$(".mask").css("height",Math.round(nr_imagini/2)*75 + "px");
	console.log($('.thumbnail').css("width"));
        console.log(nr_imagini);
	console.log(Math.round(nr_imagini/2) * 75);
	
	$('.thumbnail').mousedown(function(e) {
	  x = $("img",this).attr("src").match(/[^\/]+$/)[0];
          console.log(parseInt($("img",this).attr("src").match(/[^\/]+$/)[0]));
          $(".container_poza").replaceWith('<div class="container_poza"><img src =' + cale + '/' + x + ' /></div>');
        });
	
	//parte de scroll
    

	var scrollContent = $(".mask");
	var scrollLayout = $('.scroll-pane');
	var slider_mic = $(".slider");
	var raport = 100*(scrollLayout.height() / scrollContent.height());
	slider_mic.css("height",raport + "%");
	slider_mic.draggable({
		axis:"y",
		containment:"parent",
		drag: function(event, ui){
				var offset = $('.slider').css("top");
				var mask_height = parseInt($('.mask').css("height"));
				var content_height = parseInt($('.scroll-pane').css("height"));
				$('.mask').css('top', (-mask_height / content_height * (parseInt(offset))) + "px");
		}
	});	
	
	$('#de_scris').mouseover(function() {
		var x;
		x = parseInt($('img','.container_poza').attr("src").match(/[^\/]+$/)[0]) - 1;
		$('#scris').replaceWith('<div class="caption" id="scris" >' + caption[x] + '</div>');
        console.log("de la gallery.js" + parseInt(x));
        $('#scris').switchClass('caption','caption-on',900);
    });
	
	$('#de_scris').mouseout(function(){
		$('#scris').switchClass('caption-on','caption',900);
	});
	
	var arr = [];
	for(i=0;i<nr_imagini;i++){
		arr.push({href: cale + imagini[i], title: caption[i]});
	}
	
	$('#gallery').click(function(e){
		e.preventDefault();
		
		$.swipebox(arr);
	});
});

$(window).resize(function(e) {
    var scrollContent = $(".mask");
	var scrollLayout = $('.scroll-pane');
	var slider_mic = $(".slider");
	var raport = 100*(scrollLayout.height() / scrollContent.height());
	slider_mic.css("height",raport + "%");
});
