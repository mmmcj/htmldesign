! function(i) {
    "use strict";
    i(window).on("load", function() {
        i('[data-loader="circle-side"]').fadeOut(), i("#preloader").delay(350).fadeOut("slow"), i("body").delay(350), i(".hero_in h1,.hero_in form").addClass("animated"), i(".hero_single, .hero_in").addClass("start_bg_zoom"), i(window).scroll()
    }), i(window).on("scroll", function() {
        1 < i(this).scrollTop() ? i(".header").addClass("sticky") : i(".header").removeClass("sticky")
    }), i("#sidebar").theiaStickySidebar({
        additionalMarginTop: 150
    });
    var e = i("nav#menu").mmenu({
            extensions: ["pagedim-black"],
            counters: !0,
            keyboardNavigation: {
                enable: !0,
                enhance: !0
            },
            navbar: {
                title: "MENU"
            },
            navbars: [{
                position: "bottom",
                content: ['<a href="#0">© 2018 Panagea</a>']
            }]
        }, {
            clone: !0,
            classNames: {
                fixedElements: {
                    fixed: "menu_fixed",
                    sticky: "sticky"
                }
            }
        }),
        t = i("#hamburger"),
        o = e.data("mmenu");
    t.on("click", function() {
        o.open()
    }), o.bind("open:finish", function() {
        setTimeout(function() {
            t.addClass("is-active")
        }, 100)
    }), o.bind("close:finish", function() {
        setTimeout(function() {
            t.removeClass("is-active")
        }, 100)
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: function(e) {},
        scrollContainer: null
    }).init(), i('a[href^="#"].btn_explore').on("click", function(e) {
        e.preventDefault();
        var t = this.hash,
            o = i(t);
        i("html, body").stop().animate({
            scrollTop: o.offset().top
        }, 800, "swing", function() {
            window.location.hash = t
        })
    }), i(".video").magnificPopup({
        type: "iframe"
    }), i(".magnific-gallery").each(function() {
        i(this).magnificPopup({
            delegate: "a",
            type: "image",
            preloader: !0,
            gallery: {
                enabled: !0
            },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }), i("#sign-in").magnificPopup({
        type: "inline",
        fixedContentPos: !0,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
        mainClass: "my-mfp-zoom-in"
    }), i("#password").hidePassword("focus", {
        toggle: {
            className: "my-toggle"
        }
    }), i("#forgot").click(function() {
        i("#forgot_pw").fadeToggle("fast")
    }), i(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", function(e) {
        i(e.target).prev(".card-header").find("i.indicator").toggleClass("ti-minus ti-plus")
    }), i(".custom-search-input-2 select, .custom-select-form select").niceSelect(), i("input.icheck").iCheck({
        checkboxClass: "icheckbox_square-grey",
        radioClass: "iradio_square-grey"
    }), Array.prototype.slice.call(document.querySelectorAll(".js-switch")).forEach(function(e) {
        new Switchery(e, {
            size: "small"
        })
    }), i(".wish_bt").on("click", function(e) {
        e.preventDefault(), i(this).toggleClass("liked")
    }), i(window).bind("load resize", function() {
        i(window).width();
        i(this).width() < 991 ? i(".collapse#collapseFilters").removeClass("show") : i(".collapse#collapseFilters").addClass("show")
    }), i(window).on("scroll", function() {
        0 != i(this).scrollTop() ? i("#toTop").fadeIn() : i("#toTop").fadeOut()
    }), i("#toTop").on("click", function() {
        i("body,html").animate({
            scrollTop: 0
        }, 500)
    }), i("#carousel").owlCarousel({
        center: !0,
        items: 2,
        loop: !0,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: !1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 4
            }
        }
    }), i("#reccomended").owlCarousel({
        center: !0,
        items: 2,
        loop: !0,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1e3: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    }), i(window).bind("load resize", function() {
        i(window).width() <= 991 ? i(".sticky_horizontal").stick_in_parent({
            offset_top: 50
        }) : i(".sticky_horizontal").stick_in_parent({
            offset_top: 67
        })
    });
    var a = i(".secondary_nav");

    function n() {
        i(".panel-dropdown").removeClass("active")
    }
    a.find("a").on("click", function(e) {
        e.preventDefault();
        var t = this.hash,
            o = i(t);
        i("html, body").animate({
            scrollTop: o.offset().top - 30
        }, 800, "swing")
    }), a.find("ul li a").on("click", function() {
        a.find("ul li a.active").removeClass("active"), i(this).addClass("active")
    }), i('#faq_box a[href^="#"]').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var e = i(this.hash);
            if ((e = e.length ? e : i("[name=" + this.hash.slice(1) + "]")).length) return i("html,body").animate({
                scrollTop: e.offset().top - 185
            }, 800), !1
        }
    }), i("ul#cat_nav li a").on("click", function() {
        i("ul#cat_nav li a.active").removeClass("active"), i(this).addClass("active")
    }), i(".btn_map, .btn_map_in").on("click", function() {
        var e = i(this);
        e.text() == e.data("text-swap") ? e.text(e.data("text-original")) : e.text(e.data("text-swap")), i("html, body").animate({
            scrollTop: i("body").offset().top + 385
        }, 600)
    }), i(".panel-dropdown a").on("click", function(e) {
        i(this).parent().is(".active") ? n() : (n(), i(this).parent().addClass("active")), e.preventDefault()
    });
    var s = !1;
    i(".panel-dropdown").hover(function() {
        s = !0
    }, function() {
        s = !1
    }), i("body").mouseup(function() {
        s || n()
    }), i(".dropdown-user").hover(function() {
        i(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeIn(300)
    }, function() {
        i(this).find(".dropdown-menu").stop(!0, !0).delay(50).fadeOut(300)
    })
}(window.jQuery);