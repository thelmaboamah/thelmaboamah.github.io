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

	var projects = [
		{
		image:"assets/imgs/hillarymyths.png",
		alt: "Screenshot of Hillary Myths dot org",
		url: "https://hillarymyths.org/",	
		name: "Hillary Myths",
		description: "A question and answer site with the goal of debunking common misconceptions about Hillary Clinton during the 2016 election.",
		repoUrl:"https://github.com/DevProgress/i-like-hillary-but"
		},
		{
			image:"assets/imgs/drumkit.png",
			alt: "Screenshot of Questlove drumkit site",
			url: "http://thelma.codes/drumkit/",	
			name: "JS Drumkit",
			description: "An interactive drumkit built with Vanilla JS as part of <a href='http://javascript30.com'>JavaScipt30.</a>.",
			repoUrl:"https://github.com/thelmaboamah/drumkit"
		},
		{
			image:"assets/imgs/airbnb.png",
			alt: "Screenshot of Airbnb clone site",
			url: "http://thelma.codes/airbnb_homepage_clone/",	
			name: "Airbnb Clone",
			description:"A responsive clone site of Airbnb's homepage that I build with HTML, CSS, and jQuery.",
			repoUrl:"https://github.com/thelmaboamah/airbnb_homepage_clone"
		}
	];

	var thumbnails = "";
	for (var i = 0; i < 3; i++ ) {
		thumbnails += `<a class="thumbnail" href="work.html"><img src="${projects[i].image}" alt="${projects[i].alt}"/></a>`
	}

	$(".pf-thumbnails").append(thumbnails);






});