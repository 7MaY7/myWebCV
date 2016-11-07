$(document).ready(function(){

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('.skills_info').fadeIn(1000, function () {
      	$(".gradJs").animate({width: '84%'},1000, function () {
      		$(".gradHtml").animate({width: '80%'},1000, function () {
      			$(".gradCss").animate({width: '80%'},1000, function () {
      				$(".gradJquery").animate({width: '96%'},1000, function () {
  	    				$(".gradBootstrap").animate({width: '50%'},1000, function () {
  		    				$(".gradAngular").animate({width: '25%'},1000);
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

});