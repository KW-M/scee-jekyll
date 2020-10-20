// document.addEventListener("onload", function () {
  homeImageCarousel = document.querySelector(".glide-home");
  console.log(homeImageCarousel)
  if (homeImageCarousel) new Glide(homeImageCarousel, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 0,
    focusAt: 'center',
    autoplay: 4000
  }).mount()

  cardCarousel = document.querySelectorAll(".glide-cards");
  cardCarousel.forEach(element => {
    new Glide(element, {
      type: "carousel",
      startAt: 0,
      perView: 4,
      slideWidth: 300,
      peek:20,
      focusAt: 'center',
      autoplay: 5000
    }).mount()
  });
// })