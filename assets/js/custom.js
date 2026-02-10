/* Vinay Gola UI Developer 28-01-2026  vkgola9@gamil.com */
/* This Sheet For Custom Work */

// Immediately show loader, then:
function removeLoader() {
  $(".spin").fadeOut(500);
  // Force repaint in case browser hasn't updated:
  // window.requestAnimationFrame(() => document.body.offsetHeight);
}
// Fallback if load never fires (3s)
setTimeout(removeLoader, 3000);


$(window).on("load", function () {
  removeLoader();


  var x = $("header").height()
  // $("section").css("scroll-margin-top", x)
  // $("header + *").css("margin-top", -x)


  // wow integration----  data-wow-duration="2s"data-wow-delay="0.5s"data-wow-offset="100"data-wow-iteration="3" 
  // https://animate.style/

  // $(".services .row>div:nth-child(2n+1)").attr({ "data-wow-delay": "100" });
  // $(".services .row>div:nth-child(2n+2)").attr({ "data-wow-delay": "150" });

  // $(".social-media .row>div:nth-child(1)").attr({"data-wow-delay": "100" });
  // $(".social-media .row>div:nth-child(2)").attr({"data-wow-delay": "200" });
  // $(".social-media .row>div:nth-child(3)").attr({"data-wow-delay": "300" });

  // header-sticky-&-top-contdition
  if ($("body").height() > 1500) {
     let x = $("header").height()
    $(window).scroll(function () {
      // header-active
      if ($(window).scrollTop() >= 50) {
        $('header').addClass('active');
        //  $('body').css('padding-top', x + 'px');
        //  $('body').css('transition', 'none'); 
      } else {
        $('header').removeClass('active');
        //  $('body').css('padding-top', '0');
      }

      // top-svg-condition
      const progressCircle = $('.progress');
      const scrollTopBtn = $('.scroll-top');
      const radius = 22;
      const circumference = 2 * Math.PI * radius;
      function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.css('stroke-dashoffset', offset);
      }

      const scrollTop = $(this).scrollTop();
      const docHeight = $(document).height() - $(window).height();
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);

      if (scrollTop > 300) {
        scrollTopBtn.fadeIn();
      } else {
        scrollTopBtn.fadeOut();
      }
    });
  }
})
jQuery(function ($) {
  // .brand-caro .owl-stage {display: flex;transition-timing-function: linear !important;}
  $(".brand-caro").owlCarousel({
    loop: true,                // Infinite loop
    autoplay: true,            // Auto start
    autoplayTimeout: 0,      // ⏩ No delay between slides
    autoplaySpeed: 8000,     // Speed of slide transition (adjust for smoothness)
    smartSpeed: 8000,        // Sync transition speed
    slideTransition: "linear",
    rewind: false,
    margin: 70,
    stagePadding: 0,
    dots: false,
    nav: false,
    // mouseDrag: false,          // 🔒 Disable mouse dragging
    // touchDrag: false,          // 🔒 Disable touch dragging
    // pullDrag: false,           // 🔒 Disable pull-drag physics
    responsive: {
      0: { items: 3 },    // Small screens
      768: { items: 3 },  // Tablets
      1020: { items: 6 }  // Desktops
    }
  });
});
$(function () {
  $(".banner-caro").owlCarousel({
    // Autoplay.Defaults = {
    //   autoplay: false,
    //   autoplayTimeout: 5000,
    //   autoplayHoverPause: false,
    //   autoplaySpeed: false
    // },
    loop: true,
    autoplay: true,
    items: 1,
    nav: false,
    dots: false,
    // lazyLoad: true,
    autoplayHoverPause: false,
    // animateIn: "slideInDown",     // Animation for slide entrance
    // animateOut: "fadeOut",        // Animation for slide exit
    // onInitialize: resetProgressBar, // Before carousel initializes
    // onInitialized: resetProgressBar, // After carousel initialized
    // onTranslate: resetProgressBar,   // Before slide changes
    // onTranslated: startProgressBar,  // After slide changes
    touchDrag: true,
    mouseDrag: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>",],
  });
  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({ width: "100%", transition: "width 5000ms" });
  }
  function resetProgressBar() {
    $(".slide-progress").css({ width: 0, transition: "width 0s" });
  }

  $(".testi-caro").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    dotsEach: 1,
    mouseDrag: true,
    nav: false, // Set to true if you want nav arrows visible
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    smartSpeed: 800, // Replaces paginationSpeed/slideSpeed/rewindSpeed
    margin: 0,      // Optional margin between slides
    responsive: {
      0: { items: 1 },    // Small screens
      768: { items: 2 },  // Tablets
      1020: { items: 3 }  // Desktops
    }
  });
  $(".blog-caro").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    dots: false,
    nav: false, // Set true if you want nav arrows
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    // navText: ["<i class='fa-solid fa-caret-left'></i>", "<i class='fa-solid fa-caret-right'></i>",],
    // navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    smartSpeed: 800, // Replaces paginationSpeed/slideSpeed/rewindSpeed
    responsive: {
      0: { items: 1 },     // Small screens
      768: { items: 2 },   // Tablets
      1020: { items: 3 }   // Desktops
    }
  });
  $('.shop-caro').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    margin: 20,
    stagePadding: 10,
    // smartSpeed: 800, // Replaces deprecated paginationSpeed/slideSpeed/rewindSpeed
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    responsive: {
      0: { items: 1, }, // Small screens
      768: { items: 3 }, // Tablets
      1020: { items: 6 }  // Desktops
    }
  });
  $('.shop-caro3').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    margin: 15,
    stagePadding: 13,
    // smartSpeed: 800, // Replaces deprecated paginationSpeed/slideSpeed/rewindSpeed
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    responsive: {
      0: { items: 1, }, // Small screens
      768: { items: 2 }, // Tablets
      1020: { items: 4 }  // Desktops
    }
  });
  $('.shop-caro2').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    margin: 15,
    stagePadding: 5,
    // smartSpeed: 800, // Replaces deprecated paginationSpeed/slideSpeed/rewindSpeed
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    responsive: {
      0: { items: 1, }, // Small screens
      768: { items: 2 }, // Tablets
      1020: { items: 4 }  // Desktops
    }
  });

  $('.navbar-toggler').click(function () {
    $('.navigation').css('right', '0');
    $('body').css('overflow', 'hidden');
    $('.backdrop').css('position', 'fixed');
  })
  $('.closeBox i,.backdrop').click(function () {
    $('.navigation').css('right', '-100%');
    $('body').css('overflow', 'initial');
    $('.backdrop').css('position', 'initial');
  })
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });

  // mobile-responsive-condition
  if ($(window).width() < 1000) {
    $(".mid-nav nav .navigation>ul>li.menu-item-has-children").click(function (e) {
      // e.stopPropagation();
      if (e.target == this) {
        $(this).children(".sub-menu").slideToggle();
        $(this).toggleClass("after-icon");
        $(this).siblings().removeClass("after-icon");
        $(this).siblings().children(".sub-menu").slideUp();
      }
    });
    $(".mid-nav nav .navigation ul li>ul.sub-menu>li").click(function (e) {
      e.stopPropagation();
      $(this).children("ul").slideToggle();
    });
  }
  // AOS.init({ easing: "ease-in-out-sine", once: true, offset: 0, });
  new WOW({
    boxClass: 'vit-wow',        // Class name to trigger animation
    animateClass: 'animated',// Animation CSS class (from Animate.css)
    offset: 0,              // Distance (in px) from the bottom of the viewport before triggering
    mobile: true,           // Enable animations on mobile devices
    live: true,             // Act on asynchronously loaded content
    scrollContainer: null,  // Selector for a scrollable container (default is window)
    resetAnimation: true    // Restart animation every time an element enters the viewport
  }).init();

  AOS.init({
    offset: 50,          // Trigger point from the top (px)
    delay: 0,             // Delay before animation starts (ms)
    duration: 1000,       // Animation duration (ms)
    easing: 'ease',       // Easing function
    once: false,          // Whether animation should happen only once
    mirror: false,        // Animate out while scrolling past
    anchorPlacement: 'top-bottom' // Position to trigger animation
  });

});



// parallex-bg-effect
$(window).on("scroll", function () {
  let offset = window.pageYOffset;
  $(".vit-parallax").css('background-position-y', (((offset * 0.1) - 200) + "%"));
});


// in-view-counter
$(window).on("load", function () {
  function inviewExample() {
    // var $example = $('.counter');

    var inview;

    inview = new Waypoint.Inview({
      element: $(".counter")[0],

      entered: function (direction) {
        $("span").each(function () {
          var $this = $(this);

          var val = $(this).attr("vit-value");

          jQuery({ Counter: 0 }).animate(
            { Counter: val },
            {
              duration: 2000,

              easing: "swing",

              step: function () {
                $this.text(Math.ceil(this.Counter));
              },
            }
          );
        });
      },
    });
  }
  // inviewExample();
});
