(function ($) {
    $(function () {



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });

        if ($('.home').length) {
            $('body').addClass('home-page')
        }

        var scaleVal = 1.1;
        setTimeout(function () {
            $('.hero-thumb figure').css({
                'transform': 'scale(' + scaleVal + ')'
            });

            setTimeout(function () {
                $('.hero-thumb figure').css({
                    'transform': 'scale(1)',
                    'transition': '0.6s'
                });
            }, 1400)

        }, 1000)


        $(window).on('scroll', function () {
            var $window = $(window),
                $body = $('body'),
                $panel = $('.bg-change');
            $sTop = $(this).scrollTop();
            $panel.each(function () {
                var $this = $(this);
                var scroll = $window.scrollTop() + ($this.height() / 1.3);
                if ($this.position().top <= scroll) {
                    $body.removeClass(function (index, css) {
                        return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
                    });
                    $body.addClass('bg-' + $(this).attr('data'));
                }
            });
        }).scroll();


        $(".testimonials-thumb").each(function () {
            var $this = $(this);
            $this.mouseenter(function () {
                $(".testimonials-thumb").removeClass("active")
                $(".testimonials-thumb .testimonials-content").fadeOut();
                if ($this.find(".testimonials-content:visible").length) {
                    $(".testimonials-thumb").removeClass("active")
                    $(".testimonials-thumb .testimonials-content").fadeOut();
                } else {
                    $this.find(".testimonials-thumb .testimonials-content").fadeIn();
                    $this.find(" > .testimonials-content").fadeIn();
                }
            })
            $this.mouseleave(function () {
                $this.find('.testimonials-content').fadeOut();
                $this.removeClass("active");
            })
        })

        if ($('.happy-job-marquee').length) {
            $('.happy-job-marquee').marquee({
                direction: 'left',
                duration: 30000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        if ($('.hero-thumb').length) {
            var inner = $(".hero-thumb figure");
            var winOuterHeight = $(window).outerHeight();

            $(window).on('scroll', function () {
                var scrollY = $(this).scrollTop();
                if($(window).width() > 1599){
                    var value = $(this).scrollTop() / `${winOuterHeight / 2}` + 1;
                }
                if($(window).width() > 767 && $(window).width() < 1600){
                    var value = $(this).scrollTop() / `${winOuterHeight / 1.5}` + 1;
                }
                if($(window).width() < 768){
                    var value = $(this).scrollTop() / `${winOuterHeight * 1.5}` + 1;
                }
                $('.hero-thumb').css({
                    'transform': 'translate(-50%, -50%) scale(' + value + ')'
                })

            })
        }

        if ($('.home-hero-thumb').length) {
            $('.home-hero-thumb').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                fade: true,
                autoplay: true,
                speed: 800,
            })
            $(window).on('resize', function () {
                $('.home-hero-thumb').slick('resize');
            });
        }

        if ($('.different-component-wrap').length) {
            $('.different-component-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                mobileFirst: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.different-component-wrap').slick('resize');
                });
        }

        // Start About JS
        $(".our-values-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h2").on("click touch", function(){
                $(".our-values-accordion-item").removeClass("active")
                $(".our-values-accordion-item .our-values-accordion-item-content").slideUp();
                if($this.find(".our-values-accordion-item-content:visible").length){
                    $(".our-values-accordion-item").removeClass("active")
                    $(".our-values-accordion-item .our-values-accordion-item-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".our-values-accordion-item .our-values-accordion-item-content").slideUp();
                    $this.find(" > .our-values-accordion-item-content").slideDown();
                }
            })
        })
        // End About JS

        // Start Team JS
        $('.team-tab-trigger ul li').click(function () {
            $('.team-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.team-tab-item-wrap .team-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        // End Team JS

        // Start Register Js
        $(".work-dropdown select").change(function() {
            $(".register-check-box-wrap").slideDown()
        });

        // End Register Js

        //Start jobs page Js
        $('.jobs-tab-trigger ul li').click(function () {
            $('.jobs-tab-trigger ul li').removeClass('jobs-active');
            $(this).addClass('jobs-active');
            $('.jobs-tab-item-wrap .jobs-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        //End jobs page Js

        // Start PopUp Style

        
        $('div.jobs-item').each(function () {
            $$_this = $(this);
            $$_this.find('.details-btn').click(function (e) {
                e.preventDefault()
                var valE = $(this).parent().parent().text()
                // console.log(valE)
                
                $('body').addClass('popupShown')
                $(this).parent().parent().find(".blur-bar").show()
                $(this).parent().parent().find(".popup-wrap").fadeIn(400)
                
            })


        })
        
        if ($('.login-popup-btn').length) {
            $('.login-popup-btn').click(function (e) {
                e.preventDefault()
                $('body').addClass('popupShown')
                $(".popup-wrap").fadeToggle()
                $(".blur-bar").show()
                
            });
        }

        $('.popup-close').click(function () {
            $(".popup-wrap").fadeOut()
            $(".blur-bar").hide()
            $('body').removeClass('popupShown')
        })
        $('.popup-card').click(function () {
            $(".popup-wrap").fadeOut()
            $('body').removeClass('popupShown')
            $(".blur-bar").hide()

            
        })
        $('.popup-inner').click(function (e) {
                e.stopPropagation();
        });
        
        $('.cookies-close').click(function () {
            $(".cookies-wrap").fadeOut()
        })

        // End PopUp Style

        // Start Timeline JS
        $(".timeline-trigger-info").each(function () {
            var $this = $(this);
            $this.find('a').mouseenter(function () {
                
                $this.find(" > .gauranteee-text").fadeIn();
                $this.addClass("active");
            })
            $this.mouseleave(function () {
                $this.find('.gauranteee-text').fadeOut();
                $this.removeClass("active");
            })
        })
        $('.timeline-trigger-info').click(function (e) {
            e.preventDefault()
        });

        $(".timeline-component").each(function () {
            var $this = $(this);
            $this.find('a').mouseenter(function () {
                $this.find(" > .timeline-component-content").fadeIn();
                $this.addClass("active");
            })
            $this.mouseleave(function () {
                $this.find('.timeline-component-content').fadeOut();
                $this.removeClass("active");
            })
        })
        $('.timeline-component').click(function (e) {
            e.preventDefault()
        });

        $('.timeline-trigger-btn-wrap a').click(function () {
            $('.timeline-trigger-btn-wrap a').removeClass('active');
            $(this).addClass('active');
            var sliderItem = $('.timeline-slider-item')
            // sliderItem.hide();
            sliderItem.removeClass("active");

            var activeTab = $(this).attr('href');

            // $(activeTab).fadeIn();
            $(activeTab).addClass("active");

            return false;
        });
        
        if ($('.timeline-wrap').length) {
            var menu = ['swiper-pagination-bullet timeline-trigger-btn timeline-trigger-1', 'swiper-pagination-bullet timeline-trigger-btn timeline-trigger-2', 'swiper-pagination-bullet timeline-trigger-btn timeline-trigger-3', 'swiper-pagination-bullet timeline-trigger-btn timeline-trigger-4', 'swiper-pagination-bullet timeline-trigger-btn gauranteee-timeline-btn']
            var texts = ['week 1', 'week 2', 'Pre–start', 'Post–start', 'our gauranteee']
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                freeMode: true,
                speed: 500,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<div class="' + (menu[index]) + '">  <span>' + (texts[index]) + '</span> </div>';
                    },
                },
                navigation: {
                    prevEl: '.slidePrev-btn',
                    nextEl: '.slideNext-btn'
                }
            });
            $(window).on('load resize', function () {
                if ($(window).width() < 520) {
                    swiper.on('slideChange', function (e) {
                        var positionNav = $('.swiper-pagination-bullet-active').position().left / 1.5;
                        $('.timeline-trigger-btn-wrap').css("transform", `translateX(${-positionNav}px)`);
                        if ($('.timeline-trigger-1').hasClass('swiper-pagination-bullet-active')) {
                            $('.timeline-trigger-btn-wrap').css("transform", `translateX(${0}px)`);
                        }
                    });
                }
            })
            
            
            
        }
        
          
        // End Timeline JS


        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 67,
            classes: {

                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup',
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                frozen: "headroom--frozen",

            }
        });
        header.init();


    }) // End ready function.




})(jQuery)