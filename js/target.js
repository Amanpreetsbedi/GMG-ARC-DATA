$(document).ready(() => {


  // Adjust scroll position when navigating to bookmark links from another page
  const scrollAdjust = () => scrollBy(0, -60);
  if (location.hash) scrollAdjust();
  window.addEventListener('hashchange', scrollAdjust);

  // Smooth scrolling
  $('.scroll').on('click', e => {
    $('.collapse').collapse('hide'); // close mobile menu on click
    $('html, body').stop().animate({
      scrollTop: $($(e.currentTarget).attr('href')).offset().top - 60 },
    1250, 'easeInOutExpo');
  });
 
});