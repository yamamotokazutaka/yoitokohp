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
    pauseOnFocus: false,
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


let targets = document.querySelectorAll('.animation_block');//アニメーションさせたい要素
let offset = 100;//アニメーションタイミング

window.addEventListener('scroll', function() {//スクロールしたとき

  var scroll = window.scrollY;//スクロール量を取得
  var h = window.innerHeight;//画面の高さを取得

  for(var i = 0; i< targets.length; i++) {
    let target = targets[i];
    var pos = target.getBoundingClientRect().top + scroll;//アニメーションさせたい要素の位置を取得
    if (scroll > pos - h + offset) {//スクロール量 > アニメーションさせたい要素の位置
      target.classList.add('is-animated');
    }
  }
});