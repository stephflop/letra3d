$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $("#logo").height();
        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('nav').removeClass('goToTop');
    });
});