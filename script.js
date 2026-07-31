// Catera's Creation — shared site behavior
(function () {
  'use strict';

  /* ---- header solid-on-scroll ---- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('solid');
    else header.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mark current nav link ---- */
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  /* ---- mobile nav toggle ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- scroll reveal + brush draw-on ---- */
  var revealables = document.querySelectorAll('.reveal, .brush');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---- FAQ / process accordion ---- */
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    var trigger = item.querySelector('.accordion-trigger');
    var panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', function () {
      var expanded = item.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.accordion-item').forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        other.querySelector('.accordion-panel').style.maxHeight = null;
      });
      if (!expanded) {
        item.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---- gallery filter ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      galleryItems.forEach(function (item) {
        var match = f === 'all' || item.dataset.medium === f;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  /* ---- lightbox ---- */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbArt = lightbox.querySelector('.lightbox-art');
    var lbTitle = lightbox.querySelector('.art-title');
    var lbMeta = lightbox.querySelector('.art-meta');
    var lbDesc = lightbox.querySelector('.lightbox-desc');

    document.querySelectorAll('[data-open-lightbox]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tile = btn.closest('.gallery-item');
        lbArt.className = 'lightbox-art art-tile ' + (tile.dataset.paint || '');
        lbArt.innerHTML = '<div class="art-paint"></div>';
        lbTitle.textContent = tile.dataset.title || '';
        lbMeta.textContent = tile.dataset.meta || '';
        lbDesc.textContent = tile.dataset.desc || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
    lightbox.querySelectorAll('[data-close-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ---- privacy modal (footer, all pages) ---- */
  var privacyModal = document.getElementById('privacyModal');
  if (privacyModal) {
    document.querySelectorAll('[data-open-privacy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        privacyModal.classList.add('open');
        privacyModal.setAttribute('aria-hidden', 'false');
      });
    });
    privacyModal.querySelectorAll('[data-close-privacy]').forEach(function (el) {
      el.addEventListener('click', function () {
        privacyModal.classList.remove('open');
        privacyModal.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* close any overlay on backdrop click / Escape */
  document.querySelectorAll('.modal, .lightbox').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open, .lightbox.open').forEach(function (o) {
        o.classList.remove('open');
        o.setAttribute('aria-hidden', 'true');
      });
    }
  });

  /* ---- testimonial slider ---- */
  var slides = document.querySelectorAll('.testimonial-slide');
  var dotsWrap = document.querySelector('.testimonial-dots');
  if (slides.length && dotsWrap) {
    var current = 0;
    var dots = [];
    slides.forEach(function (s, i) {
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', function () { show(i); });
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
    function show(i) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    setInterval(function () { show((current + 1) % slides.length); }, 6000);
  }

  /* ---- form validation + simulated submit ---- */
  function validateField(field) {
    var input = field.querySelector('input, select, textarea');
    if (!input) return true;
    var ok = input.checkValidity();
    field.classList.toggle('invalid', !ok);
    return ok;
  }

  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    var fields = form.querySelectorAll('.field');
    var status = form.querySelector('.form-status');
    var submitBtn = form.querySelector('button[type="submit"]');

    fields.forEach(function (field) {
      var input = field.querySelector('input, select, textarea');
      if (!input) return;
      input.addEventListener('blur', function () { validateField(field); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var allValid = true;
      fields.forEach(function (field) { if (!validateField(field)) allValid = false; });
      if (!allValid) {
        var firstInvalid = form.querySelector('.field.invalid input, .field.invalid select, .field.invalid textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = form.dataset.sendingLabel || 'Sending…';
      }
      setTimeout(function () {
        if (status) {
          status.textContent = form.dataset.successMessage || 'Thanks — your message is on its way.';
          status.classList.add('success');
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = form.dataset.submitLabel || 'Submit';
        }
      }, 900);
    });
  });
})();