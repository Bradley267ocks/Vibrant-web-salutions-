// ======== Mobile Navigation ========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });
}

// ======== Smooth Scrolling with Offset for Fixed Header ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    const headerOffset = 80;
    const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  });
});
// ======== Reveal on Scroll ========
const revealSelector = '.service-card, .mv-card, .gallery-item, .offer-card';
const revealItems = document.querySelectorAll(revealSelector);

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealItems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
  });
}

// Initial state already defined in CSS; trigger reveal
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();
  showSlide(0);
});

