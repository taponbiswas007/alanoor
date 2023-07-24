$("document").ready(function(){
    $(".price-list").click(function(){
        $(".pricelist").slideToggle();
    });
    $(".toggle-bar").click(function(){
      $(".navitem").slideToggle();

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