window.onload = function() {
  currentYear();
  $('#photographySlider').carousel('pause');
  $('#graphicDesignSlider').carousel('pause');
  $('#artWorkSlider').carousel('pause');
  $('#digitalArtSlider').carousel('pause');
  $('.titleCaption').addClass('titleCaptionBorder');
};



function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

// $('#photographySlider').hover({
//   console.log("hovering");
//   $('#photographySlider').carousel('start');
// });

var photographySlider = document.querySelector('#photographySlider');
photographySlider.addEventListener('mouseenter', playSlide);
photographySlider.addEventListener('mouseleave', pauseSlide);

var graphicDesignSlider = document.querySelector('#graphicDesignSlider');
graphicDesignSlider.addEventListener('mouseenter', playSlide);
graphicDesignSlider.addEventListener('mouseleave', pauseSlide);

var artWorkSlider = document.querySelector('#artWorkSlider');
artWorkSlider.addEventListener('mouseenter', playSlide);
artWorkSlider.addEventListener('mouseleave', pauseSlide);

var digitalArtSlider = document.querySelector('#digitalArtSlider');
digitalArtSlider.addEventListener('mouseenter', playSlide);
digitalArtSlider.addEventListener('mouseleave', pauseSlide);

function playSlide(){
  $(this).carousel('cycle');
  $(this).find('.carousel-caption-portfolio, .carousel-caption-portfolio-right').addClass('carousel-caption-portfolio-hover');
}

function pauseSlide(){
  $(this).carousel('pause');
  $(this).find('.carousel-caption-portfolio, .carousel-caption-portfolio-right').removeClass('carousel-caption-portfolio-hover');
}
