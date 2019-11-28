$(document).ready(() => {
    var nav = document.querySelector('.nav');

    $("#buttonNav").click(() => {
        $(".hamburger").toggleClass("focus");
        $(".nav").toggleClass('focused');
        // nav.style.transition = "all .3s";
        // nav.style.transform = "translateX(0)";
    });

    // $("#top").click(()=> {
    //     $("html,body").animate({
    //         scrollTop:0
    //     },"slow");
    // });

 
});