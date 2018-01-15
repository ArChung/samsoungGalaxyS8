$(document).ready(function() {
 
   
    initMenu();
    initLogin();
})



function initMenu(){
    $('.menuToggle').on('click',function(){
        $('.sideMenu').toggleClass('active');
    });

    window.onscroll = function (e) {
        if($(window).scrollTop()>=95){
            $('.menuBar').addClass('fixMenu');
        }else{
            $('.menuBar').removeClass('fixMenu');
            
        }
    }
}


function initLogin(){
    $('.popLogin .clozBtn').on('click',function(){
        simpleHide($('.popLogin'));
    });

    $('.poploginBtn').on('click',function(){
        simpleShow($('.popLogin'));
    });
}