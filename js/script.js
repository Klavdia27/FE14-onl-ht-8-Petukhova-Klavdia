$(document).ready(function(){
  $('.slaider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 100,
});
});

$(document).ready(function(){
  $('.container-slaider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 100,
    
});
});

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

