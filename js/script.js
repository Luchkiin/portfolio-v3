jQuery(document).ready(function ($) {
  /*----------------------------------------------------*/
  /* Preloader
  function preloader() {
    var preloader = $("#preloader");
    preloader.show();
    preloader.delay(5000).fadeOut(500);
  }
  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);
    preloader();
  } else {
    $("#preloader").hide();
  }
      ------------------------------------------------------ */

  // Top Navigation
  $(".menu-toggle").on("click", function () {
    $(this).toggleClass("open-navigation");
    $(".navigation").toggleClass("open-navigation");
  });

  $(".navigation li a").click(function () {
    if ($(".navigation").hasClass("open-navigation")) {
      $(".navigation").removeClass("open-navigation");
      $(".menu-toggle").removeClass("open-navigation active");
    }
  });

  $(".menu-toggle").click(function () {
    if ($(".menu-toggle").hasClass("open-navigation")) {
      $("body").addClass("lock-scroll");
    } else {
      $("body").removeClass("lock-scroll");
    }
  });

  $(".menu-toggle").click(function () {
    if ($(".menu-toggle").hasClass("open-navigation")) {
      $("body").bind("touchmove", function (e) {
        e.preventDefault();
      });
    } else {
      $("body").unbind("touchmove");
    }
  });

  /*----------------------------------------------------*/
  /* Back to top button
    ------------------------------------------------------ */

  var btn = $("#back-to-top-btn");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  $("sidebar-nav li").click(function () {
    var $target = $(this).attr("anchor");
    $(window).scrollTo($('section[data-anchor="' + $target + '"]'), 700);
  });

  var $root = $("html, body");

  $('a[href^="#"]').click(function () {
    var href = $.attr(this, "href");

    $root.animate(
      {
        scrollTop: $(href).offset().top - 100,
      },
      500,
      function () {
        window.location.hash = href;
      }
    );

    return false;
  });

  /*----------------------------------------------------*/
  /* Waypoint
    ------------------------------------------------------ */

  var sections = $("section");
  var sidebar_links = $("#sidebar-nav a");

  $.each($("section.target"), function (n) {
    sections.waypoint({
      element: $("#section" + n),
      handler: function (direction) {
        var active_section;
        active_section = $(this);
        if (direction === "up") active_section = active_section.prev();

        var active_link = $(
          '#sidebar-nav a[href="#' + active_section.attr("id") + '"]'
        );

        sidebar_links.parent().removeClass("active");
        active_link.parent().addClass("active");
        $("#sidebar-num").text(n + 1);
      },
      offset: "6%",
    });
  });

  /*----------------------------------------------------*/
  /*  Removes the ID # from URL when Nav link is being clicked
    ------------------------------------------------------ */
  $(window).on("hashchange", function (e) {
    history.replaceState("", document.title, e.originalEvent.oldURL);
  });


  $('.btn-wrapper').click(function (e) {
    $(this).find('.click').removeClass("feedback");
    var posX = $(this).offset().left,
        posY = $(this).offset().top;
    var styles = {
      top : (e.pageY - posY) + 'px',
      left : (e.pageX - posX) + 'px'
    };
    $(this).find('.click').css(styles).addClass("feedback");
  });
});

/*----------------------------------------------------*/
/* NProgress
    ------------------------------------------------------ */
NProgress.start();
NProgress.set(0.4); // To set a progress percentage, call .set(n), where n is a number between 0..1
NProgress.inc(); // To increment the progress bar, just use .inc(). This increments it with a random amount. This will never get to 100%: use it for every image load (or similar).If you want to increment by a specific value, you can pass that as a parameter
NProgress.configure({ ease: "ease", speed: 1500 }); // Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200)
NProgress.configure({ parent: ".container" }); //specify this to change the parent container. (default: body)
NProgress.done();

/*----------------------------------------------------*/
/* Cookie Consent Banner
        ------------------------------------------------------ */
const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`;
  },
};

const storageType = cookieStorage;
const consentPropertyName = "CookieConsent";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById("consent-popup");
  const acceptBtn = document.getElementById("cta-consent-accept");
  const declineBtn = document.getElementById("cta-consent-decline");

  const acceptFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add("consent-popup-hidden");
  };

  const declineFn = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add("consent-popup-hidden");
  };

  acceptBtn.addEventListener("click", acceptFn);
  declineBtn.addEventListener("click", declineFn);

  if (shouldShowPopup()) {
    setTimeout(() => {
      consentPopup.classList.remove("consent-popup-hidden");
    }, 3000);
  }
};

/*----------------------------------------------------*/
/* Read More Functionality
        ------------------------------------------------------ */
function showMore() {
  var dots = document.getElementById("show-more-dots");
  var moreText = document.getElementById("show-more");
  var btnText = document.getElementById("showMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more +";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less -";
    moreText.style.display = "inline";
  }
}