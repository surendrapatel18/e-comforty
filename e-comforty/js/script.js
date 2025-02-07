
// Toggle Btn 

document.getElementById('toggle-menu').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('show');
});
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('show');
}

  
// Slider LOGO Animations

document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = Array.from(document.querySelectorAll(".slide-logo"));

  if (slides.length === 0) return; // Prevents errors if no slides exist

  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentPosition = 0;

  // Duplicate slides for infinite scrolling effect
  slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      sliderWrapper.appendChild(clone);
  });

  const autoScroll = () => {
      currentPosition += 1;

      if (currentPosition >= slideWidth * slides.length) {
          currentPosition = 0; // Reset position for seamless looping
          sliderWrapper.style.transition = "none"; // Prevent jump effect
      } else {
          sliderWrapper.style.transition = "transform 0.1s linear";
      }

      sliderWrapper.style.transform = `translateX(-${currentPosition}px)`;
  };

  setInterval(autoScroll, 10);
});


  
  
  // SWIPER-SLIDER 
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, 
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4, 
      },
      768: {
        slidesPerView: 3, 
      },
      425: {
        slidesPerView:2, 
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });
  
    
  // SWIPER-SLIDER 2

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3.1,
      },
      768: {
        slidesPerView: 2.5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
    on: {
      slideChangeTransitionEnd: function () {
       
        document.querySelectorAll(".swiper-slide").forEach((img) => {

        });
  
       
        let activeSlide = document.querySelector(".swiper-slide-active");
        if (activeSlide) {
          activeSlide.style.opacity = "1";
        }
  
        
        let nextSlide = activeSlide?.nextElementSibling;
        let prevSlide = activeSlide?.previousElementSibling;
  
        if (nextSlide) {
          nextSlide.style.opacity = "1"; 
        }
        if (prevSlide) {
          prevSlide.style.opacity = "1"; 
        }
      },
    },
  });
  
    
  // SWIPER-SLIDER 3
  
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1, 
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      769: {
        slidesPerView: 2, 
      },
    
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });


    
  // SWIPER-SLIDER 4
  
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1, 
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4, 
      },
      768: {
        slidesPerView: 3, 
      },
      425: {
        slidesPerView: 2, 
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    
    },
    
  });
  
    
  // SWIPER-SLIDER 5
  
  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 1, 
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4, 
      },
      768: {
        slidesPerView: 3, 
      },
      425: {
        slidesPerView: 2, 
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    
    },
    
  });
  
  // SIGN IN PASSWORD SHOW & HIDE

  document.addEventListener("DOMContentLoaded", function () {
    let togglePassword = document.getElementById("togglePassword");
    let passwordField = document.getElementById("password");

    if (togglePassword && passwordField) {
        togglePassword.addEventListener("click", function () {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                this.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                passwordField.type = "password";
                this.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    } 
});


// Dropdown All Categoies

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
  
    const dropdown = new bootstrap.Dropdown(document.getElementById('dropdownMenuButton'));
    dropdown.hide();
  });
});



// Filter Gallery

function filterGallery(category) {
  var items = document.querySelectorAll('.product-item');
  if (category === 'all') {
    items.forEach(function (item) {
      item.style.display = 'block';
    });
  } else {
    items.forEach(function (item) {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Update active class

  document.querySelectorAll('.our-products-links a').forEach(function (link) {
    link.classList.remove('all');
  });
}

window.onload = function () {
  filterGallery('all');
};


  


  
  // UPDATE YEAR IN FOOTER
  
  document.querySelector('.current-year').textContent = new Date().getFullYear();
  
  