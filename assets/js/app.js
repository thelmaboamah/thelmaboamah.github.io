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

	var baseUrl="http://thelmaboamah.github.io"

	var projects = [
		// {
		// image:"assets/imgs/closeup.png",
		// alt: "Screenshot of Close Up app",
		// url: "https://close-up.herokuapp.com/",	
		// name: "Close Up",
		// description: "Photo capture and CSS filters",
		// repoUrl:"https://github.com/thelmaboamah/ga-final-project"
		// },
		{
		image:"assets/imgs/podme.png",
		alt: "Screenshot of Podme app",
		url: "https://podme.herokuapp.com/",	
		name: "Podme",
		description: "Search iTunes for podcasts and organized them into lists.",
		repoUrl:"https://github.com/thelmaboamah/Podme"
		},
		{
		image:"assets/imgs/amplify-widget.png",
		alt: "Screenshot of Amplify widget",
		url: `${baseUrl}/amplify-widget/`,	
		name: "Amplify Web Widget",
		description: "A an embeddable web widget versions of the <a href='https://play.google.com/store/apps/details?id=org.getamplify.amplify' target='_blank' rel='noreferrer'>Amplify mobile app</a>. Winner of <a href='http://angelhack.com/' target='_blank' rel='noreferrer'>Angelhack Hackathon</a> in April 2017.",
		repoUrl:"https://github.com/thelmaboamah/amplify-widget"
		},
		{
			image:"assets/imgs/drumkit.png",
			alt: "Screenshot of Questlove drumkit site",
			url: `${baseUrl}/drumkit/`,	
			name: "JS Drumkit",
			description: "An interactive drumkit built with Vanilla JS as part of <a href='http://javascript30.com'>JavaScipt30</a>.",
			repoUrl:"https://github.com/thelmaboamah/drumkit"
		},
		{
			image:"assets/imgs/airbnb.png",
			alt: "Screenshot of Airbnb clone site",
			url: `${baseUrl}/airbnb_homepage_clone/`,	
			name: "Airbnb Clone",
			description:"A responsive clone of Airbnb's homepage that I built with HTML, CSS, and jQuery.",
			repoUrl:"https://github.com/thelmaboamah/airbnb_homepage_clone"
		}
	];

	var thumbnails = "";
	for (var i = 0; i < 3; i++ ) {
		thumbnails += `<a class="thumbnail" href="work.html"><img src="${projects[i].image}" alt="${projects[i].alt}"/></a>`
	}

	$(".pf-thumbnails").append(thumbnails);

	var samples = "";
	for (var i = 0; i < projects.length; i++) {
		samples += `<div class="sample col-xs-12 col-md-6 col-lg-4">
									<a href="${projects[i].url}" target="_blank" rel="noreferrer"><img class="img-fluid" src="${projects[i].image}" alt="${projects[i].alt}"/></a>
									<div>
										<h3>${projects[i].name}</h3>
										<p>${projects[i].description}</p>
										<a href="${projects[i].repoUrl}" target="_blank" rel="noreferrer">Repo</a>
									</div>
								</div>`
	}

	$(".portfolio").append(samples);



});