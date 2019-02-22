// global $ 

$(window).on('load', function () {
    $('.loader').fadeOut(500, function () {
        $(this).remove();
    });      
});

(function($) {
    'use strict';

    $('.nav-btn').click(function(){
        $('.side-menu').addClass('show-menue');
        $('.menu-overlay').addClass('show-overlay');
    });

    $('.menu-overlay , .menu-btn').click(function(){
        $('.side-menu').removeClass('show-menue');
        $('.menu-overlay').removeClass('show-overlay');
    });

    $('.ourproducts-list li').click(function(){
        $('.ourproducts-list li').removeClass('active-tap');
        $(this).addClass('active-tap');
    }); 

    var quest   =  $('.question-box');
    var q_btn   =  quest.find('.question');
    var answer  =  quest.find('.answer');
    q_btn.click(function(){
        answer.slideUp();
        q_btn.removeClass('active');
        q_btn.find('.icon').removeClass('rotate');
        if($(this).parent(quest).find(answer).is(':visible')){
            $(this).parent(quest).find(answer).slideUp(100);
            $(this).find('.icon').removeClass('rotate');
            $(this).removeClass('active');
        }else{
            $(this).parent(quest).find(answer).slideToggle();
            $(this).find('.icon').toggleClass('rotate');
            $(this).addClass('active');
        }
    });
    
    $('.web-owl').owlCarousel({
        rtl: true,
        margin: 0,
        // autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.product-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:true,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var $owl = $('.team-owl');
    $owl.children().each( function( index ) {
        $(this).attr( 'data-position', index );
    });
    
    $owl.owlCarousel({
        rtl: true,
        center: true,
        loop: true,
        margin: 0,
        autoplay: false,   
        nav: false,
        dots:false,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    });

    $(document).on('click', '.team-owl .owl-item>div', function() {
        $owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
    });

    $('.team-slider a').click(function (e) {
        e.preventDefault();     
        var itemId  = $(this).attr("href");
        var tablist = $('.team-owl'); 
        $('.team-slider-content .team').removeClass('active-content'); 
        $(itemId).addClass('active-content');     
    });

    $(document).click(function(){
        $('.filter ul').hide();
    });

    $('.filter p').click(function(e){
        e.stopPropagation();
        $('.filter ul').toggle();
    });

    $('.filter button').on('click',function(e){
        e.stopPropagation();
        $('#filter_option').text($(this).text());
        $('.filter ul').hide();
    });

})(jQuery);


