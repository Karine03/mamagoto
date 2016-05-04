$(document).ready(function() {

  var anchor_offset = $('#banner-2').offset().top;

  $(window).on('scroll', function() {
    if ( $(window).scrollTop() > 0) {
      $('#navbar').css('top', '0');
    }
    else {
      $('#navbar').css('top', '-90px');
    }

  });

});