// sanity check
console.log("app.js linked.");

$(document).ready(function() {
	$("header img").click(function(){
		$(this).removeClass("infinite");
		$(".main-nav").slideToggle(500);
		
	});

	$(".fa-chevron-circle-up").click(function(){
		$(this).parent(".box-front").hide();
		var boxBack = $(this).parent(".box-front").siblings(".box-back");
		boxBack.show();
	});

	$(".fa-times").click(function(){
		$(this).parent(".box-back").hide();
		var boxFront = $(this).parent(".box-back").siblings(".box-front")
		boxFront.show();
	});


});