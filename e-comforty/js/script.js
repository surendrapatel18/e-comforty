
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
      const slides = document.querySelectorAll(".slide-logo");
      const slideWidth = slides[0].offsetWidth;
      let currentPosition = 0;

      slides.forEach((slide) => {
          const clone = slide.cloneNode(true);
          sliderWrapper.appendChild(clone);
      });

      const autoScroll = () => {
          currentPosition += 1;
          if (currentPosition >= slideWidth * slides.length) {
              currentPosition = 0;
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
    slidesPerView: 1.5, 
    spaceBetween: 20,
    centeredSlides:true,
    loop: true,
    loopFillGroupWithBlank: true, 
      watchSlidesProgress: true,    
      watchSlidesVisibility: true,
      on: {
        init: function () {
         
          this.update();
        },
      }, 
    breakpoints: {
      1024: {
        slidesPerView:3.5, 
      },
      768: {
        slidesPerView:2.5, 
      },
     
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
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
  
  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      let passwordField = document.getElementById("password");
      if (passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      } else {
        passwordField.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
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
    link.classList.remove('all-active');
  });
  document.querySelector(`.our-products-links a[onclick="filterGallery('${category}')"]`).classList.add('all-active');
}

window.onload = function () {
  filterGallery('all');
};


  
  // UPDATE YEAR IN FOOTER
  
  document.querySelector('.current-year').textContent = new Date().getFullYear();
  
  