(function(){

	var app = angular.module('cv', []);

	var projectsList = [
		{name:"My Own CV",
		img:"../img/myWeb.jpg",
		link: "https://maksymiv.000webhostapp.com/"},

		{name:"Kozak",
		img:"../img/kozak.jpg",
		link: "https://kozak-photo.000webhostapp.com/"},

		{name:"FooseShoes",
		img:"../img/fooseshoes.jpg",
		link: "https://foose-s.000webhostapp.com/"},

		{name:"upq",
		img:"../img/upq.jpg",
		link: "http://upq.000webhostapp.com/"}
	];

	var skillsList = [
		{name:"Java Script",
		percent: "84%",
		img:"img/logos/js.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradJs"},

		{name:"HTML",
		percent: "80%",
		img:"img/logos/html.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradHtml"},

		{name:"CSS",
		percent: "80%",
		img:"img/logos/css.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradCss"},

		{name:"jQuery",
		percent: "96%",
		img:"img/logos/jquery.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradJquery"},

		{name:"Bootstrap",
		percent: "75%",
		img:"img/logos/bootstrap.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradBootstrap"},

		{name:"Angular",
		percent: "65%",
		img:"img/logos/angular.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradAngular"},

		{name:"Sass",
		percent: "70%",
		img:"img/logos/sass.png",
		resources: "SourceIT – JavaScript, CodeSchool.com, CodeCadamy.com, W3School.com",
		gradClass: "gradSass"},
		
	];

	app.controller('SkillsCtrl', function(){
		this.skill = skillsList;
	});

	app.controller('ExperienceCtrl', function(){
		this.project = projectsList;
	});



	//moving page to catagory
	$('.home_nav, .skills_nav, .experience_nav, .education_nav, .hobbies_nav, .contacts_nav')
		.click(function(){
		var par = $(this).attr('class');
		var parName = '';
		console.log(par);

		if(par === "home_nav"){
			parName = "html,body";
		}else if(par === "skills_nav"){
			parName = ".skillsBackground";
		}else if (par === "experience_nav") {
			parName = ".experienceBackground";
		}else if (par === "education_nav") {
			parName = ".educationBackground";
		}else if (par === "hobbies_nav"){
			parName = ".hobbiesBackground";
		}else{
			parName = "footer";
		}
					
		console.log(parName);

		$('html,body').animate({
			scrollTop: $(parName).offset().top-50},'slow');
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 800) {
			$('.experience_info').fadeIn(1000);   
		} else {
			$('.experience_info').fadeOut(0); 
		}
	});

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 1600) {
			$('.education_info').fadeIn(1000);	
			} else {
			$('.education_info').fadeOut(0); 
			}
		});

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 2400) {
			$('.hobbies_info').fadeIn(1000);	
		} else {
			$('.hobbies_info').fadeOut(0); 
		}
	});

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 100) {
			$('.skills_info').fadeIn(1000, function () {
				$(".gradJs").animate({width: '84%'},1000, function () {
					$(".gradHtml").animate({width: '80%'},1000, function () {
						$(".gradCss").animate({width: '80%'},1000, function () {
							$(".gradJquery").animate({width: '96%'},1000, function () {
								$(".gradBootstrap").animate({width: '75%'},1000, function () {
									$(".gradAngular").animate({width: '65%'},1000, function () {
										$(".gradSass").animate({width: '70%'},1000);
									});
								});
							});
						});
					});
				});
			});
		} else {
		$('.skills_info').fadeOut(0);
		}
	});

	
})();