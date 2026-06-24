/* SEOptiks — main.js */

// Mobile nav toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (mobileMenu && !mobileMenu.contains(e.target) && !burger.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// Formspree AJAX submission
const form = document.querySelector('.contact-form');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        btn.textContent = 'Something went wrong — try again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Network error — try again';
      btn.disabled = false;
    }
  });
}

// Scroll-triggered fade-up animations
const fadeEls = document.querySelectorAll(
  '.step, .feature-card, .testimonial-card, .faq, .unmask__text, .unmask__visual, .data-card, .visitor-card'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => observer.observe(el));

// Smooth scroll for anchor links with nav offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
