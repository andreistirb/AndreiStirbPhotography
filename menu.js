$(document).ready(function(e) {
    $("#menu_click").click(function(){
		if ($('#submenu').hasClass("hidden")){
			$('#submenu').removeClass("hidden").addClass('visible');
		}
		else{
			$('#submenu').removeClass('visible').addClass('hidden');
		}
	});
});