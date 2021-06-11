(function(){

    //
    // Welcome message animation delay
    //
    if (window.attachEvent) {
      window.attachEvent('onload', startUp());
    }
    else if (window.addEventListener) {
      window.addEventListener('load', startUp(), false);
    }
    else {
      document.addEventListener('load', startUp(), false);
    }
    
    function startUp() {
      $("html").css({opacity: 1});
      $(".message h1").addClass("animate");
    }

    //
    // jQuery UI easing
    //
    jQuery.easing.def = 'easeInOutQuart';

    //
    // Headroom
    //
    var myElement = document.querySelector("header");
    var headroom  = new Headroom(myElement);
    headroom.init();

    //
    // Image Slider
    //
    $('#cbp-fwslider' ).cbpFWSlider();

    //
    // Navigation animations
    //
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        if ($target.selector === '[name=fourth]') {
          $('html,body').animate(
            {scrollTop: $(document).height()-$(window).height()},
            {duration: 1500});
            return false;
        } else {
          $('html,body').animate(
            {scrollTop: targetOffset},
            {duration: 1500});
            return false;
        }
      }
    }
  });
})();
