$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu').addClass('menu-fixed');
            $('.seccion').addClass('seccion-fixed');
        } else{
            $('.menu').removeClass('menu-fixed')
            $('.seccion').removeClass('seccion-fixed');
        }
    })
});