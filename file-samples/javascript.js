$(document).ready(function() {

   "use strict";

   // --------------------------------
   // Scroll to Anchor
   // --------------------------------

   $('a[href*=\\#]:not([href=\\#])').bind('click', function(event) {
      if ($(this).attr('href').toLowerCase().indexOf('#') >= 0) {
         event.preventDefault();

         // setTimeout -> foundation framework fix
         // if link is in menu on mobile -> wait till menu is closed
         setTimeout($.proxy(function() {
            var $anchor = $(this);
            $('html, body').stop().animate({
               scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
         }, this), 50);
      }
   });

   // --------------------------------
   // Scroll Reveal
   // --------------------------------

   // Changing the defaults
   window.sr = ScrollReveal({
      origin: 'bottom',
      distance: '10px',
      duration: 500,
      delay: 0,
      opacity: 0,
      scale: 0.9,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      mobile: false,
      viewFactor: 0.2,
   });

   $('.co-projects .project').each(function(index) {
      var className = 'proj-' + index;
      var revealName = '.co-projects .' + className + ' .text .tag';

      $(this).addClass(className);

      sr.reveal(revealName, delay: 200, 300);
   });

   // --------------------------------
   // Maplace
   // --------------------------------

   map = new Maplace({
      map_options: {
         zoom: 17,
         scrollwheel: false,
         mapTypeControl: false
      },
      styles: {
         'Light Rust': [{
            "featureType": "transit",
            "stylers": [{
               "saturation": -100
            }]
         }]
      }
   }).Load();

});
