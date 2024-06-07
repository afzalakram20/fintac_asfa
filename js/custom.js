jQuery(document).ready(function () {
  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  // var syncTwo1 = jQuery("#syncTwo1");
  // var syncTwo2 = jQuery("#syncTwo2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 9000,
      nav: false,
      //   animateOut: 'fadeOut',
      // animateIn: "fadeIn",
      autoplayHoverPause: false,
      autoplaySpeed: 1900, //過場速度
      autoplay: true,
      dots: false,
      loop: true,
      responsiveClass: true,
      responsive: {
        0: {
          item: 1,
          autoplay: false
        },
        600: {
          items: 1,
          autoplay: true
        }
      },
      responsiveRefreshRate: 200,
      navText: [
        '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
      ]
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: false,
      //   nav: true,
      autoplay: false,
      smartSpeed: 1000,
      slideSpeed: 2000,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
      .find(".owl-item.active")
      .first()
      .index();
    var end = sync2
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });



});


jQuery(document).ready(function () {
  var syncTwo1 = jQuery("#syncTwo1");
  var syncTwo2 = jQuery("#syncTwo2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  syncTwo1
    .owlCarousel({
      items: 1,
      slideSpeed: 9000,
      nav: false,
      //   animateOut: 'fadeOut',
      // animateIn: "fadeIn",
      autoplayHoverPause: false,
      autoplaySpeed: 1900, //過場速度
      autoplay: true,
      dots: false,
      loop: true,
      responsiveClass: true,
      responsive: {
        0: {
          item: 1,
          autoplay: false
        },
        600: {
          items: 1,
          autoplay: true
        }
      },
      responsiveRefreshRate: 200,
      navText: [
        '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
      ]
    })
    .on("changed.owl.carousel", syncPosition);

  syncTwo2
    .on("initialized.owl.carousel", function () {
      syncTwo2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: false,
      //   nav: true,
      autoplay: false,
      smartSpeed: 1000,
      slideSpeed: 2000,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    syncTwo2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = syncTwo2.find(".owl-item.active").length - 1;
    var start = syncTwo2
      .find(".owl-item.active")
      .first()
      .index();
    var end = syncTwo2
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      syncTwo2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      syncTwo2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      syncTwo1.data("owl.carousel").to(number, 100, true);
    }
  }

  syncTwo2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = jQuery(this).index();
    syncTwo1.data("owl.carousel").to(number, 300, true);
  });



});