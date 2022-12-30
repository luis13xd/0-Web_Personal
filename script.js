$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar con scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up boton para mostrar/ocultar
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // eliminando smooth scroll en slide-up boton
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando scroll en menu navbar
        $('html').css("scrollBehavior", "smooth");
    });

    // menu navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // tanimacion de textos
    var typed = new Typed(".typing", {
        strings: [" Ingeniero de Software", " Desarrollador Web Jr", " Front End"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Luis Fernando Trujillo Lopez", "Desarrollador Web Fron-End Jr"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //carouse
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});