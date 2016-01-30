function img_preload(img_array) {
    for (var i = 0; i < img_array.length; i++) {
        var img = new Image();
        img.src = img_array[i];
        // img.onload = function() { 
        //     var percent = parseInt($("#load-progress").attr('aria-valuenow'));
        //     percent += 5;
        //     $("#load-progress").attr('aria-valuenow', percent);
        //     $("#load-progress").css('width', percent + '%');
        // };
    }
}


var cap_timer = 0, cap_class = ['text-white', 'text-light-green', 'text-green', 'text-dark-green', 'text-green', 'text-light-green'];
var arrow_timer = 0, arrow_class = ['text-white', 'text-light-green'];
var bio_timer = 0, bio_bg_imgs = ['/img/background/hover_tower.jpg', '/img/background/yosemite.jpg', '/img/background/lksc_building.jpg', '/img/background/big_sur.jpg', '/img/background/golden_gate.jpg'];
var stat_timer = 0, stat_bg_imgs = ['/img/background/fish_necklace.jpg', '/img/background/lawn_bench.jpg', '/img/background/cliff_reed.jpg', '/img/background/flower.jpg', '/img/background/tunnel.jpg'];
var contact_timer = 0, contact_bg_imgs = ['/img/background/campus_map.jpg', '/img/background/muir_trees.jpg', '/img/background/red_papercut.jpg', '/img/background/succulent.jpg', '/img/background/nano_dna.jpg'];

$("#stanford-carousel").parent().css('background-image', "url('" + bio_bg_imgs[0] + "')");
$("#stat-carousel").parent().css('background-image', "url('" + stat_bg_imgs[0] + "')");
$("#contact-carousel").parent().css('background-image', "url('" + contact_bg_imgs[0] + "')");


$(window).on('load', function() {
    $(".page-loader").fadeOut('slow');

    var controller = new $.ScrollMagic.Controller({
        'globalSceneOptions': {'triggerHook': 'onEnter', }
    });
    $("section").each(function() {
        new ScrollMagic.Scene({'triggerElement': $(this)})
        .addTo(controller);
    });


    TweenMax.defaultOverwrite = false;
    new TweenMax.from("#caption > img", 1, {
        'scale': $(window).width() / 500, 'opacity': 0, 'delay': 1.5,
        'onComplete': function () {
            setInterval(function() {
                $(".scrollDown > i.fa").removeClass(arrow_class[arrow_timer]);
                arrow_timer += 1;
                if (arrow_timer == 2) { arrow_timer = 0; }
                $(".scrollDown > i.fa").addClass(arrow_class[arrow_timer]);
            }, 2000);

            setTimeout(function() {
                $("#subtitle_1").typewrite({
                    'delay': 80, 'extra_char': '<b class="blink_cursor">|</b>', 'trim': true,
                    'callback': function () {
                        setTimeout(function() {
                            $("b.blink_cursor").remove();
                            $("#subtitle_2").typewrite({
                                'delay': 80, 'extra_char': '<b class="blink_cursor">|</b>', 'trim': true,
                                'callback': function () {
                                    setTimeout(function() {
                                        $("b.blink_cursor").remove();
                                        $("#home-section > div.cover").css('background-color', 'rgba(0, 7, 11, 0.25)');
                                    }, 500);
                                    setInterval(function () {
                                        $("#caption > p").removeClass(cap_class[cap_timer]);
                                        cap_timer += 1;
                                        if (cap_timer == 6) { cap_timer = 0; }
                                        $("#caption > p").addClass(cap_class[cap_timer]);
                                    }, 2000);
                                }
                            });
                        }, 500);
                    }
                });
            }, 500);
        
        }
    });

    new ScrollMagic.Scene({'triggerElement': '#about-section', 'offset': $(window).height() / 2, 'duration': $(window).height() / 2 - $("#main-navbar").height()})
    .setTween(TweenMax.fromTo("#caption", 1, {'opacity': 1}, {'y': '125%', 'opacity': 0.5}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#about-section', 'offset': '100%'})
    .setTween(TweenMax.to(".scrollDown", 1, {'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#about-section', 'duration': '100%'})
    .setTween(TweenMax.from("#about-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#about-section', 'offset': '300%'})
    .setTween(TweenMax.staggerFrom(".rotate-box-2.square-icon > .rotate-box-icon", 1, {'rotation': 360*2, 'opacity': 0.25, 'ease':Bounce.easeOut}, 0.1))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#stanford-trigger', 'duration': '100%'})
    .setTween(TweenMax.from("#stanford-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);

    new ScrollMagic.Scene({'triggerElement': '#portfolio-section', 'duration': '100%'})
    .setTween(TweenMax.from("#work-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#work-header', 'triggerHook': 'onLeave'})
    .setTween(TweenMax.staggerFrom(".portfolio_single_content", 1.5, {'y': '100%', 'opacity': 0, 'scale': 2, 'ease': Elastic.easeInOut}, 0.2))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#skill-trigger', 'duration': '100%'})
    .setTween(TweenMax.from("#skill-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#skill-trigger', 'offset': '100%'})
    .setTween(TweenMax.staggerFrom(".skill-bar.left > .progress", 1, {'x': '-150%', 'opacity': 0.25, 'scale': 2, 'ease': Back.easeIn}, 0.1))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#skill-trigger', 'offset': '100%'})
    .setTween(TweenMax.staggerFrom(".skill-bar.right > .progress", 1, {'x': '150%', 'opacity': 0.25, 'scale': 2, 'ease': Back.easeIn}, 0.1))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#stat-trigger', 'duration': '100%', 'offset': '100%'})
    .setTween(TweenMax.from("#stat-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#counter-trigger', 'offset': '100%'})
    .setTween(TweenMax.staggerFrom(".fact-inner", 1, {'rotationY': 360, 'scale': 0}, 0.2))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#counter-trigger', 'offset': '300%'})
    .on('start', function() {
        $("div.fact-inner > p.lead").removeClass('counter-finish');
        setTimeout(function() {
            $("#count_num_1").countTo({
                'from': 0, 'to': parseInt($("#count_num_1").text()), 'speed': 2000,
                'onComplete': function() { $(this).next().next().addClass('counter-finish'); }
            });
        }, 0);
        setTimeout(function() {
            $("#count_num_2").countTo({
                'from': 0, 'to': parseInt($("#count_num_2").text()), 'speed': 2000,
                'onComplete': function() { $(this).next().next().addClass('counter-finish'); }
            });
        }, 200);
        setTimeout(function() {
            $("#count_num_3").countTo({
                'from': 0, 'to': parseInt($("#count_num_3").text()), 'speed': 2000,
                'onComplete': function() { $(this).next().next().addClass('counter-finish'); }
            });
        }, 400);
        setTimeout(function() {
            $("#count_num_4").countTo({
                'from': 0, 'to': parseInt($("#count_num_4").text()), 'speed': 2000,
                'onComplete': function() { $(this).next().next().addClass('counter-finish'); }
            });
        }, 600);
    })
    .addTo(controller);

    new ScrollMagic.Scene({'triggerElement': '#pub-trigger', 'duration': '100%'})
    .setTween(TweenMax.from("#pub-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#pub-trigger', 'offset': '300%'})
    .setTween(TweenMax.staggerFrom("#pub-content > table > tbody > tr", 1, {'rotationX': 180, 'opacity': 0.25}, 0.2))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#contact-section', 'duration': '100%'})
    .setTween(TweenMax.from("#contact-header", 1, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#contact-section', 'offset': '200%'})
    .setTween(TweenMax.staggerFrom(".rotate-box-1.square-icon > .rotate-box-icon", 1, {'rotationX': 360, 'opacity': 0.25}, 0.1))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#contact-section', 'offset': $("#contact-section").height() * 0.75})
    .setTween(TweenMax.staggerFrom(".contact-info > h4, .contact-address > li", 1, {'x': '-100%', 'y': '100%', 'opacity': 0.25}, 0.1))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': '#contact-section', 'offset': $("#contact-section").height() * 0.75})
    .setTween(TweenMax.staggerFrom(".contact-form > h4, .contact-form > form > .form-group", 1, {'x': '100%', 'y': '100%', 'opacity': 0.25}, 0.1))
    .addTo(controller);
    new ScrollMagic.Scene({'triggerElement': 'footer'})
    .setTween(TweenMax.from("#footer-header", 2, {'y': '-100%', 'opacity': 0}))
    .addTo(controller);


    $("#subtitle_0").css("width", $("#subtitle_1").css("width"));
    $(".rotate-box-2.square-icon").on('click', function(event) { event.preventDefault(); });
    // $(".portfolio_single_content > div > a").on('click', function(event) { event.preventDefault(); });
    $(".portfolio_single_content").each(function() {
        $(this).css('height', $("img", this).css('height'));
    });
    $(".progress").hover(function() {
        $(this).children().addClass('progress-bar-striped active');
    }, function() {
        $(this).children().removeClass('progress-bar-striped active');
    });
    $("td > a.text-light-gray > i.fa").css('text-decoration', 'line-through').on('click', false);
    $(".contact-address > li:last-child").hover(function() { $("#res_date").fadeIn(250); }, function() { $("#res_date").fadeOut(250); });

    $('.carousel').carousel({'interval': 5000});
    $("#stanford-carousel").on('slide.bs.carousel', function(event) {
        bio_timer = $(event.relatedTarget).attr('data-slide-to');
        $("#stanford-carousel").parent().css('background-image', "url('" + bio_bg_imgs[bio_timer] + "')");
    });
    $("#stat-carousel").on('slide.bs.carousel', function(event) {
        stat_timer = $(event.relatedTarget).attr('data-slide-to');
        $("#stat-carousel").parent().css('background-image', "url('" + stat_bg_imgs[stat_timer] + "')");
    });
    $("#contact-carousel").on('slide.bs.carousel', function(event) {
        contact_timer = $(event.relatedTarget).attr('data-slide-to');
        $("#contact-carousel").parent().css('background-image', "url('" + contact_bg_imgs[contact_timer] + "')");
    });


    $('.page-scroll, .scrollTop').on('click', function(event) {
        $('html, body').stop().animate({'scrollTop': $($(this).attr('href')).offset().top - 64}, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    $('body').scrollspy({
        'target': '#main-navbar',
        'offset': 65
    });


    img_preload(bio_bg_imgs);
    img_preload(stat_bg_imgs);
    img_preload(contact_bg_imgs);
});


$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $(window).height() / 2 + $("#main-navbar").height()) {
        if ($(window).scrollTop() >= $("footer").offset().top - $(window).height()) {
            $(".scrollTop").fadeOut();
        } else {
            $('.scrollTop').fadeIn();
        }
        $('.navbar-fixed-top').addClass('navbar-shrink navbar-default').removeClass('navbar-transparent');
    } else {
        $('.scrollTop').fadeOut();
        $('.navbar-fixed-top').removeClass('navbar-shrink navbar-default').addClass('navbar-transparent');
    }

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        var h = ($(window).scrollTop() - $("#stanford-carousel").offset().top) / $("#stanford-carousel").height() + 0.4;
        if (h <= 0.45) {
            $("#story_2016 > div.story-item-content").addClass('active').parent().css("z-index", 15);
            $("#story_2015 > div.story-item-content").removeClass('active').parent().css("z-index", 10);
            $("#story_2011 > div.story-item-content").removeClass('active').parent().css("z-index", 10);
        } else if (h > 0.45 & h <= 0.7) {
            $("#story_2015 > div.story-item-content").addClass('active').parent().css("z-index", 15);
            $("#story_2016 > div.story-item-content").removeClass('active').parent().css("z-index", 10);
            $("#story_2011 > div.story-item-content").removeClass('active').parent().css("z-index", 10);
        } else {
            $("#story_2011 > div.story-item-content").addClass('active').parent().css("z-index", 15);
            $("#story_2016 > div.story-item-content").removeClass('active').parent().css("z-index", 10);
            $("#story_2015 > div.story-item-content").removeClass('active').parent().css("z-index", 10);
        }
    }, 100));
});


$(document).on('click', '.navbar-collapse.in', function(event) {
    if( $(event.target).is('a') && $(event.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
