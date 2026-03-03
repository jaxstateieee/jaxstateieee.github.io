
document.addEventListener('DOMContentLoaded', () => {

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  // Simple announcement rotation (if multiple <span class="rotating">)
  const rotating = document.querySelectorAll('.rotating');
  if (rotating.length > 1) {
    let i = 0;
    setInterval(() => {
      rotating.forEach(el => el.style.opacity = '0');
      rotating[i].style.opacity = '1';
      i = (i + 1) % rotating.length;
    }, 5500);
  }

  // Rotating announcement + dismiss
const banner = document.getElementById('announcement-banner');
if (banner) {
  const textEl = banner.querySelector('.rotating-text');
  const texts = JSON.parse(textEl.dataset.texts || '[]');
  let idx = 0;

  if (texts.length > 1) {
    setInterval(() => {
      textEl.style.opacity = '0';
      setTimeout(() => {
        idx = (idx + 1) % texts.length;
        textEl.textContent = texts[idx];
        textEl.style.opacity = '1';
      }, 600);
    }, 5500);
  }

  banner.querySelector('.banner-close')?.addEventListener('click', () => {
    banner.classList.add('hidden');
    localStorage.setItem('bannerDismissed', 'true');
  });

  // Don't show if already dismissed this session
  if (localStorage.getItem('bannerDismissed') === 'true') {
    banner.classList.add('hidden');
  }
}

});


// Stat counter animation + visibility trigger
const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats-section');

if (stats.length && statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          let count = 0;
          const increment = target / 60; // ~1 second animation
          
          const update = () => {
            count += increment;
            el.textContent = Math.floor(count);
            if (count < target) {
              requestAnimationFrame(update);
            } else {
              el.textContent = target;
            }
          };
          
          update();
        });
        
        statsSection.querySelectorAll('.stat-item').forEach(item => {
          item.classList.add('visible');
        });
        
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}