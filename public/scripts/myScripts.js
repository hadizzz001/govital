
var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
var isipad = navigator.userAgent.match(/(iPad)/i);

var brandSwiper = undefined;
var realCurrentSlide = 0;

if (navigator.platform.match('Mac') !== null) {   // to target mac only
    $('body').addClass('Mac');
}






// escape button escape button
//____________________________________________________________________________________________________


document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {   //escape buttom


        if ($('.menuPop').height() != 0) {
            closeMobSubMenu();
            closeMobileMenu();
        }
        if ($('.subMenu .wrap').height() != 0) {
            closeSubMenu()
        }


    }
}
//____________________________________________________________________________________________________




// ___________________________________________________________________________________________________
// disable css transition movements on  elements when refreshing  the browser (mainly for ie)

$(document).ready(function () {
    disableTransition();
});

$(window).resize(function () {
    disableTransition();
});

function disableTransition() {
    $('.menuPop,.rollMenu,#menu .links>li>a,.mediaOptions li a,#animation1 .prev,#animation1 .next').addClass('notransition');
    setTimeout(function () { $('.menuPop,.rollMenu,#menu .links>li>a,.mediaOptions li a,#animation1 .prev,#animation1 .next').removeClass('notransition'); }, 300);
}

// ___________________________________________________________________________________________________










// slideshow on homepage
//____________________________________________________________________________________________________
var slideshowSwiper;

//$(window).load(function () {
//    slideshow();
//});


function slideshow() {
    slideshowSwiper = new Swiper('#slideshow .screen', {
        loop: true,
        autoplay: 7000,
        speed: 700,
        nextButton: '#slideshow .next',
        prevButton: '#slideshow .prev',
        slidesPerView: 1,
        spaceBetween: 0,
        autoplayDisableOnInteraction: true,
        keyboardControl: true,
        pagination: '#slideshow .swiper-pagination',
        paginationClickable: true,
        onSlideChangeStart: function (slideshowSwiper) {
            $('#slideshow .caption').removeClass('show');
            setTimeout(function () {
                $("#slideshow .swiper-slide").eq(slideshowSwiper.activeIndex).find(".caption").addClass('show');
            }, 800);
        }
    });
}
//____________________________________________________________________________________________________







// how it works swiper on homepage
//____________________________________________________________________________________________________

var howSwiper = new Swiper('#how .screen', {
    loop: false,
    autoplay: 0,
    speed: 1000,
    slidesPerView: 'auto',
    spaceBetween: 0,
    keyboardControl: false,
    nextButton: '#how .next',
    prevButton: '#how .prev'
});


//____________________________________________________________________________________________________










// swiper on homepage under the main top slideshow
//____________________________________________________________________________________________________

$(window).load(function () {

    $('#animation1').removeClass('hidden'); // show animation after   load

    var itemsSwiper = new Swiper('#animation1 .screen', {
        loop: true,
        autoplay: 0,
        speed: 700,
        nextButton: '#animation1 .next',
        prevButton: '#animation1 .prev',
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: 0,
        autoplayDisableOnInteraction: false,
        slidesOffsetBefore: 32,
        breakpoints: {
            767: {
                slidesOffsetBefore: 15
            }
        }
    });

});

//____________________________________________________________________________________________________










// scroll window up
//____________________________________________________________________________________________________
$('footer .scrollUp').click(function () {
    $('html,body').animate({ scrollTop: 0 });
});
//____________________________________________________________________________________________________










// news swiper on homepage
//____________________________________________________________________________________________________
$(window).load(function () {
    var newsSwiper = new Swiper('#news .screen', {
        loop: false,
        autoplay: 0,
        speed: 700,
        loopAdditionalSlides: 111,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: '#news .swiper-pagination',
        paginationClickable: true
    });
});
//____________________________________________________________________________________________________



























// display thx mssg in forms
//____________________________________________________________________________________________________





//____________________________________________________________________________________________________














// google map in contact page
//____________________________________________________________________________________________________

if ($('body').hasClass('contactPage')) {

    $(window).load(function () {
        var listMapItems = $(".mapDiv .map-item");

        var headquarterLat = parseFloat($(".mapDiv .map-item.map-headquarter").attr("data-item-lat"));
        var headquarterLng = parseFloat($(".mapDiv .map-item.map-headquarter").attr("data-item-lng"));

        var options = {
            center: new google.maps.LatLng(headquarterLat, headquarterLng),
            zoom: 10,
            zoomControl: true,
            disableDefaultUI: true
        };
        var div = document.getElementById('map');
        var map = new google.maps.Map(div, options);

        var image = {
            url: 'http://shift2.koein.com/DaherFoods/Areas/Html/Content/images/pointer.png',
            scaledSize: new google.maps.Size(32, 44)
        }

        $(listMapItems).each(function () {
            var isHeadquarter = $(this).attr("data-item-headquarter");
            var title = $(this).attr("data-item-title");
            var itemLat = parseFloat($(this).attr("data-item-lat"));
            var itemLng = parseFloat($(this).attr("data-item-lng"));

            var marker = new google.maps.Marker({
                position: { lat: itemLat, lng: itemLng },
                map: map,
                icon: image
            });

            if (isHeadquarter == "True") {
                var contentString = "<span style='font-family:tahoma, arial; color:#fff'>" + title + "</span>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });

                setTimeout(function () {
                    infowindow.open(map, marker);
                }, 700);

                google.maps.event.addListener(infowindow, 'domready', function () {

                    // Reference to the DIV which receives the contents of the infowindow using jQuery
                    var iwOuter = $('.gm-style-iw');

                    /* The DIV we want to change is above the .gm-style-iw DIV.
                     * So, we use jQuery and create a iwBackground variable,
                     * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
                     */
                    var iwBackground = iwOuter.prev();

                    // Remove the background shadow DIV
                    iwBackground.children(':nth-child(2)').css({ 'display': 'none' });

                    // Remove the white background DIV
                    iwBackground.children(':nth-child(4)').css({ 'display': 'none' });

                    iwBackground.children(':nth-child(3)').find('div').children().css({ 'background-color': '#6dbe33' });
                    var iwCloseBtn = iwOuter.next();
                    iwCloseBtn.css({
                        display: 'none'
                    });
                });
            }

        });
    })
}
//____________________________________________________________________________________________________








// contact page select branches in mobile version
//____________________________________________________________________________________________________

$(function () {
    $('#branchselector').change(function () {
        $('.Contact .branches li').hide();
        $('#' + $(this).val()).show();
    });
});

//____________________________________________________________________________________________________















// brands details swiper at bottom of page (Try Some Other Brands Flavors:)
//____________________________________________________________________________________________________
$(window).load(function () {
    var animation3Swiper = new Swiper('#animation3 .screen', {
        loop: true,
        autoplay: 0,
        loopedSlides: 3111,
        speed: 700,
        slidesPerView: 'auto',
        spaceBetween: 35,
        keyboardControl: false,
        width: 222,
        breakpoints: {
            767: {
                spaceBetween: 24,
                slidesPerView: 'auto'
            }
        }
    });
});
//____________________________________________________________________________________________________







// media page - left menu 
//____________________________________________________________________________________________________


if ($('body').hasClass('mediaPage')) {
    $(window).load(function () {
        //  changeOrder();
        makeFixed();
    });
    $(window).resize(function () {
        //   changeOrder();
        makeFixed();
    });
}




function makeFixed() {
    if ($(window).width() > 750) {

        $(".fixedBox").stick_in_parent({
            offset_top: 122,
            bottoming: true,
            recalc_every: 1
        });

        $('.fixedBox')
        .on('sticky_kit:bottom', function (e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function (e) {
            $(this).parent().css('position', 'relative');
        })

    } else {
        $(".fixedBox").trigger("sticky_kit:detach");
    }
}



function changeOrder() {
    if ($(window).width() <= 1183 && $(window).width() > 750) {
        $('.Media .Others').insertBefore('.endDiv');


    } else {
        $('.Media .Others').insertAfter('.empty');
    }

}



function openSubMenu() {             // below 768 open the sub menu
    var h = $('.subMenu ul.links').height();
    $('.subMenu .wrap').css('height', h);
}

function closeSubMenu() {
    $('.subMenu .wrap').css('height', 0);
}


var name = $('.subMenu ul.links a.selected').html();
$('.subMenu .title span').html(name);


$('.subMenu .title').click(function (event) {
    if ($('.subMenu .wrap').height() != 0) {
        closeSubMenu()
    } else {
        openSubMenu()
    }
    event.stopPropagation();
});

$('#wrapper').click(function (event) {
    if ($('.subMenu .wrap').height() != 0) {
        closeSubMenu()
    }
});


//____________________________________________________________________________________________________



















// scrolling the window to the equivalent sections
//____________________________________________________________________________________________________
$(window).load(function () {


    if (window.location.hash != 0) {
        setTimeout(function () {
            var url = window.location.hash;
            var $target2 = $(url);
            var value2 = $target2.offset().top - 54;

            $('html, body').stop().animate({
                'scrollTop': value2
            }, 500, 'swing');
        }, 100);
    }

    $('.rollMenu .greenBox li a').click(function (event) {


        if ($('.menuPop').hasClass('open')) {
            closeMobileMenu()
            closeMobSubMenu()
        }

        var target = this.hash;
        var $target = $(target);
        var value = $target.offset().top - 64;
        $('html, body').stop().animate({
            'scrollTop': value
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
        event.stopPropagation();
    });


});



//____________________________________________________________________________________________________










// brand details page, modify html order when resizing (switch social media and become a fan order)
//____________________________________________________________________________________________________


if ($('body').hasClass('detailPage')) {
    $(document).ready(function () {
        revertOrder();
    });
    $(window).resize(function () {
        revertOrder();
    });
}



function revertOrder() {
    if ($(window).width() <= 750) {
        $('#animation4 .becFan').insertBefore('#animation4 .media');
    } else {
        $('#animation4 .becFan').insertAfter('#animation4 .media');
    }

}




//____________________________________________________________________________________________________

















// ___________________________________________________________________________________________________
// make header fixed upon scrolling


function fixedHeader() {
    if ($(window).width() > 750) {   // (only desktops)

        if ($(window).scrollTop() > ($('#slideshow').height()) && $('body').hasClass('homePage')) {
            slideHeader()
        }
        else {
            $('header').addClass('hide');
        }
    }

    if ($(window).scrollTop() <= 100) {
        unslideheader();
    }

    if ($(window).scrollTop() > 300) {
        $('header').addClass('minimise');
    } else {
        $('header').removeClass('minimise');
    }

}


function slideHeader() {
    $('header').addClass('fixed');
    $('#content').addClass('space');
    $('header').removeClass('hide');
}


function unslideheader() {
    $('header').removeClass('fixed');
    $('#content').removeClass('space');
    $('header').removeClass('hide');
}

$(window).scroll(function () { fixedHeader(); });
$(document).ready(function () { fixedHeader(); });


// ___________________________________________________________________________________________________











// rollmenus in header
//____________________________________________________________________________________________________


function mainMenu() {

    if ($(window).width() > 750) {   // (only desktops)

        if (!isipad) {    // all desktop except ipad
            closeMobSubMenu();
            closeMobileMenu();
            $('#menu .links>li,#menu .links>li>a').unbind('click');
            $('#content,footer').removeClass('layer');
            $('#menu .links>li').mouseover(function () {
                var obj = $(this);
                openRollMenu(obj);
            });

            $('#menu .links>li').mouseleave(function () {
                var obj = $(this);
                closeRollMenu(obj);
            });

            $('#menu .links>li>a').mouseover(function () {
                $('#menu .links>li>a').addClass('diableSelected');
                $('#menu .links>li>a').removeClass('selected2');
                $(this).addClass('selected2');
            });

        }
    } else {   // below 768

        $('#menu .links>li,#menu .links>li>a').unbind('mouseover');
        $('#menu .links>li').unbind('mouseleave');


        $('#menu .links>li>a').click(function (e) {  // allow hyperlink on brands and careers only on 2nd click 
            if (!$(this).parents('li').hasClass('main') && ($(this).html() != "Contact Us")) {
                e.preventDefault();
            }
        });


        $('#menu .links>li').click(function () {
            var obj = $(this);
            openMobSubMenu(obj);
        });

        $('.backMenu').click(function () {
            closeMobSubMenu();
        });

    }

    if (isipad) {    // only for ipad

        $('#menu .links>li>a').click(function (e) {  // prevent the hyperlink on ipad
            if ($(this).parent('li').find('.rollMenu ').length != 0) {
                e.preventDefault();
            }
        });


        $('#menu .links>li').click(function (event) {
            var obj = $(this);
            if ($(obj).find('.rollMenu').height() != 0) {
                closeRollMenu(obj);
            } else {
                $('.rollMenu').css('height', 0);
                $('.rollMenu').removeClass('show');
                $('#menu .links>li>a').removeClass('selected2');
                $('#slideshow').removeClass('layer');
                openRollMenu(obj);
                $(window).resize(function () { // top update popup height
                    var h = $(obj).find('.rollMenu .wrap').height();
                    $(obj).find('.rollMenu').css('height', h);
                });
            }

            event.stopPropagation();
        });

        $('#wrapper').click(function () {
            $('.rollMenu').css('height', 0);
            $('.rollMenu').removeClass('show');
            $('#menu .links>li>a').removeClass('selected2');
            $('#menu .links>li>a').removeClass('diableSelected');
            $('#slideshow,.Photo').removeClass('layer');
        });
        $('.rollMenu').click(function (event) {
            event.stopPropagation();
        });



    }

}



mainMenu();
if (!isipad) {
    $(window).resize(function () {
        mainMenu();
    });
}


$('.openMenu').click(function () {
    if ($('.menuPop').height() == 0) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
});

$('.rollMenu .greenBox li a').click(function (obj) {
    closeRollMenu(obj)
});



function openRollMenu(obj) {
    if ($(obj).find('.rollMenu').length > 0) {
        var h = $(obj).find('.rollMenu .wrap').height();
        $(obj).find('.rollMenu').css('height', h);
        $(obj).find('.rollMenu').addClass('show');
        $(obj).find('a').addClass('selected2');
        $('#slideshow,.Photo').addClass('layer');
        $('header').addClass('remvOverflow');
        $('#menu .links>li>a').addClass('diableSelected');
    }

}

function closeRollMenu(obj) {
    $(obj).find('.rollMenu').css('height', 0);
    $(obj).find('.rollMenu').removeClass('show');
    $(obj).find('a').removeClass('selected2');
    $('#slideshow,.Photo').removeClass('layer');
    $('header').removeClass('remvOverflow');
    $('#menu .links>li>a').removeClass('diableSelected');
}


function openMobileMenu() {
    var height = $('#menu').innerHeight();
    $('.menuPop').addClass('open');
    $('#content,footer').addClass('layer');
    $('body').addClass('stopScroll');


    setTimeout(function () {
        $('#menu,.mediaOptions').addClass('fade');
    }, 400);
}

function closeMobileMenu() {
    $('#menu,.mediaOptions').removeClass('fade');
    setTimeout(function () {
        $('.menuPop').removeClass('open');
        $('#content,footer').removeClass('layer');
        $('body').removeClass('stopScroll');
    }, 400);
}

function openMobSubMenu(obj) {
    if ($(obj).find('.rollMenu').length > 0) {
        $('#menu .links>li').addClass('hide');
        $(obj).addClass('main');
        var h2 = $(obj).find('.rollMenu .wrap').height();
        var topOffset = $(obj).offset().top;
        var windowHeight = $(window).height();
        $(obj).find('.rollMenu').css('height', (windowHeight - (topOffset + 143)));
        $(obj).find('.rollMenu').addClass('slide');
        $('.backMenu').show();
    }
}

function closeMobSubMenu() {
    $('.rollMenu').removeClass('slide');
    setTimeout(function () {
        $('.rollMenu').css('height', 0);
        $('#menu .links>li').removeClass('hide main');
        $('.backMenu').hide();
    }, 400);
}


//____________________________________________________________________________________________________










/* detecting ios */
//____________________________________________________________________________________________________
var md = new MobileDetect(window.navigator.userAgent);

$(document).ready(function () {

    if (md.os() == "iOS") {
        $("html").addClass("ios");

    }
});

//____________________________________________________________________________________________________














//  modal popup show opacity overlays    & youtube embed for mobiles
//____________________________________________________________________________________________________


$('.modal').on('show.bs.modal', function (e) {
    console.log(e);
    $('#content').addClass('opac')     // add opacity to content 
    if ($('body').hasClass('homePage')) {
        var videoId = $(e.relatedTarget).attr("data-videoId");

        var videoUrl = "http://www.youtube.com/embed/" + videoId + "?autohide=1&rel=0"
        $('.modal').find('iframe').attr('src', videoUrl);
     //   location.hash = 'video' + videoId;
    }
    else {
        var videoId = $(e.relatedTarget).attr("data-videoId");
        var videoUrl = "http://www.youtube.com/embed/" + videoId + "?autohide=1&rel=0"
        $('.modal').find('iframe').attr('src', videoUrl);
    //    location.hash = 'video' + videoId;
    }
});

$('.modal').on('hide.bs.modal', function (e) {
    $('#content').removeClass('opac')     // remove opacity from content 
    $('.modal').find('iframe').attr('src', '');  //stop playing
 //   removeHash();
});



// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    var ytElt = $(".youtube-attr");
    var ytEltId = $(ytElt).attr("data-videoid");
    player = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        videoId: ytEltId,
        events: {
            'onReady': stopVideo,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === 0) {
        stopYoutube();
    }
}

function playYoutube() {
    $('.playMovie').show();
    playVideo();
}

function stopYoutube() {
    $('.playMovie').hide();
    stopVideo()
}

function playVideo() {
    player.playVideo();
}

function stopVideo() {
    player.stopVideo();
}







$('#slideshow .swiper-slide[data-target]').click(function (event) {   //  disable video modal popup on mobiles on homepage main slideshow
    if ($(window).width() <= 750) {
        event.stopPropagation();
        playYoutube();
    }
});

$('#history ul.items li .pic[data-target]').click(function (event) {   //  disable video modal popup on mobiles in history page (ipad like mobile here)
    var ytElt = $(this);
    var ytEltId = $(ytElt).attr("data-videoid");
    
    if ($(window).width() <= 753 || isipad) {

        player.loadVideoById(ytEltId) // change youtube movie

        event.stopPropagation();  //to stop desktop modal open 
        playYoutube();
    }
});




$(window).resize(function () {
    if ($(window).width() > 750 && $('#ytplayer').length != 0) {      // stop mobile youtube play above 768 resolution
        stopYoutube()
    }
});




//____________________________________________________________________________________________________






// brands details swiper at top of page
//____________________________________________________________________________________________________


$(document).ready(function () {

    slideshow();

    //#region Check HashCode
    //if (getHash().indexOf("video") > 0) {
    //    var videoId = getHash().substring(6, getHash().length);
    //    $("['data-videoId'="+videoId+"]").click();
    //}
    //#endregion

    initializeBrandSwiper();


    $("form#newsletterForm").validate({
        ignore: "",
        errorPlacement: function (error, element) {
            //$('.notification').html(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.field').removeClass(validClass).addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.field').removeClass(errorClass).addClass(validClass);
        },
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        submitHandler: function (form) {
            var url = $(form).attr("action");
            var data = $(form).serialize();

            $(form).find('[type="submit"]').hide();
            $(form).find('.loader-button').fadeIn();

            $.ajax({
                url: url,
                type: "post",
                data: data,
                success: function (result) {
                    //$(form).addClass("submitted")
                    //if (result.status == 200) {
                    //    setTimeout(function () {
                    //        $(form).addClass("result-submit");
                    //        $(form).find(".message").html("You are now registered in our newsletter.");
                    //        setTimeout(function () {
                    //            $(form)[0].reset();
                    //            $(form).removeClass("submitted").removeClass("successful-submit");

                    //            $(form).find('[type="submit"]').fadeIn();
                    //            $(form).find('.loader-button').fadeOut();
                    //            $(element).parents('.field').removeClass(validClass).removeClass(errorClass);
                    //        }, 5000);
                    //    }, 5000);
                    //}
                    //else if (result.status == 400) {
                    //    setTimeout(function () {
                    //        $(form).addClass("result-submit");
                    //        $(form).find(".message").html("You are already registered in our newsletter.");
                    //        setTimeout(function () {

                    //            $(form)[0].reset();
                    //            $(form).removeClass("submitted").removeClass("failed-submit");

                    //            $(form).find('[type="submit"]').fadeIn();
                    //            $(form).find('.loader-button').fadeOut();
                    //        }, 5000);

                    //    }, 5000);
                    //}
                    //else {
                    //    setTimeout(function () {
                    //        $(form).addClass("failed-submit");
                    //        $(form).find(".message").html("Something went wrong.");

                    //        setTimeout(function () {

                    //            $(form)[0].reset();
                    //            $(form).removeClass("submitted").removeClass("failed-submit");

                    //            $(form).find('[type="submit"]').fadeIn();
                    //            $(form).find('.loader-button').fadeOut();
                    //        }, 5000);

                    //    }, 5000);
                    //}

                    var customMsg = "";
                    if (result.status == 200) {
                        customMsg = "You are now registered in our newsletter.";
                    }
                    else if (result.status == 400) {
                        customMsg = "You are already registered in our newsletter.";
                    }
                    else {
                        customMsg = "Something went wrong.";
                    }
                    setTimeout(function () {
                        $(form).addClass("result-submit");
                        $(form).find(".message").html(customMsg);

                        setTimeout(function () {

                            $(form)[0].reset();
                            $(form).removeClass("submitted").removeClass("result-submit");

                            $(form).find('[type="submit"]').fadeIn();
                            $(form).find('.loader-button').fadeOut();
                            $(form).find('.field').removeClass("valid").removeClass("error");
                            $(form).find(".message").html("");
                        }, 5000);

                    }, 5000);
                }
            });
            return false;
        }
    });

    $("form#contactForm").validate({
        errorClass: "missing",
        ignore: "",
        errorPlacement: function (error, element) {
            //$('.notification').html(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.field').removeClass(validClass).addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.field').removeClass(errorClass).addClass(validClass);
        },
        rules: {
            fullname: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
            var url = $(form).attr("action");
            var data = $(form).serialize();

            //$(form).find('[type="submit"]').hide();
            //$(form).find('.loader-button').fadeIn();

            var button = $(form).find('[type="submit"]');
            $(button).addClass('hide');
            $(button).parent().find('.loader').addClass('show');

            $.ajax({
                url: url,
                type: "post",
                data: data,
                dataType: "json",
                success: function (result) {
                    // if (result.status == 200) {
                    if (result){
                        var button = $(form).find('[type="submit"]');

                        setTimeout(function () {
                            $(button).parents('.Form').addClass('hide');
                            $(button).parents().find('.txMssg').addClass('show');
                            if ($(window).width() > 750) {
                                $('html,body').animate({
                                    scrollTop: $(button).parents('.wrap').find('.txwrap span').offset().top - 200
                                });
                            } else {
                                $('html,body').animate({
                                    scrollTop: $(button).parents('.wrap').find('.txwrap span').offset().top - 100
                                });
                            }
                            setTimeout(function () {
                                $(button).parents('.Form').removeClass('hide');
                                $(button).parents().find('.txMssg ').removeClass('show');
                                $(button).removeClass('hide');
                                $(button).parent().find('.loader').removeClass('show');
                                $(form)[0].reset();
                            }, 2000);
                        }, 2000);

                        return false;

                    } else {
                        //return false;
                    }
                }
            });
            return false;
        }
    });

    $("#animation2.not-a-swiper .swiper-slide").click(function () {
        console.log("clicked");

        var productId = $(this).attr("data-productid");
        console.log(productId);

        var currentBrandId = $("#brandId").val();

        $.ajax({
            url: $("#routeUrl").val() + "brands/SelectedPackages/" + currentBrandId + "/?productId=" + productId,
            type: "post",
            success: function (result) {
                $("#animation4").remove();
                $(".morePrds").remove();
                $("#factsPop").remove();
                $("#content").append(result);

                if ($("#animation2").hasClass("not-a-swiper")) {
                    NotswiperNavigation();
                    lowerSwiperArrows();
                }
                else {
                    swiperNavigation();
                }

                if ($(window).width() < 768) {
                    $("html, body").animate({ scrollTop: "492px" });
                }
                else {
                    $("html, body").animate({ scrollTop: "585px" });
                }
            }
        });

    });

});
$(window).load(function () {
    if ($('body').hasClass('newsDetails')) {
        var articleLink = $("#canonicalUrl").val();
        var totalCount = 0;
        var facebookLink = "http://graph.facebook.com/?id=" + articleLink;

        var linkedInCount = 0,
            facebookCount = 0;

        $.ajax({
            url: facebookLink,
            type: "get",
            dataType: "json",
            success: function (result1) {
                //totalCount += result.share.share_count;
                try{
                    facebookCount = result1.share.share_count;
                }
                catch (err) {
                    facebookCount = 0;
                }
                totalCount += facebookCount;
                $.ajax({
                    url: $("#routeUrl").val() + "shared/downloadAjax",
                    type: "post",
                    data: "url=" + articleLink,
                    dataType: "json",
                    success: function (result2) {
                        //totalCount += result.count;
                        linkedInCount += result2.count;

                        totalCount += linkedInCount;

                        $("#shareCount").text(totalCount);
                        if (totalCount == 0) {
                            $("#shareCount").parent(".count").hide();
                        }
                    }
                });
            }
        });
    }
}).resize(function () {
    if (brandSwiper == undefined) {
        initializeBrandSwiper();
    }

});


//____________________________________________________________________________________________________

function swiperNavigation() {
    $("#animation4 .arrowDiv .prev").click(function () {
        var currentActiveSlide = brandSwiper.activeIndex;
        var swiperLength = brandSwiper.slides.length;
        if (swiperLength > 1) {
            brandSwiper.slidePrev();
            $(".swiper-slide.swiper-slide-active").click();
        }
    });
    $("#animation4 .arrowDiv .next").click(function () {
        var currentActiveSlide = brandSwiper.activeIndex;
        var swiperLength = brandSwiper.slides.length;
        if (swiperLength > 1) {
            brandSwiper.slideNext();
            $(".swiper-slide.swiper-slide-active").click();
        }
    });
}

function NotswiperNavigation() {

    $("#animation4 .arrowDiv .next").click(function () {
        //var slidesCount = $("#animation2 .swiper-slide").length;
        //realCurrentSlide++;
        //$("#animation2 .swiper-slide.swiper-slide-active").removeClass("swiper-slide-active");
        //$($("#animation2 .swiper-slide")[realCurrentSlide]).addClass("swiper-slide-active");

        //if (realCurrentSlide == slidesCount - 1) {
        //    $("#animation2 .prev").removeClass("swiper-button-disabled");
        //    $("#animation2 .next").addClass("swiper-button-disabled");
        //}
        //$("#animation2 .swiper-slide.swiper-slide-active").click();
        $("#animation2 .next").click();
    });


    $("#animation4 .arrowDiv .prev").click(function () {
        //var slidesCount = $("#animation2 .swiper-slide").length;
        //realCurrentSlide--;
        //$("#animation2 .swiper-slide.swiper-slide-active").removeClass("swiper-slide-active");
        //$($("#animation2 .swiper-slide")[realCurrentSlide]).addClass("swiper-slide-active");

        //if (realCurrentSlide == 0) {
        //    $("#animation2 .prev").addClass("swiper-button-disabled");
        //    $("#animation2 .next").removeClass("swiper-button-disabled");
        //}
        //$("#animation2 .swiper-slide.swiper-slide-active").click();

        $("#animation2 .prev").click();

    });
}

function upperSwiperArrows() {
    var slidesCount = $("#animation2 .swiper-slide").length;

    if (realCurrentSlide == 0) {
        $("#animation2 .prev").addClass("swiper-button-disabled");
        $("#animation2 .next").removeClass("swiper-button-disabled");
    }
    else if (realCurrentSlide == slidesCount - 1) {
        $("#animation2 .prev").removeClass("swiper-button-disabled");
        $("#animation2 .next").addClass("swiper-button-disabled");
    }
    else {
        $("#animation2 .prev").removeClass("swiper-button-disabled");
        $("#animation2 .next").removeClass("swiper-button-disabled");
    }
}

function lowerSwiperArrows() {
    var slidesCount = $("#animation2 .swiper-slide").length;

    if (realCurrentSlide == 0) {
        $("#animation4 .arrowDiv .prev").addClass("disabled-arrow");
    }
    else if (realCurrentSlide == slidesCount - 1) {
        $("#animation4 .arrowDiv .next").addClass("disabled-arrow");
    }
    else {
        $("#animation4 .arrowDiv .prev").removeClass("disabled-arrow");
        $("#animation4 .arrowDiv .next").removeClass("disabled-arrow");
    }
}

function initializeBrandSwiper() {
    var availableProducts = $('#animation2 .screen .swiper-slide').length;

    var wrapper_width = 0;
    $('#animation2 .screen .swiper-slide').each(function () {
        wrapper_width += $(this).outerWidth(true);
    });

    var container_width = $('#animation2 .screen').innerWidth();

    if (wrapper_width > container_width) {
        brandSwiper = new Swiper('#animation2 .screen', {
            loop: true,
            autoplay: 0,
            speed: 700,
            slidesPerView: 'auto',
            //spaceBetween: 25,
            nextButton: '#animation2 .next',
            prevButton: '#animation2 .prev',
            slideToClickedSlide: true,
            centeredSlides: false,
            keyboardControl: true,
            onSlideChangeStart: function (swiper) {
                //$(swiper.slides[swiper.activeIndex]).click();
                var activeSlide = $(swiper.slides[swiper.activeIndex]);
                var productId = $(activeSlide).attr("data-productid");

                getDetailsProduct(productId);

            }
        });

        swiperNavigation();
    }
    else {

        if (brandSwiper != undefined) {
            brandSwiper.destroy(true, true);
            brandSwiper = undefined;
        }

        $("#animation2").addClass("not-a-swiper");
        $('#animation2 .screen .swiper-slide:first-child').addClass("swiper-slide-active");
        $("#animation2 .prev").addClass("swiper-button-disabled");
        $("#animation4 .arrowDiv .prev").addClass("disabled-arrow");


        $("#animation2 .next").click(function () {
            var slidesCount = $("#animation2 .swiper-slide").length;
            if (realCurrentSlide != slidesCount - 1) {

                realCurrentSlide++;
                $("#animation2 .swiper-slide.swiper-slide-active").removeClass("swiper-slide-active");
                $($("#animation2 .swiper-slide")[realCurrentSlide]).addClass("swiper-slide-active");

                if (realCurrentSlide == slidesCount - 1) {
                    $("#animation2 .prev").removeClass("swiper-button-disabled");
                    $("#animation2 .next").addClass("swiper-button-disabled");

                    $("#animation4 .arrowDiv .next").addClass("disabled-arrow");
                }
                else {
                    $("#animation2 .prev").removeClass("swiper-button-disabled");
                    $("#animation4 .arrowDiv .prev").removeClass("disabled-arrow");

                }
                $("#animation2 .swiper-slide.swiper-slide-active").click();
            }
        });

        $("#animation2 .prev").click(function () {
            if (realCurrentSlide != 0) {
                var slidesCount = $("#animation2 .swiper-slide").length;
                realCurrentSlide--;
                $("#animation2 .swiper-slide.swiper-slide-active").removeClass("swiper-slide-active");
                $($("#animation2 .swiper-slide")[realCurrentSlide]).addClass("swiper-slide-active");

                if (realCurrentSlide == 0) {
                    $("#animation2 .prev").addClass("swiper-button-disabled");
                    $("#animation2 .next").removeClass("swiper-button-disabled");

                    $("#animation4 .arrowDiv .prev").addClass("disabled-arrow");

                }
                else {
                    $("#animation2 .next").removeClass("swiper-button-disabled");
                    $("#animation4 .arrowDiv .next").removeClass("disabled-arrow");

                }
                $("#animation2 .swiper-slide.swiper-slide-active").click();
            }
        });

        $('#animation2 .screen .swiper-slide').click(function () {
            // alert("cliked");
            $('#animation2 .screen .swiper-slide.swiper-slide-active').removeClass("swiper-slide-active");
            $(this).addClass("swiper-slide-active");
            realCurrentSlide = $(this).index();
            upperSwiperArrows();
        });

        NotswiperNavigation();
    }
}

function getDetailsProduct(productId) {
    // var currentUrl = window.location.href;
    // var currentBrandId = currentUrl.split("/")[5];
    var currentBrandId = $("#brandId").val();

    $.ajax({
        url: $("#routeUrl").val() + "brands/SelectedPackages/" + currentBrandId + "/?productId=" + productId,
        type: "post",
        success: function (result) {
            $("#animation4").remove();
            $(".morePrds").remove();
            $("#factsPop").remove();
            $("#content").append(result);

            if ($("#animation2").hasClass("not-a-swiper")) {
                NotswiperNavigation();
                lowerSwiperArrows();
            }
            else {
                swiperNavigation();
            }

            if ($(window).width() < 768) {
                $("html, body").animate({ scrollTop: "492px" });
            }
            else {
                $("html, body").animate({ scrollTop: "585px" });
            }
        }
    });
}

function ApplyLoadMore(page,type) {
    page++;
    $('.loadMore > .buttom').css("opacity", "0");
    $('.loadMore > .loader').css("opacity", "1");
    var urlStr = "";
    switch (type) {
        case "all":
            urlStr = "media";
            break;
        case "news":
            urlStr = "media/news";
            break;
        case "featuresAndInsights":
            urlStr = "media/featuresAndInsights";
            break;
        case "pressRelease":
            urlStr = "media/pressRelease";
            break;
        case "events":
            urlStr = "media/events";
            break; 
    }
    $.ajax({
        url: $("#routeUrl").val() + urlStr,
        type: "get",
        data: {
            page: page,
            ispartial: true
        },
        success: function (result) {
            $(".loadMore").remove();
            if (page > 0) {
                history.pushState("", document.title, window.location.pathname + "?page=" + page);
                $(".articleWrap").append(result);
                
                $('.loadmore > .loader').hide();

            }
        }
    });
}

function removeHash() {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function getHash() {
    return window.location.hash.substr(1).toLowerCase()
}