// =====================================================
// NEXORA TECHNOLOGIES — site interactions
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle ---- */
  var hamburger = document.querySelector('.hamburger');
  var header = document.querySelector('.site-header');
  if (hamburger && header) {
    hamburger.addEventListener('click', function () {
      header.classList.toggle('menu-open');
    });
  }

  /* ---- Status rail live uptime ticker ---- */
  var uptimeEl = document.getElementById('uptime-clock');
  if (uptimeEl) {
    var seconds = 0;
    setInterval(function () {
      seconds++;
      var h = Math.floor(seconds / 3600).toString().padStart(2, '0');
      var m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      var s = (seconds % 60).toString().padStart(2, '0');
      uptimeEl.textContent = 'session ' + h + ':' + m + ':' + s;
    }, 1000);
  }

  /* ---- Contact form (client-side only, no backend) ---- */
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();

      if (!name || !email) {
        status.textContent = '[error] Please fill in your name and email.';
        status.className = 'show';
        return;
      }
      status.textContent = '[ok] Message received — someone from the team will reply within 1 business day.';
      status.className = 'show ok';
      form.reset();
    });
  }

  /* ---- Gallery lightbox ---- */
  var galleryItems = document.querySelectorAll('.gallery-item');
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = document.querySelector('.lightbox img');
  if (galleryItems.length && lightbox) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
      });
    });
    var closeBtn = document.querySelector('.lightbox-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        lightbox.classList.remove('open');
      });
    }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
  }

  /* ---- Set active nav link based on current page ---- */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

});
