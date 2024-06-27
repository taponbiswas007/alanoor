$("document").ready(function(){
    $(".toggle-bar").click(function(){
      $(".navitem-area").slideToggle();
      $(".cross-mark").toggle();
      $(".bars").toggle();

    });
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});