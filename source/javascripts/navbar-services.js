$(document).ready(function() {

  $(window).on('scroll', function() {
    if ( $(window).scrollTop() > 0) {
      $('#navbar').css('top', '0');
    }
    else {
      $('#navbar').css('top', '-90px');
    }

  });

});