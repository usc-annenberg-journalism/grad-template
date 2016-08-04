// trigger for audio player
$( function() { 
	$( 'audio' ).audioPlayer(); 
	
	//for FastClick
	FastClick.attach(document.body);
});

$(document).ready(function(){
    // FitVids trigger
    $(".grid-whole").fitVids();
    $(".container").fitVids();
    $(".grid-4").fitVids();
    $(".grid-3").fitVids();
    $(".grid-6").fitVids();
    
    //for OwlCarousel
    $("#carousel").owlCarousel({
	    items : 3,
		itemsDesktopSmall : [900,3],
		itemsTablet: [700,2],
		itemsMobile : [400, 1],
		navigation: true
    });
    
    //for mobile menu toggle
    $('#navtoggle').click(function(){
	    $('header nav').slideToggle('slow');
    });
 });