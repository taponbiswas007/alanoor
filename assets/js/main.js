$(document).ready(function () {
  $("#theme-toggle").click(function () {
    if ($(".themeMode").hasClass("light-theme")) {
      $(".themeMode").removeClass("light-theme").addClass("dark-theme");
    } else {
      $(".themeMode").removeClass("dark-theme").addClass("light-theme");
    }
  });
  $('#theme-toggle').on('click', function () {
    $('body').toggleClass('dark-mode');
  });
});

$(document).ready(function() {
    
  $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     //fade: true,
     asNavFor: '.slider-nav'
   });
   $('.slider-nav').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     dots: false,
     centerMode: true,
     focusOnSelect: true,
     spaceBetween: 10,
     responsive: [
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 4
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 3
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 2
           }
         }
       ]
   });
 });
 