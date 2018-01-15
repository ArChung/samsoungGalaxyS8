$(document).ready(function() {
 
    initNewSwiper();
    initEventSwiper();
    initMenu();
    initLogin();
})

function initNewSwiper(){
    var mySwiper = new Swiper('#newsSwiper', {
        pagination: {
            el: '.newsSwiper-pagination',
            type: 'bullets',
          }
    });


    var swiper = new Swiper('.swiper-container2', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
}

function initEventSwiper(){
    var swiper = new Swiper('#eventSwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        initialSlide: 2,
        pagination: {
          el: '#eventSwiper .swiper-pagination',
        },
      });
}


function initMenu(){
    $('.menuToggle').on('click',function(){
        $('.sideMenu').toggleClass('active');
    });
}


function initLogin(){
    $('.popLogin .clozBtn').on('click',function(){
        simpleHide($('.popLogin'));
    });

    $('.poploginBtn').on('click',function(){
        simpleShow($('.popLogin'));
    });
}