// $('.slick01').slick({ 
//     autoplay: true, 
//     dots: true, 
//   });
  
$(function(){
  $(".slick01").slick({
    autoplay: true,
    speed: 1500,
    dots: false,
    autoplaySpeed: 3000,
    fade: true,
    arrow: false,
    pauseOnHover: false,
    arrows: false,
    centerMode: true
  });
});

$(document).ready(function() {
  $(".home").hover(function(){
    $(this).find(".topindex").slideDown();
  }, function(){
    $(this).find(".topindex").slideUp();
  });
});