function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function(){    

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
      		scrollTop: $(parName).offset().top-34},'slow');
        			
	});

});