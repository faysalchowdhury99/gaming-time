
// Fixed Nav Onscroll

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('fixed-nav');
    } else {
        $('nav').removeClass('fixed-nav');
    }
});

// Back to top Button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.opacity = "1";
  } else {
      mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Video On Click Change

$('.play-icon').on('click', function () {
    $('video').css({
      'z-index': 1,
      'opacity': 1 });
  
    $('video').trigger('play');
    $('.video-img').hide();
    $(this).hide();
});
  
$('video').on('click', function () {
  console.log('a');
});

