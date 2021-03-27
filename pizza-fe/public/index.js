$(document).ready(function() {
    TweenMax.set(".project-preview", { width: 0 });

    var tl = new TimelineLite();

    $(document)
      .on("mouseover", ".navigation-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 1, {
          width: "600px",
          ease: Expo.easeInOut
        });
      })
      .on("mouseout", ".navigation-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 0.5, {
          width: 0,
          ease: Expo.easeInOut
        });
      });
  });

  $(".navigation-link-1").hover(function() {
    $(".project-preview").css({ "background-image": "url(veg.png)" });
  });

  $(".navigation-link-2").hover(function() {
    $(".project-preview").css({ "background-image": "url(non-veg.jpg)" });
  });

  $(".navigation-link-3").hover(function() {
    $(".project-preview").css({ "background-image": "url(sides.jpg)" });
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
  });

  const timeline = new TimelineMax();
  timeline.staggerFrom('.nav-link', 1, {
          opacity:0,
          delay:3,
          y:-70},0.2);