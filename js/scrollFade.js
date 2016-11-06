$(document).ready(function(){

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('.skill').fadeIn(1000, function () {
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
      $('.skill').fadeOut(0);
    }
  });
});


 