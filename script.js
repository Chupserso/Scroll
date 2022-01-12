"use strict";

function oneBtn(btn) {
    $(function(){
        $('html,body').stop().animate({ scrollTop: $('.one').offset().top }, 1000);
        e.preventDefault();
    });
}
function twoBtn(btn) {
    $(function(){
        $('html,body').stop().animate({ scrollTop: $('.two').offset().top }, 1000);
        e.preventDefault();
    });
}
function threeBtn(btn) {
    $(function(){
        $('html,body').stop().animate({ scrollTop: $('.three').offset().top }, 1000);
        e.preventDefault();
    });
}