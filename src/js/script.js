const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // using "ratio" endpoints
  breakpoints: {
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
});

$("#touristButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $(".tourist").removeClass("hide");

})

$("#hotelButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $("#hotel").removeClass("hide");

})

$("#restaurantsButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $("#restaurants").removeClass("hide");

})

$("#carsButton").on("click", function () {

  $(".container-offer").addClass("hide");
  $("#cars").removeClass("hide");

})