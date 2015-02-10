jQuery(document).ready( function(){
    
    /*============================================
  	Page Preloader
  	==============================================*/
  	
  	jQuery(window).load(function(){
  		jQuery('#page-loader').fadeOut(500,function(){});
  	});

    /* ==========================================================================
    Header Slider
    ========================================================================== */
    jQuery('.site-header').height(jQuery(window).height()+20);   
    // jQuery('.site-header').backstretch(["assets/bgslider/couple-260899_1280.jpg",
    //                                   "assets/bgslider/white-143930_1280.jpg",
    //                                   "assets/bgslider/bride-458119_1280.jpg"], 
    //                                   {duration: 3500, fade: 1500});
  jQuery('.site-header').backstretch(["assets/bgslider/proposal1.jpg",
                                      "assets/bgslider/proposal2.jpg"], 
                                      {duration: 3500, fade: 1500});
    
  	jQuery(window).scroll( function() {  		
      var dd_st = jQuery(this).scrollTop(),
  	      wh = jQuery(window).height(),
  	      dd_sf = 1.2 - dd_st/(10*wh);
    
  		jQuery('.site-header .backstretch img').css({ 
  			'transform' : 'scale('+dd_sf+')', 
  			'-webkit-transform' : 'scale('+dd_sf+')'
  		});
  		
  		jQuery('.site-header .site-logo').css({ 'opacity' : (1.2 - dd_st/400) });
  		
  		if(jQuery(window).scrollTop() > (jQuery(window).height()+50)){
  			jQuery('.site-header .backstretch').hide();
  		}else{
  			jQuery('.site-header .backstretch').show();
  		}
  		
  	});
  	
  	var dd_st = jQuery(this).scrollTop(),
  	    wh = jQuery(window).height(),
  	    dd_sf = 1.2 - dd_st/(10*wh);
  
  	jQuery('.site-header .backstretch img').css({ 
  		'transform' : 'scale('+dd_sf+')', 
  		'-webkit-transform' : 'scale('+dd_sf+')'
  	});
    
    jQuery('.site-header .site-logo').css({ 'opacity' : (1.2 - dd_st/400) });
    /* ==========================================================================
    Gallery Lightbox
    ========================================================================== */
    jQuery('.gallery').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
        // options for gallery
        enabled: true
      },
      image: {
        // options for image content type
        titleSrc: 'title'
      }
    });
    /* ==========================================================================
    Rsvp Popup
    ========================================================================== */
    jQuery('.rsvp-btn').magnificPopup({
      type:'inline'
    });
    
    /* ==========================================================================
    Waypoints Animation
    ========================================================================== */
    jQuery('.scrollinganimation').waypoint(function(){
    		jQuery(this).addClass('in');
    },{offset:'85%'});
});