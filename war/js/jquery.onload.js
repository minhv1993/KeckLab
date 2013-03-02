// All onload javascript and jquery will goes here
function calcParallax(tileheight, speedratio, scrollposition) {
	return (tileheight - (Math.floor(scrollposition / speedratio) % (tileheight + 1)));
}

$(document).ready(function() {
	// INITIALIZE PARALLEX ONSCROLL
	window.onscroll = function() {
		var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop
				: window.pageYOffset;

		var plane = document.getElementById('back-layer');
		var planeparallax = calcParallax(3000, 8, posY);
		plane.style.backgroundPosition = "0 " + planeparallax
				+ "px";

		var midplane = document.getElementById('fore-layer');
		var midplaneparallax = calcParallax(2800, 3, posY);
		midplane.style.backgroundPosition = "0 "
				+ midplaneparallax + "px";
	};
	
	// INITIALIZE RETURN TO TOP ANIMATION
    $().UItoTop();
	
	// INITIALIZE STYLE ON FOCUS
	$("input").focus(function() {
		$(this).parent().addClass("curr")
	});
	$("input").blur(function() {
		$(this).parent().removeClass("curr")
	});
	
    $('#scrlTop').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        },
        1500);
        return false;
    });
});
