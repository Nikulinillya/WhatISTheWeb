const slider = document.getElementById("slider");

function scrollSlider(direction) {
  const slideWidth = slider.querySelector('.card').offsetWidth + 35;
  slider.scrollBy({
    left: direction * slideWidth,
    behavior: "smooth"
  });
}
