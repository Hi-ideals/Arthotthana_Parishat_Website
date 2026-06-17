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
        const duration = 1800; // 1.8 seconds
        const startTime = performance.now();
        const suffix = el.getAttribute('data-suffix') || '';
        
        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // easeOutQuad curve for smooth decelerating animation
          const easeProgress = progress * (2 - progress);
          const curr = Math.floor(easeProgress * end);
          
          el.textContent = curr.toLocaleString() + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = end.toLocaleString() + suffix;
          }
        }
        
        requestAnimationFrame(updateCounter);
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
      background:#4a4047; color:#fff; padding:14px 28px; border-radius:8px;
      font-size:.9rem; font-weight:600; z-index:9999; opacity:0;
      transition: all .4s ease; box-shadow:0 8px 32px rgba(0,0,0,.2);
      border-left:4px solid #e5dcd3;
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

  /* ── Wavy Timeline Animation ───────────────────────────── */
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const svg = timeline.querySelector('.timeline-svg-line');
    const pathBg = timeline.querySelector('.timeline-path-bg');
    const pathFill = timeline.querySelector('.timeline-path-fill');
    const items = timeline.querySelectorAll('.timeline-item');
    const dots = timeline.querySelectorAll('.timeline-dot');

    let cachedPoints = [];
    let cachedPathLength = 0;

    function updateTimelinePath() {
      if (!timeline || !svg || !pathBg || !pathFill || dots.length === 0) return;

      const timelineRect = timeline.getBoundingClientRect();
      const timelineHeight = timeline.offsetHeight;
      
      svg.setAttribute('viewBox', `0 0 ${timelineRect.width} ${timelineHeight}`);
      
      cachedPoints = [];
      dots.forEach(dot => {
        let top = 0;
        let left = 0;
        let currentEl = dot;
        while (currentEl && currentEl !== timeline) {
          top += currentEl.offsetTop;
          left += currentEl.offsetLeft;
          currentEl = currentEl.offsetParent;
        }
        const x = left + dot.offsetWidth / 2;
        const y = top + dot.offsetHeight / 2;
        cachedPoints.push({ x, y, el: dot });
      });

      cachedPoints.sort((a, b) => a.y - b.y);

      if (cachedPoints.length === 0) return;

      const isMobile = window.innerWidth < 992;
      const waveWidth = isMobile ? 18 : 65;

      let pathD = `M ${cachedPoints[0].x} ${cachedPoints[0].y}`;

      for (let i = 0; i < cachedPoints.length - 1; i++) {
        const pStart = cachedPoints[i];
        const pEnd = cachedPoints[i + 1];
        const dy = pEnd.y - pStart.y;
        const dir = (i % 2 === 0) ? 1 : -1;
        const cp1x = pStart.x + dir * waveWidth;
        const cp1y = pStart.y + dy * 0.35;
        const cp2x = pEnd.x + dir * waveWidth;
        const cp2y = pEnd.y - dy * 0.35;
        pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pEnd.x} ${pEnd.y}`;
      }

      pathBg.setAttribute('d', pathD);
      pathFill.setAttribute('d', pathD);

      cachedPathLength = pathFill.getTotalLength();
      pathFill.style.strokeDasharray = cachedPathLength;
      
      onTimelineScroll();
    }

    function onTimelineScroll() {
      if (!timeline || !pathFill || cachedPoints.length === 0) return;

      const timelineRect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const triggerY = viewportHeight * 0.7;
      const scrollYInTimeline = (viewportHeight - timelineRect.top) - (viewportHeight - triggerY);
      
      const startY = cachedPoints[0].y;
      const endY = cachedPoints[cachedPoints.length - 1].y;
      const drawHeight = endY - startY;

      const scrollFromStart = scrollYInTimeline - startY;
      let progress = scrollFromStart / drawHeight;
      progress = Math.max(0, Math.min(1, progress));

      pathFill.style.strokeDashoffset = cachedPathLength * (1 - progress);

      const currentScrollY = scrollYInTimeline;

      cachedPoints.forEach((pt, index) => {
        const item = items[index];
        if (currentScrollY >= pt.y - 10) {
          if (pt.el) pt.el.classList.add('active');
          if (item) item.classList.add('visible');
        } else {
          if (pt.el) pt.el.classList.remove('active');
          if (item) item.classList.remove('visible');
        }
      });
    }

    setTimeout(updateTimelinePath, 200);
    window.addEventListener('load', updateTimelinePath);
    window.addEventListener('scroll', onTimelineScroll);

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateTimelinePath, 100);
    });

    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => {
        updateTimelinePath();
      });
      ro.observe(timeline);
    }
  }

});
