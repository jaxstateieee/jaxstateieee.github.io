
/* ─────────────────────────────────────────────
   i18n – English / Spanish translation system
────────────────────────────────────────────── */

const translations = {
  en: {
    // Navbar
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.events':   'Events',
    'nav.join':     'Join',
    'nav.contact':  'Contact',

    // Index – Hero
    'hero.title':    'IEEE<br>Jacksonville State<br>University',
    'hero.subtitle': 'Gamecock Engineers – Building the future, one circuit at a time.',
    'hero.join':     'Join IEEE JSU',
    'hero.events':   'Upcoming Events',

    // Index – Stats
    'stats.members':  'Active Members',
    'stats.events':   'Events Hosted',
    'stats.officers': 'Officer Team',
    'stats.projects': 'Projects Completed',

    // Index – Calendar
    'calendar.heading': 'Stay Up-to-Date with the upcoming events',
    'calendar.live':    'Live Calendar',
    'calendar.public':  'Calendar is public — no login required',

    // Index – CTA
    'cta.heading': 'Ready to power up your future?',
    'cta.button':  'Become a Member Today',

    // Gallery
    'gallery.title': 'JSU IEEE Gallery',

    // About
    'about.title':       'About Us',
    'about.subtitle':    'Who we are • What we do • Why it matters',
    'about.mission':     'Our Mission',
    'about.missionText': 'The IEEE JSU Student Branch exists to inspire, connect, and empower the next generation of engineers and technologists. Through hands-on projects, professional development, networking events, and community outreach we help members grow both technically and professionally.',
    'about.whoLabel':    'WHO WE ARE',
    'about.whoHeading':  'About IEEE JSU',
    'about.whoPara1':    'The IEEE Student Branch at Jacksonville State University connects students with the world\u2019s largest technical professional organization. We bridge classroom theory and real-world engineering through hands-on projects, workshops, and competitions.',
    'about.whoPara2':    'Our branch is part of IEEE Region 3 (Southeastern US) and sends teams to SoutheastCon annually. We focus on embedded systems, robotics, PCB design, and software development \u2014 giving members practical skills that employers value.',
    'about.teamLabel':   'Our Team',
    'about.officers':    'Officers',

    // Events
    'events.title':    'Events & Workshops',
    'events.subtitle': 'Where ideas become reality — join us!',
    'events.upcoming': 'Upcoming Events',
    'events.past':     'Past Highlights',

    // Members
    'members.title':          'Join IEEE JSU',
    'members.subtitle':       'Be part of the largest technical professional organization in the world — on campus.',
    'members.why':            'Why Join IEEE?',
    'members.networking':     'Networking',
    'members.networkingText': 'Meet industry professionals, alumni, professors and fellow students.',
    'members.projects':       'Projects & Competitions',
    'members.projectsText':   'Work on real hardware/software projects and compete regionally/nationally.',
    'members.career':         'Career Boost',
    'members.careerText':     'IEEE membership looks excellent on resumes and LinkedIn.',
    'members.how':            'How to Join',
    'members.joinBtn':        'Join IEEE Now',

    // Contact
    'contact.title':          'Get in Touch',
    'contact.subtitle':       "Questions? Ideas? Just want to say hi? We're listening.",
    'contact.reach':          'Reach Us',
    'contact.advisorTitle':   'Faculty Advisor',
    'contact.presidentTitle': 'President',
    'contact.webmasterTitle': 'Webmaster',
    'contact.social':         'Social & Platforms',
    'contact.send':           'Send Message',
    'contact.sendBtn':        'Send Message',
    'contact.namePh':         'Your Name',
    'contact.emailPh':        'Your Email',
    'contact.subjectPh':      'Subject',
    'contact.messagePh':      'Your message...',

    // Footer (shared)
    'footer.branch':       'IEEE JSU Student Branch',
    'footer.tagline':      'Advancing technology for humanity — right here in Jacksonville, Alabama.',
    'footer.links':        'Quick Links',
    'footer.about':        'About Us',
    'footer.events':       'Events & Workshops',
    'footer.join':         'Join IEEE',
    'footer.contact':      'Contact Officers',
    'footer.contactTitle': 'Contact',
    'footer.advisor':      'Faculty Advisor:',
    'footer.webmaster':    'Webmaster:',
    'footer.updated':      'Last updated:',
    'footer.copyright':    '© 2026 IEEE Jacksonville State University Student Branch',
  },

  es: {
    // Navbar
    'nav.home':     'Inicio',
    'nav.about':    'Acerca',
    'nav.events':   'Eventos',
    'nav.join':     'Únete',
    'nav.contact':  'Contacto',

    // Index – Hero
    'hero.title':    'IEEE<br>Jacksonville State<br>University',
    'hero.subtitle': 'Ingenieros Gamecock – Construyendo el futuro, un circuito a la vez.',
    'hero.join':     'Únete a IEEE JSU',
    'hero.events':   'Próximos Eventos',

    // Index – Stats
    'stats.members':  'Miembros Activos',
    'stats.events':   'Eventos Realizados',
    'stats.officers': 'Equipo Directivo',
    'stats.projects': 'Proyectos Completados',

    // Index – Calendar
    'calendar.heading': 'Mantente al día con los próximos eventos',
    'calendar.live':    'Calendario en Vivo',
    'calendar.public':  'El calendario es público — no requiere inicio de sesión',

    // Index – CTA
    'cta.heading': '¿Listo para impulsar tu futuro?',
    'cta.button':  'Hazte Miembro Hoy',

    // Gallery
    'gallery.title': 'Galería IEEE JSU',

    // About
    'about.title':       'Sobre Nosotros',
    'about.subtitle':    'Quiénes somos • Qué hacemos • Por qué importa',
    'about.mission':     'Nuestra Misión',
    'about.missionText': 'La Rama Estudiantil IEEE JSU existe para inspirar, conectar y empoderar a la próxima generación de ingenieros y tecnólogos. A través de proyectos prácticos, desarrollo profesional, eventos de networking y servicio comunitario, ayudamos a los miembros a crecer tanto técnica como profesionalmente.',
    'about.whoLabel':    'QUIÉNES SOMOS',
    'about.whoHeading':  'Sobre IEEE JSU',
    'about.whoPara1':    'La Rama Estudiantil de IEEE en la Universidad Estatal de Jacksonville conecta a los estudiantes con la organización profesional técnica más grande del mundo. Unimos la teoría del aula con la ingeniería del mundo real a través de proyectos prácticos, talleres y competencias.',
    'about.whoPara2':    'Nuestra rama es parte de la Región 3 de IEEE (sureste de EE.UU.) y envía equipos a SoutheastCon anualmente. Nos enfocamos en sistemas embebidos, robótica, diseño de PCB y desarrollo de software — brindando a los miembros habilidades prácticas que los empleadores valoran.',
    'about.teamLabel':   'Nuestro Equipo',
    'about.officers':    'Oficiales',

    // Events
    'events.title':    'Eventos y Talleres',
    'events.subtitle': 'Donde las ideas se hacen realidad — ¡únete!',
    'events.upcoming': 'Próximos Eventos',
    'events.past':     'Eventos Pasados Destacados',

    // Members
    'members.title':          'Únete a IEEE JSU',
    'members.subtitle':       'Sé parte de la organización profesional técnica más grande del mundo — en tu campus.',
    'members.why':            '¿Por qué unirse a IEEE?',
    'members.networking':     'Networking',
    'members.networkingText': 'Conoce profesionales de la industria, exalumnos, profesores y compañeros.',
    'members.projects':       'Proyectos y Competencias',
    'members.projectsText':   'Trabaja en proyectos reales de hardware/software y compite a nivel regional/nacional.',
    'members.career':         'Impulso Profesional',
    'members.careerText':     'La membresía IEEE luce excelente en currículums y LinkedIn.',
    'members.how':            'Cómo Unirse',
    'members.joinBtn':        'Únete a IEEE Ahora',

    // Contact
    'contact.title':          'Contáctanos',
    'contact.subtitle':       '¿Preguntas? ¿Ideas? ¿Solo quieres saludar? Te escuchamos.',
    'contact.reach':          'Encuéntranos',
    'contact.advisorTitle':   'Asesor de Facultad',
    'contact.presidentTitle': 'Presidente',
    'contact.webmasterTitle': 'Administrador Web',
    'contact.social':         'Redes Sociales',
    'contact.send':           'Enviar Mensaje',
    'contact.sendBtn':        'Enviar Mensaje',
    'contact.namePh':         'Tu Nombre',
    'contact.emailPh':        'Tu Correo Electrónico',
    'contact.subjectPh':      'Asunto',
    'contact.messagePh':      'Tu mensaje...',

    // Footer (shared)
    'footer.branch':       'Rama Estudiantil IEEE JSU',
    'footer.tagline':      'Avanzando la tecnología para la humanidad — aquí en Jacksonville, Alabama.',
    'footer.links':        'Enlaces Rápidos',
    'footer.about':        'Sobre Nosotros',
    'footer.events':       'Eventos y Talleres',
    'footer.join':         'Únete a IEEE',
    'footer.contact':      'Contactar Oficiales',
    'footer.contactTitle': 'Contacto',
    'footer.advisor':      'Asesor de Facultad:',
    'footer.webmaster':    'Administrador Web:',
    'footer.updated':      'Última actualización:',
    'footer.copyright':    '© 2026 IEEE Rama Estudiantil Universidad Estatal de Jacksonville',
  }
};

// Announcement texts in both languages
const announcementTexts = {
  en: [
    "SoutheastCon 2026 – April 10–13, Gainesville, FL → Register now!",
    "Weekly Tech Workshops every Thursday 6PM – Ayers Hall 201",
    "IEEE Project Competition submissions due March 15th"
  ],
  es: [
    "SoutheastCon 2026 – 10 al 13 de abril, Gainesville, FL → ¡Regístrate ahora!",
    "Talleres de Tecnología todos los jueves 6PM – Ayers Hall 201",
    "Entregas de la Competencia de Proyectos IEEE hasta el 15 de marzo"
  ]
};

function setLanguage(lang) {
  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders (data-i18n-placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update announcement banner rotating text
  const textEl = document.querySelector('.rotating-text');
  if (textEl && announcementTexts[lang]) {
    textEl.dataset.texts = JSON.stringify(announcementTexts[lang]);
    textEl.textContent = announcementTexts[lang][0];
  }

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update toggle button active state
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Persist choice
  localStorage.setItem('ieeejsu-lang', lang);
}

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

  // ─── Language toggle ──────────────────────────
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const current = localStorage.getItem('ieeejsu-lang') || 'en';
      const next = current === 'en' ? 'es' : 'en';
      setLanguage(next);
    });
  }

  // Restore saved language (default: English)
  const savedLang = localStorage.getItem('ieeejsu-lang') || 'en';
  if (savedLang !== 'en') {
    setLanguage(savedLang);
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

// ─── Image Gallery Carousel ──────────────────────
const carousel = document.querySelector('.gallery-carousel');
if (carousel) {
  const track = carousel.querySelector('.gallery-track');
  const slides = carousel.querySelectorAll('.gallery-slide');
  const dotsContainer = carousel.querySelector('.gallery-dots');
  const prevBtn = carousel.querySelector('.gallery-prev');
  const nextBtn = carousel.querySelector('.gallery-next');
  let currentIndex = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('gallery-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.gallery-dot');

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    }
  }, { passive: true });

  // Auto-advance every 5 seconds
  let autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);

  carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
  carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);
  });
}