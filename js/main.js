(function ($) {
    "use strict";

    $(window).on('load', function() {
        $('#staticBackdrop').modal('show');
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });




    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });
    

    var carousel = $(".carousel2"),
    items = $(".item"),
    currdeg  = 0;

    // Khai báo biến để lưu trữ giá trị random
    var randomValue;

    function updateRandomValue() {
        randomValue = Math.floor(Math.random() * 360);
        rotate({ data: { d: "n" } });
    }

    setInterval(updateRandomValue, 2000);

    function rotate(e){
    if(e.data.d=="n"){
        currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
    });
        items.css({
        "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
        "-moz-transform": "rotateY("+(-currdeg)+"deg)",
        "-o-transform": "rotateY("+(-currdeg)+"deg)",
        "transform": "rotateY("+(-currdeg)+"deg)"
    });
    }


    function updateTimer() {
        var now = new Date();
        var futureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Set the future date and time

        var timeDiff = futureDate - now;

        var hours = Math.floor(timeDiff / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("hours").innerHTML = `<div> <strong> ${hours.toString().padStart(2, '0')} </strong></div><div style="font-size:11px">Giờ</div>`;
        document.getElementById("minutes").innerHTML = `<div> <strong> ${minutes.toString().padStart(2, '0')} </strong></div><div style="font-size:11px">Phút</div>`;
        document.getElementById("seconds").innerHTML = `<div> <strong> ${seconds.toString().padStart(2, '0')} </strong></div><div style="font-size:11px">Giây</div>`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial call to display the timer immediately
    updateTimer();
        
})(jQuery);

