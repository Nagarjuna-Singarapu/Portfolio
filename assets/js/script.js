// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.download-resume-btn');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = 'assets/Resume/Resume.pdf';
      link.download = 'Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
});

$(document).ready(function () {
  $('.navbar-nav a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
  });
});