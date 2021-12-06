// // Owl Slide
// $('.owl-carousel').owlCarousel({
//   items:1,
//   center:true,
//   margin:0,
//   mouseDrag:true,
//   autoplay:10,
//   animateOut: 'fadeOut',
//   animateIn: 'fadeIn',
//   URLhashListener:true,
//   autoplayHoverPause:true,
//   startPosition: 'URLHash',
  
// });
$(function(){
  $('.menu-icon').mouseover(function(){
    $('.sub').stop().slideDown();
  });
  $('.menu-icon').mouseout(function(){
    $('.sub').stop().slideUp();
  });
})



$(function(){
  $('.menu-icon').mouseover(function(){
    $('.box').stop().slideDown();
  });
  $('.menu-icon').mouseout(function(){
    $('.box').stop().slideUp();
  });
})
// main-slick-slide=========================
$('.main-slide').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
autoplay:1500,
Infinity:true,

});

// main-swiper-mobile===============
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

// elementor=======================
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

// store-slide ==========================================

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});



$('.store-slide').slick({
  dots: false,
  infinite: true,
  loop:true,
  infinite:true,
  autoplay:3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1075,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


AOS.init();


  