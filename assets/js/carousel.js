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
  }).mount();

  // a = Breakpoints.match({
  //   600: { perView: 1 },
  //   1200: { perView: 3 }
  // })

  cardCarousel = document.querySelectorAll(".glide-cards");
  cardCarousel.forEach(element => {
    new Glide(element, {
      type: "carousel",
      startAt: 0,
      breakpoints:{
        600: { perView: 1 },
        900: { perView: 2 },
        1200: { perView: 3 },
        1600: { perView: 4 },
        2000: { perView: 5 }
      },
      perView:6,
      gap:20,
      peek:20,
      focusAt: 'center',
      autoplay: 5000
    }).mount()
  });
// })