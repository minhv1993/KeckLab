/*
 * SLider Init
 * Different Options for Sliders: http://bxslider.com/options
 */

$(document).ready(function(e) {
	// Slider
	var slider = $("#slider").bxSlider({
		mode:'fade',
		speed: 1000,
		pause: 5000,
		auto: true,
		autoControls: true,
		autoControlsSelector: '#play-pause',
		controls:false,
		pager:true
	});
	
	$("#go-prev").click(function(){
		slider.goToPreviousSlide();
		return false;
	})
	
	$('#go-next').click(function(){
		slider.goToNextSlide();
		return false;
	});
});