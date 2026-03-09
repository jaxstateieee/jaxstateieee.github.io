
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

    // Timeline
    'timeline.title': 'Branch History',
    'timeline.y2023': '2023',
    'timeline.d2023': 'Dr. Ghosh initiated the IEEE JSU Student Branch.',
    'timeline.y2024': '2024',
    'timeline.d2024': 'Won position as best starting club and Presentation Competition at SoutheastCon 2024.',
    'timeline.y2025': '2025',
    'timeline.d2025': 'Won third Position in Software Competition at SoutheastCon 2025.',
    'timeline.y2026': '2026',
    'timeline.d2026': 'Preparing for SoutheastCon 2026',

    // Gallery
    'gallery.title': 'JSU IEEE Gallery',

    // About
    'about.title':       'About Us',
    'about.subtitle':    'A Community of Engineers Advancing Technology at JSU',
    'about.mission':     'What We Do • Why it matters',
    'about.missionText': 'The IEEE Jacksonville State University Student Branch is a vibrant community of Gamecock engineers dedicated to advancing technology for humanity. We connect students to IEEE - the world\u2019s largest technical professional organization - and provide hands-on opportunities to bridge classroom theory with real-world impact. Through workshops, regional competitions, industry networking, project teams, and SoutheastCon participation, we help members develop technical excellence, leadership skills, and professional confidence that set them apart in school and beyond.',
    'about.whyJoin':     'Why Join Us?',
    'about.whyJoinText': 'IEEE JSU offers more than just membership - it\u2019s a launchpad for your engineering career.',
    'about.benefit1':    'Gain hands-on experience with embedded systems, robotics, PCB design, AI applications, software development, and more.',
    'about.benefit2':    'Compete at SoutheastCon and other IEEE events - recent teams have won Best New Branch, Presentation, and Software awards.',
    'about.benefit3':    'Build a professional network with industry professionals, JSU alumni, faculty, and peers across Region 3.',
    'about.benefit4':    'Access exclusive IEEE resources - journals, certifications, scholarships, job boards, and discounted conferences.',
    'about.benefit5':    'Develop leadership & teamwork skills through officer roles, event planning, and project management.',
    'about.benefit6':    'Strengthen your resume & LinkedIn - IEEE membership is recognized and respected worldwide.',
    'about.facultyMentor': 'Faculty Mentor',
    'about.mentorRole':  'Faculty Mentor & Advisor',
    'about.mentorDept':  'Computer Science, MCIS Department',
    'about.mentorDesc':  'Dr. Arup Ghosh serves as our faculty mentor, guiding the branch with expertise in electrical engineering and research. He advises on projects, competitions, and IEEE standards, ensuring our activities align with professional excellence.',
    'about.whoLabel':    'WHO WE ARE',
    'about.whoHeading':  'About IEEE JSU',
    'about.whoPara1':    'The IEEE Student Branch at Jacksonville State University connects students with the world\u2019s largest technical professional organization. We bridge classroom theory and real-world engineering through hands-on projects, workshops, and competitions.',
    'about.whoPara2':    'Our branch is part of IEEE Region 3 (Southeastern US) and sends teams to SoutheastCon annually. We focus on embedded systems, robotics, PCB design, and software development \u2014 giving members practical skills that employers value.',
    'about.teamLabel':   'Our Team',
    'about.officers':    'Our Leadership Team',

    // Events
    'events.label':    "WHAT'S HAPPENING",
    'events.title':    'Events',
    'events.subtitle': 'Where ideas become reality — join us!',
    'events.tabUpcoming': 'UPCOMING',
    'events.tabPast':     'PAST',
    'events.tabCalendar': 'CALENDAR',
    'events.upcoming': 'Upcoming Events',
    'events.past':     'Past Highlights',
    'events.register': 'REGISTER INTEREST',
    'events.e1title':  'SoutheastCon 2026',
    'events.e1loc':    'Gainesville, FL',
    'events.e1name':   'SoutheastCon 2026',
    'events.e1desc':   'IEEE Region 3 flagship conference \u2014 hardware competition, student paper presentations, and networking with industry leaders.',
    'events.e2title':  'PCB Design Workshop',
    'events.e2loc':    'Ayers Hall, Room 201',
    'events.e2name':   'Workshop: Intro to PCB Design',
    'events.e2desc':   'Learn the fundamentals of PCB design using industry-standard tools. Hands-on session with KiCad.',
    'events.e3title':  'Weekly Meeting: Game & Software Design',
    'events.e3loc':    'Ayers Hall, JSU',
    'events.e3name':   'Weekly Meeting: Game & Software Design',
    'events.e3desc':   'Learn about game and software design.',
    'events.e4title':  'Weekly Meeting: Hardware with Coral',
    'events.e4loc':    'Ayers Hall, JSU',
    'events.e4name':   'Weekly Meeting: Hardware with Coral',
    'events.e4desc':   'Work and learn on hardware using Coral.',
    'events.p0title':  'ICPC Southeast USA Division 2 Competition',
    'events.p0loc':    'Atlanta, GA',
    'events.p0name':   'ICPC Southeast USA Division 2 Competition',
    'events.p0desc':   'A group of JSU computer science students, guided by coach Dr. Arup Ghosh, competed at Georgia Tech in the ICPC Southeast USA Division 2 programming competition. They solved thirteen challenging problems in a five-hour contest, winning Gold (JaxState4) and Bronze (JaxState2) medals. The team practiced every Saturday since summer, showing strong coding skills and proving JSU can compete with top universities in the region.',
    'events.p1title':  'SoutheastCon 2025',
    'events.p1loc':    'Charlotte, NC',
    'events.p1name':   'SoutheastCon 2025',
    'events.p1desc':   'Ten Jacksonville State University computer science students, guided by Dr. Arup Ghosh, traveled to Charlotte for the IEEE SoutheastCon conference. They competed in challenges such as software, hardware, networking, ethics, and presentations against universities from across the Southeast. Two students presented research papers on learning improvement and teen online safety. JSU also received the Exemplary Student Branch Award for leadership and student involvement.',
    'events.p2title':  'IEEE SoutheastCon 2024',
    'events.p2loc':    'Atlanta, GA',
    'events.p2name':   'IEEE SoutheastCon 2024',
    'events.p2desc':   'A group of ten JSU computer science students, guided by Dr. Arup Ghosh, attended IEEE SoutheastCon 2024 in Atlanta. They competed in software, hardware, networking, ethics, and presentations, winning the Exemplary Student Branch Award for leadership and involvement. Two students presented research papers on learning improvement and online safety for teens. JSU students proudly represented their university among top engineering schools in the region.',

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
    'members.step1':          'Go to',
    'members.step2':          'Select Student Membership (~$32/year)',
    'members.step3':          'Choose Jacksonville State University as your school',
    'members.step4':          'Join the IEEE JSU Student Branch during registration or email us afterward',
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

    // Timeline
    'timeline.title': 'Historia de la Rama',
    'timeline.y2023': '2023',
    'timeline.d2023': 'El Dr. Ghosh inició la Rama Estudiantil IEEE JSU.',
    'timeline.y2024': '2024',
    'timeline.d2024': 'Ganó la posición de mejor club nuevo y la Competencia de Presentación en SoutheastCon 2024.',
    'timeline.y2025': '2025',
    'timeline.d2025': 'Ganó tercer lugar en la Competencia de Software en SoutheastCon 2025.',
    'timeline.y2026': '2026',
    'timeline.d2026': 'Preparándose para SoutheastCon 2026',

    // Gallery
    'gallery.title': 'Galería IEEE JSU',

    // About
    'about.title':       'Sobre Nosotros',
    'about.subtitle':    'Una Comunidad de Ingenieros Avanzando la Tecnología en JSU',
    'about.mission':     'Lo que hacemos • Por qué importa',
    'about.missionText': 'La Rama Estudiantil IEEE de la Universidad Estatal de Jacksonville es una comunidad vibrante de ingenieros Gamecock dedicados a avanzar la tecnología para la humanidad. Conectamos a los estudiantes con IEEE - la organización profesional técnica más grande del mundo - y proporcionamos oportunidades prácticas para unir la teoría del aula con el impacto del mundo real. A través de talleres, competencias regionales, networking industrial, equipos de proyecto y participación en SoutheastCon, ayudamos a los miembros a desarrollar excelencia técnica, habilidades de liderazgo y confianza profesional que los distingue en la escuela y más allá.',
    'about.whyJoin':     '¿Por qué unirse a nosotros?',
    'about.whyJoinText': 'IEEE JSU ofrece más que solo membresía - es una plataforma de lanzamiento para tu carrera de ingeniería.',
    'about.benefit1':    'Obtén experiencia práctica con sistemas embebidos, robótica, diseño de PCB, aplicaciones de IA, desarrollo de software y más.',
    'about.benefit2':    'Compite en SoutheastCon y otros eventos IEEE - equipos recientes han ganado premios de Mejor Nueva Rama, Presentación y Software.',
    'about.benefit3':    'Construye una red profesional con profesionales de la industria, exalumnos de JSU, facultad y compañeros a través de la Región 3.',
    'about.benefit4':    'Accede a recursos exclusivos de IEEE - revistas, certificaciones, becas, bolsas de trabajo y conferencias con descuento.',
    'about.benefit5':    'Desarrolla habilidades de liderazgo y trabajo en equipo a través de roles de officiales, planificación de eventos y gestión de proyectos.',
    'about.benefit6':    'Fortalece tu currículum y LinkedIn - la membresía IEEE es reconocida y respetada mundialmente.',
    'about.facultyMentor': 'Mentor de Facultad',
    'about.mentorRole':  'Mentor de Facultad y Asesor',
    'about.mentorDept':  'Ciencias de la Computación, Departamento MCIS',
    'about.mentorDesc':  'El Dr. Arup Ghosh sirve como nuestro mentor de facultad, guiando la rama con experiencia en ingeniería eléctrica e investigación. Asesora en proyectos, competencias y estándares IEEE, asegurando que nuestras actividades se alineen con la excelencia profesional.',
    'about.whoLabel':    'QUIÉNES SOMOS',
    'about.whoHeading':  'Sobre IEEE JSU',
    'about.whoPara1':    'La Rama Estudiantil de IEEE en la Universidad Estatal de Jacksonville conecta a los estudiantes con la organización profesional técnica más grande del mundo. Unimos la teoría del aula con la ingeniería del mundo real a través de proyectos prácticos, talleres y competencias.',
    'about.whoPara2':    'Nuestra rama es parte de la Región 3 de IEEE (sureste de EE.UU.) y envía equipos a SoutheastCon anualmente. Nos enfocamos en sistemas embebidos, robótica, diseño de PCB y desarrollo de software — brindando a los miembros habilidades prácticas que los empleadores valoran.',
    'about.teamLabel':   'Nuestro Equipo',
    'about.officers':    'Nuestro Equipo de Liderazgo',

    // Events
    'events.label':    'LO QUE PASA',
    'events.title':    'Eventos',
    'events.subtitle': 'Donde las ideas se hacen realidad — \u00a1\u00fanete!',
    'events.tabUpcoming': 'PR\u00d3XIMOS',
    'events.tabPast':     'PASADOS',
    'events.tabCalendar': 'CALENDARIO',
    'events.upcoming': 'Pr\u00f3ximos Eventos',
    'events.past':     'Eventos Pasados Destacados',
    'events.register': 'REGISTRAR INTER\u00c9S',
    'events.e1title':  'SoutheastCon 2026',
    'events.e1loc':    'Gainesville, FL',
    'events.e1name':   'SoutheastCon 2026',
    'events.e1desc':   'Conferencia insignia de la Regi\u00f3n 3 de IEEE \u2014 competencia de hardware, presentaciones de art\u00edculos estudiantiles y networking con l\u00edderes de la industria.',
    'events.e2title':  'Taller de Dise\u00f1o PCB',
    'events.e2loc':    'Ayers Hall, Sala 201',
    'events.e2name':   'Taller: Intro al Dise\u00f1o de PCB',
    'events.e2desc':   'Aprende los fundamentos del dise\u00f1o de PCB con herramientas est\u00e1ndar de la industria. Sesi\u00f3n pr\u00e1ctica con KiCad.',
    'events.e3title':  'Rob\u00f3tica Arduino',
    'events.e3loc':    'Laboratorio de Ingenier\u00eda B',
    'events.e3name':   'Desaf\u00edo de Rob\u00f3tica Arduino',
    'events.e3desc':   'Construye y programa un robot aut\u00f3nomo seguidor de l\u00ednea. Equipos de 3-4, todos los niveles bienvenidos.',
    'events.p1title':  'SoutheastCon 2025',
    'events.p1loc':    'Charlotte, NC',
    'events.p1name':   'SoutheastCon 2025',
    'events.p1desc':   'Diez estudiantes de ciencias de la computación de la Universidad Estatal de Jacksonville, guiados por el Dr. Arup Ghosh, viajaron a Charlotte para la conferencia IEEE SoutheastCon. Compitieron en desafíos como software, hardware, networking, ética y presentaciones contra universidades de todo el sureste. Dos estudiantes presentaron artículos de investigación sobre mejora del aprendizaje y seguridad en línea para adolescentes. JSU también recibió el Premio Exemplary Student Branch por liderazgo e involucramiento estudiantil.',
    'events.p2title':  'IEEE SoutheastCon 2024',
    'events.p2loc':    'Atlanta, GA',
    'events.p2name':   'IEEE SoutheastCon 2024',
    'events.p2desc':   'Un grupo de diez estudiantes de ciencias de la computación de JSU, guiados por el Dr. Arup Ghosh, asistió a IEEE SoutheastCon 2024 en Atlanta. Compitieron en software, hardware, networking, ética y presentaciones, ganando el Premio Exemplary Student Branch por liderazgo e involucramiento. Dos estudiantes presentaron artículos de investigación sobre mejora del aprendizaje y seguridad en línea para adolescentes. Los estudiantes de JSU representaron orgullosamente a su universidad entre las mejores escuelas de ingeniería de la región.',

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
    'members.step1':          'Ve a',
    'members.step2':          'Selecciona Membresía Estudiantil (~$32/año)',
    'members.step3':          'Elige Universidad Estatal de Jacksonville como tu escuela',
    'members.step4':          'Únete a la Rama Estudiantil IEEE JSU durante el registro o envíanos un email después',
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

  // Mobile menu toggle (handled by hamburger morph code below)

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const nl = document.querySelector('.nav-links');
      if (nl) nl.classList.remove('active');
      const hb = document.querySelector('.hamburger');
      if (hb) hb.classList.remove('is-active');
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

  // ─── Event Page Tabs ──────────────────────────
  const evTabs = document.querySelectorAll('.ev-tab');
  if (evTabs.length) {
    evTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate all tabs & content
        evTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.ev-tab-content').forEach(c => c.classList.remove('active'));
        // Activate clicked tab & matching content
        tab.classList.add('active');
        const target = document.getElementById('tab-' + tab.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
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
          const targetStr = el.getAttribute('data-target');
          const target = parseInt(targetStr);
          const suffix = targetStr.replace(/[0-9]/g, ''); // Extract non-numeric chars like "+"
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Quadratic ease-out: 1 - (1 - t)^2
            const eased = 1 - Math.pow(1 - progress, 2);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              el.textContent = target + suffix;
            }
          };

          requestAnimationFrame(update);
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

  // Auto-advance every 5 seconds
  let autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);
  
  function restartAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000);
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    restartAutoPlay();
  });
  
  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    restartAutoPlay();
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  let isTouching = false;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isTouching = true;
    clearInterval(autoPlay);
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    }
    isTouching = false;
    restartAutoPlay();
  }, { passive: true });

  // Pause on mouse hover (desktop)
  carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
  carousel.addEventListener('mouseleave', () => {
    if (!isTouching) {
      restartAutoPlay();
    }
  });
}

// ================================================================
// SCROLL-REVEAL ANIMATION SYSTEM
// ================================================================

// Mark document as JS-ready so CSS hides elements before reveal
document.documentElement.classList.add('js-ready');

// --- Element-level reveal observer ---
const revealElements = document.querySelectorAll('.fade-up, .slide-left, .slide-right, .fade-in');
if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));
}

// --- Stagger-parent observer ---
const staggerParents = document.querySelectorAll('.stagger-parent');
if (staggerParents.length) {
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  staggerParents.forEach(el => staggerObserver.observe(el));
}

// --- Hamburger morph toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinksForHamburger = document.querySelector('.nav-links');
if (hamburger && navLinksForHamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navLinksForHamburger.classList.toggle('active');
  });

  // Close on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      navLinksForHamburger.classList.remove('active');
    });
  });
}

// --- Officer card flip behavior ---
const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (isMobile) {
  // Mobile: Start flipped (show details), flip to front when centered, then stay
  const officerCards = document.querySelectorAll('.officer-card');
  
  // Initially flip all cards to show details
  officerCards.forEach(card => card.classList.add('flipped'));
  
  if (officerCards.length) {
    const flipObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When card is in the middle ~50% of viewport, show front (picture) and stop observing
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.remove('flipped');
          flipObserver.unobserve(entry.target); // Don't flip back once revealed
        }
      });
    }, { 
      threshold: [0, 0.3, 0.5, 0.7, 1.0],
      rootMargin: '-20% 0px -20% 0px' // Middle 60% of viewport
    });
    
    officerCards.forEach(card => flipObserver.observe(card));
  }
} else {
  // Desktop: Click to flip
  document.querySelectorAll('.officer-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

// What we build video play/pause behavior
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-video-btn');
  const video = document.getElementById('branch-robot-video');
  const posterImg = document.querySelector('.video-wrapper img');

  if (playBtn && video && posterImg) {
    playBtn.addEventListener('click', () => {
      playBtn.style.display = 'none';  
      posterImg.style.display = 'none'; 
      video.style.display = 'block';
      video.play().catch(e => console.log("Video play failed:", e));
    });

    video.addEventListener('ended', () => {
      playBtn.style.display = 'block';
      posterImg.style.display = 'block';
      video.style.display = 'none';         
      video.currentTime = 0;       
    });
  }

  // ─── Live Date and Time Display ──────────────────────
  function updateDateTime() {
    const datetimeEl = document.getElementById('current-datetime');
    if (datetimeEl) {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };
      datetimeEl.textContent = now.toLocaleDateString('en-US', options);
    }
  }
  
  // Update immediately and then every second
  updateDateTime();
  setInterval(updateDateTime, 1000);
});