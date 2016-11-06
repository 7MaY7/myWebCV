$(document).ready(function(){

	$("#imgMenu").click(function(){

        var navWidth = $("nav").width();

            if(navWidth === 40){
                $("nav").animate({width: '380px'}, 500, function(){
                    $("nav p").css("display","inline");
                });
            }else{
            	$("nav p").stop().css("display","none");
                $("nav").stop().animate({width: "40px"}, 500);
            };
    });    


	$("header p").hover(
		function () {
			$(this).css({"text-shadow":"3px 3px 7px rgb(255, 255, 255)", 
						 "font-size":"15px"});
		},
		function () {
			$(this).stop().css({"text-shadow":"1px 1px 7px rgb(0, 0, 102)", 
								"font-size":"15px"});
		})
				.click(function(){
					var par = $(this).attr('class');
					var parName = '';
					console.log(par);

					if(par === "skills_nav"){
						parName = ".skills_info";
					}else if (par === "experience_nav") {
						parName = ".experience_info";
					}else if (par === "education_nav") {
						parName = ".education_info";
					}else if (par === "aboutMe_nav"){
						parName = ".aboutMe_info";
					}else{
						parName = "footer";
					}
					
					console.log(parName + typeof(parName));

					$('html,body').animate({
        			scrollTop: $(parName).offset().top},'slow');

        			$("nav").stop().animate({width: "40px"}, 500, function(){
                    $("nav p").stop().css("display","none")
                });
				});

	$(".up").click(function(){
		console.log("up");
		$('html,body').animate({
        scrollTop: $('html,body').offset().top},'slow');
		});

});
