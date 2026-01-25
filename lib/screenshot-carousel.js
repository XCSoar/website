/**
 * Screenshot carousel for homepage
 * Vanilla JavaScript - no dependencies
 */
(function() {
  'use strict';

  function initCarousel() {
    const carousel = document.querySelector('.screenshot-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateCarouselWidth() {
      const activeSlide = slides[currentSlide];
      if (!activeSlide) return;
      
      const activeImage = activeSlide.querySelector('img');
      if (!activeImage) return;
      
      // Wait for image to load if not already loaded
      if (activeImage.complete) {
        setCarouselWidth(activeImage);
      } else {
        activeImage.addEventListener('load', () => setCarouselWidth(activeImage), { once: true });
      }
    }

    function setCarouselWidth(image) {
      const carousel = document.querySelector('.screenshot-carousel');
      const container = document.querySelector('.carousel-container');
      if (!carousel || !container) return;
      
      // Get image width including any padding/margins
      const imageWidth = image.offsetWidth || image.naturalWidth;
      const maxWidth = carousel.parentElement.offsetWidth;
      
      // Set container width to image width, but don't exceed parent width
      const targetWidth = Math.min(imageWidth, maxWidth);
      container.style.width = targetWidth + 'px';
      carousel.style.width = targetWidth + 'px';
    }

    function showSlide(index) {
      // Ensure index is within bounds
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      // Update slides with stack effect
      slides.forEach((slide, i) => {
        // Remove all state classes
        slide.classList.remove('active', 'prev', 'next', 'next2');
        
        if (i === currentSlide) {
          slide.classList.add('active');
        } else if (i === currentSlide - 1 || (currentSlide === 0 && i === totalSlides - 1)) {
          slide.classList.add('prev');
        } else {
          // Calculate next and next+1 positions
          const nextIndex = (currentSlide + 1) % totalSlides;
          const next2Index = (currentSlide + 2) % totalSlides;
          
          if (i === nextIndex) {
            slide.classList.add('next');
          } else if (i === next2Index) {
            slide.classList.add('next2');
          }
        }
      });

      // Update indicators
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
      });
      
      // Update carousel width to match image
      setTimeout(updateCarouselWidth, 100);
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Button handlers
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }

    // Indicator handlers
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showSlide(index));
    });

    // Keyboard navigation
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    // Make carousel focusable for keyboard navigation
    
    // Initialize the first slide state on load
    showSlide(0);
    
    // Update width on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCarouselWidth, 250);
    });
    
    // Update width when all images are loaded
    const allImages = track.querySelectorAll('img');
    let loadedCount = 0;
    allImages.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          if (loadedCount === allImages.length) {
            updateCarouselWidth();
          }
        }, { once: true });
      }
    });
    if (loadedCount === allImages.length) {
      updateCarouselWidth();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
