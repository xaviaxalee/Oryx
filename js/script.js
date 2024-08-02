document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the first video
    document.getElementById('play-vid1').addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=VIDEO_ID_1';
    });

    // Add event listener for the second video
    document.getElementById('play-vid2').addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=VIDEO_ID_2';
    });

    // Repeat for additional videos...
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonials() {
  testimonials.forEach((testimonial, index) => {
    if (window.innerWidth <= 600) {
      // Show one testimonial on mobile view
      testimonial.classList.remove('active');
      if (index === currentTestimonial) {
        testimonial.style.display = 'block';
        setTimeout(() => {
          testimonial.classList.add('active');
        }, 10);
      } else {
        testimonial.style.display = 'none';
      }
    } else {
      // Show three testimonials on desktop view
      if (index >= currentTestimonial && index < currentTestimonial + 3) {
        testimonial.style.display = 'block';
        setTimeout(() => {
          testimonial.classList.add('active');
        }, 10);
      } else {
        testimonial.style.display = 'none';
        testimonial.classList.remove('active');
      }
    }
  });
}

prevButton.addEventListener('click', () => {
  if (window.innerWidth <= 600) {
    // Mobile view: show previous testimonial
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
  } else {
    // Desktop view: show previous set of three testimonials
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 3 : currentTestimonial - 3;
  }
  showTestimonials();
});

nextButton.addEventListener('click', () => {
  if (window.innerWidth <= 600) {
    // Mobile view: show next testimonial
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
  } else {
    // Desktop view: show next set of three testimonials
    currentTestimonial = (currentTestimonial >= testimonials.length - 3) ? 0 : currentTestimonial + 3;
  }
  showTestimonials();
});

// Initialize the testimonials display
showTestimonials();

// Recalculate on window resize
window.addEventListener('resize', showTestimonials);
