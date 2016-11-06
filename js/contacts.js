$(document).ready(function(){

	$("i").click(function() {

		var icon = $(this).attr("class");
		console.log(icon);

		$("i a").stop().css("display","none");

		switch (icon){
			case "fa fa-envelope":
				$("#envelope").fadeIn("slow");
				break;
			case "fa fa-linkedin":
				$("#linkedin").fadeIn("slow");
				break;
			case "fa fa-phone":
				$("#phone").fadeIn("slow");
				break;
			case "fa fa-skype":
				$("#skype").fadeIn("slow");
				break;
			case "fa fa-facebook":
				$("#facebook").fadeIn("slow");
				break;
			default:
				$("#github").fadeIn("slow");
		}
	});
});

