// Owl Slide
$('.owl-carousel').owlCarousel({
  items:1,
  center:true,
  margin:0,
  mouseDrag:true,
  autoplay:10,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash',
  
});

// // main-slick-slide
// $('.main-slide').slick({
// slidesToShow: 1,
// slidesToScroll: 1,
// dots:true,
// arrows: false,
// fade: true,
// autoplay:3000,
// Infinity,
// customPaging : function(slider, i) {
//         var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('');
//         return '<a class="pager__item"> '+title+' </a>';
//     },
// });

// main-swiper-mobile
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  effect:'fade',
});

$(function(){
  $('.img-box01').click(function(){
    console
    // $('.img-box01').fadeOut(200);
    $('.hide-img01').fadeIn(1000);
  })
  $('.hide-img01').click(function(){
    console
    $('.img-box01').fadeIn(2000);
    $('.hide-img01').fadeOut(500);
  })
});

$(function(){
  $('.img-box02').click(function(){
    console
    // $('.img-box02').fadeOut(200);
    $('.hide-img02').fadeIn(1000);
  })
  $('.hide-img02').click(function(){
    console
    $('.img-box02').fadeIn(2000);
    $('.hide-img02').fadeOut(500);
  })
});

$(function(){
  $('.img-box03').click(function(){
    console
    // $('.img-box03').fadeOut(200);
    $('.hide-img03').fadeIn(1000);
  })
  $('.hide-img03').click(function(){
    console
    $('.img-box03').fadeIn(2000);
    $('.hide-img03').fadeOut(500);
  })
});

$(function(){
  $('.img-box04').click(function(){
    console
    // $('.img-box04').fadeOut(200);
    $('.hide-img04').fadeIn(1000);
  })
  $('.hide-img04').click(function(){
    console
    $('.img-box04').fadeIn(2000);
    $('.hide-img04').fadeOut(500);
  })
});


  