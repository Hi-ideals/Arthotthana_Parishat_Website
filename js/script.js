/* ============================================================
   ARTHOTTHANA PARISHAT — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Preloader ─────────────────────────────────────────── */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.remove(), 700);
      }, 600);
    });
  }

  /* ── Sticky Navbar ─────────────────────────────────────── */
  const navbar = document.querySelector('.navbar-ap');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── Active Nav Link ───────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-ap .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Back to Top ───────────────────────────────────────── */
  const bttBtn = document.getElementById('back-to-top');
  if (bttBtn) {
    window.addEventListener('scroll', () => {
      bttBtn.classList.toggle('show', window.scrollY > 400);
    });
    bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Scroll Fade-Up Animations ─────────────────────────── */
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  /* ── Counter Animation ─────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el   = entry.target;
        const end  = parseInt(el.getAttribute('data-count'));
        const dur  = 1800;
        const step = Math.ceil(end / (dur / 16));
        let   curr = 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const timer = setInterval(() => {
          curr = Math.min(curr + step, end);
          el.textContent = curr.toLocaleString() + suffix;
          if (curr >= end) clearInterval(timer);
        }, 16);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ── Progress Bar Animation ────────────────────────────── */
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  progressBars.forEach(b => progressObserver.observe(b));

  /* ── Gallery Filter ────────────────────────────────────── */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const show = cat === 'all' || item.getAttribute('data-cat') === cat;
        item.style.opacity    = show ? '1' : '0';
        item.style.transform  = show ? 'scale(1)' : 'scale(0.9)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        item.style.display    = show ? '' : 'none';
      });
    });
  });

  /* ── Lightbox ──────────────────────────────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lightbox-img');
  const lbClose  = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').src;
      lbImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lbClose) {
    lbClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ── FAQ Accordion ─────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item   = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(f => {
        f.classList.remove('open');
        f.querySelector('.faq-answer').classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  /* ── Donate Amount Selection ───────────────────────────── */
  document.querySelectorAll('.donate-card[data-amount]').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.donate-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const input = document.getElementById('custom-amount');
      if (input) input.value = card.getAttribute('data-amount');
    });
  });

  /* ── Contact Form Validation ───────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      contactForm.querySelectorAll('[required]').forEach(field => {
        const err = field.parentElement.querySelector('.field-error');
        if (!field.value.trim()) {
          field.classList.add('invalid');
          if (err) { err.style.display = 'block'; err.textContent = 'This field is required.'; }
          valid = false;
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          field.classList.add('invalid');
          if (err) { err.style.display = 'block'; err.textContent = 'Please enter a valid email.'; }
          valid = false;
        } else {
          field.classList.remove('invalid');
          if (err) err.style.display = 'none';
        }
      });

      if (valid) {
        showFormSuccess(contactForm, 'Message sent! We will get back to you soon.');
      }
    });

    contactForm.querySelectorAll('[required]').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('invalid');
        const err = field.parentElement.querySelector('.field-error');
        if (err) err.style.display = 'none';
      });
    });
  }

  /* ── Volunteer Form Validation ─────────────────────────── */
  const volForm = document.getElementById('volunteer-form');
  if (volForm) {
    volForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      volForm.querySelectorAll('[required]').forEach(field => {
        const err = field.parentElement.querySelector('.field-error');
        if (!field.value.trim()) {
          field.classList.add('invalid');
          if (err) { err.style.display = 'block'; err.textContent = 'This field is required.'; }
          valid = false;
        } else {
          field.classList.remove('invalid');
          if (err) err.style.display = 'none';
        }
      });
      if (valid) showFormSuccess(volForm, 'Thank you! Your volunteer registration has been received.');
    });
  }

  /* ── Newsletter Form ───────────────────────────────────── */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inp = form.querySelector('input[type="email"]');
      if (!inp) return;
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value)) {
        inp.value = '';
        showToast('You have subscribed to our newsletter!');
      } else {
        inp.style.boxShadow = '0 0 0 3px rgba(229,62,62,.2)';
        setTimeout(() => inp.style.boxShadow = '', 1500);
      }
    });
  });

  /* ── Form Success ──────────────────────────────────────── */
  function showFormSuccess(form, msg) {
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = '✓ Submitted!';
      btn.style.background = 'var(--green-light)';
      showToast(msg);
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = orig;
        btn.style.background = '';
        form.reset();
      }, 4000);
    }
  }

  /* ── Toast Notification ────────────────────────────────── */
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed; bottom:32px; left:50%; transform:translateX(-50%) translateY(20px);
      background:#1B4332; color:#fff; padding:14px 28px; border-radius:8px;
      font-size:.9rem; font-weight:600; z-index:9999; opacity:0;
      transition: all .4s ease; box-shadow:0 8px 32px rgba(0,0,0,.2);
      border-left:4px solid #E9A826;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  /* ── Smooth Scroll for anchor links ───────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  /* ── Donation form custom amount ───────────────────────── */
  const customAmountInput = document.getElementById('custom-amount');
  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      document.querySelectorAll('.donate-card').forEach(c => c.classList.remove('active'));
    });
  }

});
