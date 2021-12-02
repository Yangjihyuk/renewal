// main-slick-slide
$('.main-slide').slick({
slidesToShow: 1,
slidesToScroll: 1,
dots:true,
arrows: false,
fade: true,
autoplay:3000,
Infinity,
customPaging : function(slider, i) {
        var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('title');
        return '<a class="pager__item"> '+title+' </a>';
    },
});

// main-swiper-mobie
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
