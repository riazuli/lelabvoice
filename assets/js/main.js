// Custom JS
! function () {
    // Selector Function
    function $(selector, areAll) {
        return areAll ? document.querySelectorAll(selector) : document.querySelector(selector);
    }

    // Variables 

    // var MenuItems = $('');  
    var toggleBtn = $('.nav-toggle-btn');
    var logoWrap = $('header#header-section .logo-menu .logo');
    var navToggleBtn = $('.nav-toggle-btn');
    var navMainMenu = $('nav.main-menu');
    var navMainMenuUl = $('nav.main-menu ul');
    var registerLogin = $('nav.main-menu .register-login');
    var menuContainer = $('header#header-section .logo-menu > .container');
    var videoSlide = $('.video-slide');
    console.log(videoSlide);
    var logoHeight, toggleBtnHeight;

    document.addEventListener('DOMContentLoaded', function () {
        if (window.innerWidth <= 1199) {
            logoHeight = logoWrap.offsetHeight;
            toggleBtnHeight = navToggleBtn.offsetHeight;

            logoWrap.style.paddingTop = (79 - logoHeight) / 2 + 'px';
            navToggleBtn.style.paddingTop = (79 - toggleBtnHeight) / 2 + 'px';
        }

        var contentVideoHeading = $('.content-video-text h1 span', true)

            // Fix VIdeo Carousel dots and navigation
            ! function () {
                setTimeout(function () {
                    var videoNavPrev = $('.video-slides .owl-nav .owl-prev')
                    var videoNavNext = $('.video-slides .owl-nav .owl-next')
                    var videoDots = $('.video-slides .owl-dots .owl-dot', true)
                    var dotWidth = 0;
                    videoDots.forEach(function (dot) {
                        dotWidth += dot.offsetWidth;
                        videoNavPrev.style.marginLeft = '-' + (dotWidth / 2 + 17.5) + 'px';
                        videoNavNext.style.marginLeft = dotWidth / 2 + 7.5 + 'px';
                    })
                    console.log(dotWidth);
                }, 50);


            }();

        // Content Slider add Arrow Text 
        ! function () {
            setTimeout(function () {
                var owlNext = $('.content-slider-items .owl-nav button.owl-next');
                if (owlNext) {
                    owlNext.innerHTML = '<span aria-label="Next">›</span><span class="bold">Découvrir</span><span class="regular">tous les cours</span>';
                }
            }, 50);
        }();


    });
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1199) {

            logoHeight = Math.floor(logoWrap.offsetHeight - getComputedStyle(logoWrap).paddingTop.substring(0, getComputedStyle(logoWrap).paddingTop.length - 2));


            toggleBtnHeight = Math.floor(navToggleBtn.offsetHeight - getComputedStyle(navToggleBtn).paddingTop.substring(0, getComputedStyle(navToggleBtn).paddingTop.length - 2));

            logoWrap.style.paddingTop = (79 - logoHeight) / 2 + 'px';
            navToggleBtn.style.paddingTop = (79 - toggleBtnHeight) / 2 + 'px';
        } else {
            logoWrap.style.paddingTop = '0px';
            navToggleBtn.style.paddingTop = '0px';
        }
    });

    // videoSlide.addEventListener('click',function() {
    //     const style = document.createElement('style');
    //     style.className = 'hover-style'
    //     style.innerHTML = `
    //         section#video-slider .video-slides:after,
    //         section#video-slider .video-slides:before {
    //             transform: translateY(-15px);
    //         }
    //     `;
    //     document.head.append(style);
    // })
    // videoSlide.addEventListener('mouseout',function() {
        
    // })

    // Video slider hover
    

}();

// Custom Jquery and Plugins Activation 
$(document).ready(function () {
    $('.nav-toggle-btn').on('click', function () {
        $('nav.main-menu').slideToggle();
        $('header#header-section .logo-menu > .container').toggleClass('menu-open');
    });

    // Team Carousel
    if ($('#team-carousel .team-items').length) {
        $('#team-carousel .team-items').owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: true,
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 2500,
            dots: 0,
            touchDrag: 0,
            mouseDrag: 0,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                768: {
                    items: 2,
                    slideBy: 1,
                    autoplay: false, 
                },
                1199: {
                    autoplay: true, 
                    items: 4,
                    slideBy: 3
                }
            }
        });

        ! function () {
            
            var teamNextBtn = document.querySelector('#team-carousel .team-items button.owl-next');
            function teamSlideOpacity() {
                if (window.innerWidth >= 768) {
                    var activeItems = document.querySelectorAll('.team-items .owl-stage .owl-item.active');
                    activeItems.forEach(function (items) {
                        items.classList.remove('opacity-half');
                    });
                    activeItems[activeItems.length - 1].classList.add('opacity-half');
                }
                if (window.innerWidth <= 767) {
                    var activeItems = document.querySelectorAll('.team-items .owl-stage .owl-item.active');
                    activeItems.forEach(function (items) {
                        items.classList.remove('opacity-half');
                    });
                }
            }
            teamSlideOpacity();
            teamNextBtn.addEventListener('click', teamSlideOpacity);
            setInterval(function () {
                teamSlideOpacity();
            }, 400);

        }()
    }

    // Content Slider 
    if ($('.content-slider-items').length) {
        $('.content-slider-items').owlCarousel({
            items: 4,
            autoplay: true,
            margin: 30,
            loop: true,
            nav: true,
            slideBy: 3,
            dots: 0,
            touchDrag: 0,
            mouseDrag: 0,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                },
                768: {
                    items: 2,
                    slideBy: 1
                },
                1200: {
                    items: 3,
                    slideBy: 2,
                },
                1300: {
                    items: 4,
                    slideBy: 3
                }
            }
        });

        // $('#team-carousel .team-items').on('translated.owl.carousel', function (event) {
        //     contentSlideOpacity();
        // });

        ! function () {
            var activeItems = document.querySelector('#content-slider .content-slider-items button.owl-next');
            var contentNextBtn = document.querySelector('.content-slider-items .owl-nav button.owl-next');
            console.log(contentNextBtn);

            function contentOpacity() {
                if (window.innerWidth >= 768) {
                    var activeItems = document.querySelectorAll('#content-slider .content-slider-items .owl-stage .owl-item.active');
                    activeItems.forEach(function (item) {
                        item.classList.remove('opacity-half');
                    });
                    activeItems[activeItems.length - 1].classList.add('opacity-half');
                }

                if (window.innerWidth <= 767) {
                    var activeItems = document.querySelectorAll('#content-slider .content-slider-items .owl-stage .owl-item.active');
                    activeItems.forEach(function (items) {
                        items.classList.remove('opacity-half');
                    });
                }

            }
            contentOpacity();
            setInterval(function () {
                contentOpacity();
            }, 700);
            contentNextBtn.addEventListener('click', contentOpacity);
        }();

    }

    // Video Slider
    if ($('#video-slider .video-slides').length) {
        $('#video-slider .video-slides').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay: true, 
            touchDrag: 0,
            mouseDrag: 0,
            margin: 15
        });
    }


});