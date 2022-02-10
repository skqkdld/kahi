$(document).ready(function () {
    $('.card_img').click(function () {
        $('.modal').fadeIn();
    });

    $('.modal_but').click(function () {
        $('.modal').fadeOut();
    });

    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.bi-text-right').click(function () {
        $('.toggle_menu').slideToggle();
    });

    $(window).resize(function(){

        var width = window.innerWidth;
        
        if(width < 760){
        
        $('#slide1 img').attr('src', '../img/kahi-1.png')
        
        }
        
        else {$('#slide1 img').attr('../img/mobile_banner1.png');}
        
        }).resize();
});
