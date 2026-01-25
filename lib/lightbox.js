/**
 * Simple vanilla JavaScript lightbox
 * No dependencies - replaces jQuery lightbox
 */
(function() {
  'use strict';

  // Shared lightbox state
  let lightboxInitialized = false;
  let allImages = [];
  let currentIndex = 0;
  let overlay, image, caption, counter, closeBtn, prevBtn, nextBtn;
  let keyboardHandler = null;

  function initLightbox(selector) {
    const links = document.querySelectorAll(selector);
    if (links.length === 0) return;

    // Prevent duplicate lightbox creation
    if (!lightboxInitialized) {
      // Create lightbox HTML
      const lightboxHTML = `
        <div id="lightbox-overlay" class="lightbox-overlay" style="display: none;">
          <div class="lightbox-container">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <button class="lightbox-prev" aria-label="Previous image">&#8249;</button>
            <button class="lightbox-next" aria-label="Next image">&#8250;</button>
            <div class="lightbox-content">
              <img id="lightbox-image" src="" alt="">
              <div class="lightbox-caption"></div>
              <div class="lightbox-counter"></div>
            </div>
          </div>
        </div>
      `;

      // Add lightbox to page
      document.body.insertAdjacentHTML('beforeend', lightboxHTML);

      overlay = document.getElementById('lightbox-overlay');
      image = document.getElementById('lightbox-image');
      caption = document.querySelector('.lightbox-caption');
      counter = document.querySelector('.lightbox-counter');
      closeBtn = document.querySelector('.lightbox-close');
      prevBtn = document.querySelector('.lightbox-prev');
      nextBtn = document.querySelector('.lightbox-next');

      // Close button
      closeBtn.addEventListener('click', closeLightbox);

      // Navigation buttons
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentIndex > 0) showImage(currentIndex - 1);
      });

      nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentIndex < allImages.length - 1) showImage(currentIndex + 1);
      });

      // Close on overlay click
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeLightbox();
      });

      lightboxInitialized = true;
    }

    // Build image array and add to global collection
    const newImages = Array.from(links).map(link => ({
      src: link.href,
      title: link.getAttribute('title') || link.querySelector('img')?.alt || ''
    }));

    // Store starting index for these images
    const startIndex = allImages.length;
    allImages = allImages.concat(newImages);

    // Attach click handlers to links
    links.forEach((link, localIndex) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(startIndex + localIndex);
      });
    });
  }

  function showImage(index) {
    if (index < 0 || index >= allImages.length) return;
    currentIndex = index;

    const img = new Image();
    img.onload = function() {
      image.src = this.src;
      image.alt = allImages[index].title;
      caption.textContent = allImages[index].title;
      counter.textContent = allImages.length > 1 ? `${index + 1} / ${allImages.length}` : '';

      // Show/hide navigation buttons
      prevBtn.style.display = index > 0 ? 'block' : 'none';
      nextBtn.style.display = index < allImages.length - 1 ? 'block' : 'none';
    };
    img.onerror = function() {
      image.src = '';
      image.alt = 'Image failed to load';
      caption.textContent = 'Error loading image';
      counter.textContent = allImages.length > 1 ? `${index + 1} / ${allImages.length}` : '';
      // Still show navigation buttons if there are other images
      prevBtn.style.display = index > 0 ? 'block' : 'none';
      nextBtn.style.display = index < allImages.length - 1 ? 'block' : 'none';
    };
    img.src = allImages[index].src;
  }

  function openLightbox(index) {
    showImage(index);
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Attach keyboard handler when opened
    if (!keyboardHandler) {
      keyboardHandler = function(e) {
        switch(e.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            if (currentIndex > 0) showImage(currentIndex - 1);
            break;
          case 'ArrowRight':
            if (currentIndex < allImages.length - 1) showImage(currentIndex + 1);
            break;
        }
      };
      document.addEventListener('keydown', keyboardHandler);
    }
  }

  function closeLightbox() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';

    // Remove keyboard handler when closed
    if (keyboardHandler) {
      document.removeEventListener('keydown', keyboardHandler);
      keyboardHandler = null;
    }
  }

  // Initialize when DOM is ready
  // Combine selectors to avoid duplicate initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLightbox('#screenshots .span4 a, #screenshots a.screenshot');
    });
  } else {
    initLightbox('#screenshots .span4 a, #screenshots a.screenshot');
  }
})();
