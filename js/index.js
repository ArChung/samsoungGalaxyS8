$(document).ready(function() {
 
   
    initMenu();
    initLogin();


    $('.editBtn').on('click', function (e) {
        if(!$(this).hasClass('linkBtn')){
            var t = $(this).closest('.editBox');
            t.find('input').prop('disabled', false).focus();
            // t.find('.selectWrap').removeClass('disabled');
            t.find('select').prop('disabled', false);
            t.addClass('editable');
            t.find('.editBtn').addClass('hide');
            t.find('.saveBtn').removeClass('hide');
        }
        
    });

     $('.saveBtn').on('click', function (e) {
        var t = $(this).closest('.editBox');
        t.find('input').prop('disabled', true);
        t.find('select').prop('disabled', true);
        t.removeClass('editable');
        t.find('.editBtn').removeClass('hide');
        t.find('.saveBtn').addClass('hide');
    })
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