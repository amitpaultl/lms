(function ($) {
    "use strict"; // Start of use strict

// Preloader Start
    $(window).on('load',function () {
        $('#status').fadeOut();
        $('#preloader')
            .delay(350)
            .fadeOut('slow');
        $('body')
            .delay(350)
    });
// Preloader End


// Courses Page Filter Show/Hide Start
    if($(window).width() > 767) {
    var allCourseArea = $(".show-all-course-area-wrap");
    var filter = $("#filter");
    var coursesGgrids = $(".courses-grids");
    var coursesSidebar = $(".coursesLeftSidebar");
    var grid = coursesGgrids.find(".col-xl-4");

    filter.on("click", function() {

        coursesSidebar.toggleClass("bang");
        allCourseArea.toggleClass("col-md-12 col-lg-12 col-sm-12 col-xl-12");

        if( (grid.hasClass("col-xl-4")) || grid.hasClass("col-lg-6")) {
            grid.removeClass("col-xl-4").addClass("col-xl-3");
            grid.removeClass("col-lg-6").addClass("col-lg-4");
        } else {
            grid.addClass("col-xl-4").removeClass("col-xl-3");
            grid.addClass("col-lg-6").removeClass("col-lg-3");
        }

    })

}
// Courses Page Filter Show/Hide End

/// MAIN MENU SCRIPT START

    // Multilevel Dropdown Menu Script Start
    document.addEventListener("DOMContentLoaded", function(){

        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
            element.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })

        // make it as accordion for smaller screens
        if (window.innerWidth < 992) {

            // close all inner dropdowns when parent is closed
            document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
                everydropdown.addEventListener('hidden.bs.dropdown', function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                        // hide every submenu as well
                        everysubmenu.style.display = 'none';
                    });
                })
            });

            document.querySelectorAll('.dropdown-menu a').forEach(function(element){
                element.addEventListener('click', function (e) {

                    let nextEl = this.nextElementSibling;
                    if(nextEl && nextEl.classList.contains('submenu')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();
                        console.log(nextEl);
                        if(nextEl.style.display == 'block'){
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }

                    }
                });
            })
        }
        // end if innerWidth

    });
    // DOMContentLoaded  end
    // Multilevel Dropdown Menu Script End

    // Dropdown 991 width fixed start
    if($(window).width() <= 991) {
        var flag = $(".menu-language-btn");
        var notification = $(".menu-notification-btn");
        var userBtn = $(".menu-user-btn");

        flag.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        notification.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
        userBtn.find("> a").addClass("dropdown-toggle").attr("data-bs-toggle", "dropdown");
    }
    // Dropdown 991 width fixed end

    // Jquery counterUp Start
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // Jquery counterUp End

    // Course Slider Owl Carousel Start
    $('#myTab a').on('shown.bs.tab', function () {
        destroy_owl($('.owl-carousel'));
        initialize_owl($('.owl-carousel'));
    })

    function initialize_owl(el) {
        $('.course-slider-items').owlCarousel({
            items:4,
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            nav: true,
            navText: [
                "<span class=\"iconify\" data-icon=\"la:angle-left\"></span>",
                "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items:1,
                },
                576: {
                    items:1,
                },
                768: {
                    items:2,
                },
                1200: {
                    items:4,
                }
            },
        });
    }

    initialize_owl();

    function destroy_owl(el) {
        el.trigger("destroy.owl.carousel");
        el.find('.owl-stage-outer').children(':eq(0)').unwrap();
    }
    // Course Slider Owl Carousel End

    // Blog Page Slider Owl Carousel Start
    $('.blog-slider-items-wrap').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            "<span class=\"iconify\" data-icon=\"la:angle-left\"></span>",
            "<span class=\"iconify\" data-icon=\"la:angle-right\"></span>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items:1,
            },
            576: {
                items:1,
            },
            768: {
                items:1,
            },
            1200: {
                items:1,
            }
        },
    });
    // Blog Page Slider Owl Carousel End

    /*---------------------------------
    Feather Icon JS
   -----------------------------------*/
    feather.replace();

    /*---------------------------------
    venobox
   -----------------------------------*/
    $('.venobox').venobox();

    /*---------------------------------
    Review Progress-Bar
   -----------------------------------*/
    $('.barra-nivel').each(function() {
        var valorLargura = $(this).data('nivel');
        var valorNivel = $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");
        $(this).animate({
            width: valorLargura
        });
    });

    // Image Size Resize JS
    var boxBgSetting = $(".box-bg-image");
    boxBgSetting.each(function(index){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    /*---------------------------------
    account-page- dropdown menu
    -----------------------------------*/
    $( ".menu-has-children" ).on("click", function() {
        $(this).toggleClass( "has-open" );
    });

    // Show/Hide Password/ Toggle Password Script Start
    $(".toggle").on("click", function () {

        if ($(".password").attr("type") == "password")
        {
            //Change type attribute
            $(".password").attr("type", "text");
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
        } else
        {
            //Change type attribute
            $(".password").attr("type", "password");
            $(this).addClass("fa-eye");
            $(this).removeClass("fa-eye-slash");
        }
    });
    // Show/Hide Password/ Toggle Password Script End


    /*---------------------------------
    Upload Course Multi Step Form Js Start
    -----------------------------------*/
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $(".upload-course-step-item").length;

    setProgressBar(current);

    $(".next").on("click", function(){

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($(".upload-course-step-item").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").on("click", function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($(".upload-course-step-item").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        // $(".progress-bar").css("width",percent+"%")
    }

    $(".submit").on("click", function() {
        return false;
    })
    // Upload Course Multi Step Form Js End

    // Onclick Add or Remove Class from Stepper Form Start

    // Upload Overview
    $('#upload-course-overview-1 .theme-button1').on('click', function () {
        $('#upload-course-overview-1').addClass('d-none')
        $('#upload-course-overview-2').removeClass('d-none')
    })

    // Upload Video
    $('#upload-course-video-1 .theme-button1').on('click', function () {
        $('#upload-course-video-1').addClass('d-none')
        $('#upload-course-video-2').removeClass('d-none')
    })

    $('#upload-course-video-2 .theme-button1').on('click', function () {
        $('#upload-course-video-2').addClass('d-none')
        $('#upload-course-video-3').removeClass('d-none')
    })
    $('#upload-course-video-2 .common-upload-lesson-btn').on('click', function () {
        $('#upload-course-video-2').addClass('d-none')
        $('#upload-course-video-4').removeClass('d-none')
    })
    $('#upload-course-video-3 .common-upload-lesson-btn').on('click', function () {
        $('#upload-course-video-3').addClass('d-none')
        $('#upload-course-video-4').removeClass('d-none')
    })

    $('#upload-course-video-4 .common-upload-video-btn').on('click', function () {
        $('#upload-course-video-5').removeClass('d-none')
    })

    $('#upload-course-video-5 .theme-button1').on('click', function () {
        $('#upload-course-video-5').addClass('d-none')
        $('#upload-course-video-4').addClass('d-none')
        $('#upload-course-video-6').removeClass('d-none')
        $('#upload-course-video-6').addClass('show-next-go-btn')
    })

    $('#upload-course-video-6 .upload-course-video-main-edit-btn').on('click', function () {
        $('#upload-course-video-6').addClass('d-none')
        $('#upload-course-video-7').removeClass('d-none')
    })
    $('#upload-course-video-7 .upload-video-processing-item-update-btn.theme-button1').on('click', function () {
        $('#upload-course-video-7').addClass('d-none')
        $('#upload-course-video-6').removeClass('d-none')
        $('#upload-course-video-6').removeClass('show-next-go-btn')
    })

    // Add More Section Show/Hide Option Start
    $('.add-more-section-btn').on('click', function () {
        $('.add-more-section-wrap').removeClass('d-none')
    })
    // Add More Section Show/Hide Option End

    // Onclick Add or Remove Class from Stepper Form End


    // Show Tooltip Start
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover();
    });

})(jQuery); // End of use strict