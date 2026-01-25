/**
 * Simple vanilla JavaScript lightbox
 * No dependencies - replaces jQuery lightbox
 */
(function() {
  'use strict';

  function initLightbox(selector) {
    const links = document.querySelectorAll(selector);
    if (links.length === 0) return;

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

    const overlay = document.getElementById('lightbox-overlay');
    const image = document.getElementById('lightbox-image');
    const caption = document.querySelector('.lightbox-caption');
    const counter = document.querySelector('.lightbox-counter');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Build image array
    const images = Array.from(links).map(link => ({
      src: link.href,
      title: link.getAttribute('title') || link.querySelector('img')?.alt || ''
    }));

    let currentIndex = 0;

    function showImage(index) {
      if (index < 0 || index >= images.length) return;
      currentIndex = index;

      const img = new Image();
      img.onload = function() {
        image.src = this.src;
        image.alt = images[index].title;
        caption.textContent = images[index].title;
        counter.textContent = images.length > 1 ? `${index + 1} / ${images.length}` : '';
        
        // Show/hide navigation buttons
        prevBtn.style.display = index > 0 ? 'block' : 'none';
        nextBtn.style.display = index < images.length - 1 ? 'block' : 'none';
      };
      img.src = images[index].src;
    }

    function openLightbox(index) {
      showImage(index);
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    // Attach click handlers to links
    links.forEach((link, index) => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(index);
      });
    });

    // Close button
    closeBtn.addEventListener('click', closeLightbox);

    // Navigation buttons
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentIndex > 0) showImage(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentIndex < images.length - 1) showImage(currentIndex + 1);
    });

    // Close on overlay click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (overlay.style.display === 'none') return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) showImage(currentIndex - 1);
          break;
        case 'ArrowRight':
          if (currentIndex < images.length - 1) showImage(currentIndex + 1);
          break;
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLightbox('#screenshots .span4 a');
      initLightbox('#screenshots a.screenshot');
    });
  } else {
    initLightbox('#screenshots .span4 a');
    initLightbox('#screenshots a.screenshot');
  }
})();
