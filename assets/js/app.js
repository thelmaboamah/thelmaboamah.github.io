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
			description: "An interactive drumkit built with Vanilla JS as part of <a href='http://javascript30.com'>JavaScipt30</a>.",
			repoUrl:"https://github.com/thelmaboamah/drumkit"
		},
		{
			image:"assets/imgs/airbnb.png",
			alt: "Screenshot of Airbnb clone site",
			url: "http://thelma.codes/airbnb_homepage_clone/",	
			name: "Airbnb Clone",
			description:"A responsive clone of Airbnb's homepage that I built with HTML, CSS, and jQuery.",
			repoUrl:"https://github.com/thelmaboamah/airbnb_homepage_clone"
		}
	];

	var thumbnails = "";
	for (var i = 0; i < 3; i++ ) {
		thumbnails += `<a class="thumbnail" href="work.html" target="_blank"><img src="${projects[i].image}" alt="${projects[i].alt}"/></a>`
	}

	$(".pf-thumbnails").append(thumbnails);

	var samples = "";
	for (var i = 0; i < projects.length; i++) {
		samples += `<div class="sample col-xs-12 col-md-6 col-lg-4">
									<a href="${projects[i].url}" target="_blank"><img class="img-fluid" src="${projects[i].image}" alt="${projects[i].alt}"/></a>
									<div>
										<h3>${projects[i].name}</h3>
										<p>${projects[i].description}</p>
										<a href="${projects[i].repoUrl}" target="_blank">Repo</a>
									</div>
								</div>`
	}

	$(".portfolio").append(samples);



});