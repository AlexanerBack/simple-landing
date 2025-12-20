// Initialize EmailJS after config is loaded
if (typeof emailjs !== 'undefined' && typeof EMAILJS_CONFIG !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

// Theme Switcher
function getCurrentHour() {
    return new Date().getHours();
}

function shouldUseDarkTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    // Auto switch to dark after 19:00 (7 PM)
    return getCurrentHour() >= 19;
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function initTheme() {
    const theme = shouldUseDarkTheme() ? 'dark' : 'light';
    setTheme(theme);
}

// Initialize theme on page load
initTheme();

// Theme toggle buttons
function setupThemeToggle(buttonId) {
    const themeToggle = document.getElementById(buttonId);
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}

setupThemeToggle('themeToggle');
setupThemeToggle('themeToggleMobile');

// Check time every minute and auto-switch if needed (only if user hasn't manually set theme)
setInterval(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        const theme = shouldUseDarkTheme() ? 'dark' : 'light';
        setTheme(theme);
    }
}, 60000); // Check every minute

// Language Switcher
function detectBrowserLanguage() {
    const supportedLangs = ['ru', 'uk', 'pl', 'en'];
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    if (supportedLangs.includes(langCode)) {
        return langCode;
    }
    
    // Try to match from navigator.languages array
    if (navigator.languages) {
        for (let lang of navigator.languages) {
            const code = lang.split('-')[0].toLowerCase();
            if (supportedLangs.includes(code)) {
                return code;
            }
        }
    }
    
    return 'en';
}

function getInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        return savedLang;
    }
    return detectBrowserLanguage();
}

let currentLang = getInitialLanguage();
if (!localStorage.getItem('language')) {
    localStorage.setItem('language', currentLang);
}
const langBtn = document.getElementById('langBtn');
const langBtnDesktop = document.getElementById('langBtnDesktop');
const langDropdown = document.getElementById('langDropdown');
const langDropdownDesktop = document.getElementById('langDropdownDesktop');
const langOptions = document.querySelectorAll('.lang-option');

// Update language button text
function updateLangButton() {
    const langNames = { ru: 'RU', uk: 'UK', pl: 'PL', en: 'EN' };
    const langCurrents = document.querySelectorAll('.lang-current');
    langCurrents.forEach(el => {
        el.textContent = langNames[currentLang] || 'RU';
    });
}

// Toggle language dropdown
if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.language-switcher').classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const allSwitchers = document.querySelectorAll('.language-switcher');
        allSwitchers.forEach(switcher => {
            if (!e.target.closest('.language-switcher')) {
                switcher.classList.remove('active');
            }
        });
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            currentLang = lang;
            localStorage.setItem('language', lang);
            updateLangButton();
            translatePage(lang);
            
            // Close all language switchers
            document.querySelectorAll('.language-switcher').forEach(switcher => {
                switcher.classList.remove('active');
            });
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
}

if (langBtnDesktop && langDropdownDesktop) {
    langBtnDesktop.addEventListener('click', (e) => {
        e.stopPropagation();
        const switcher = langBtnDesktop.closest('.language-switcher');
        if (switcher) switcher.classList.toggle('active');
    });
}

// Translation function
function translatePage(lang) {
    const t = translations[lang] || translations.ru;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Helper function to update text content
    function updateText(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        });
    }
    
    // Helper function to update by data attribute
    function updateByData(dataAttr, path) {
        const elements = document.querySelectorAll(`[${dataAttr}]`);
        elements.forEach(el => {
            const keys = el.getAttribute(dataAttr).split('.');
            let value = t;
            keys.forEach(key => value = value?.[key]);
            if (value) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'OPTION') {
                    if (dataAttr === 'data-translate-placeholder') {
                        el.placeholder = value;
                    } else {
                        el.textContent = value;
                    }
                } else {
                    el.textContent = value;
                }
            }
        });
    }
    
    // Update placeholders
    updateByData('data-translate-placeholder', '');
    
    // Update all elements with data-translate attribute
    updateByData('data-translate', '');
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (navLinks.length >= 6) {
        navLinks[0].textContent = t.nav.home;
        navLinks[1].textContent = t.nav.about;
        navLinks[2].textContent = t.nav.services;
        navLinks[3].textContent = t.nav.pricing;
        navLinks[4].textContent = t.nav.process;
        navLinks[5].textContent = t.nav.contact;
    }
    
    // Hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `${t.hero.title} <span class="gradient-text">${t.hero.titleHighlight}</span>`;
    }
    updateText('.hero-subtitle', t.hero.subtitle);
    updateText('.btn-primary', t.hero.button);
    
    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = t.hero.stats.projects;
        statLabels[1].textContent = t.hero.stats.years;
        statLabels[2].textContent = t.hero.stats.clients;
    }
    
    // About section
    updateText('.section-tag', t.about.tag);
    updateText('.section-title', t.about.title);
    
    // Services section
    // This will be handled by data attributes
    
    // About cards
    const aboutCards = document.querySelectorAll('.about-card');
    if (aboutCards.length >= 4) {
        aboutCards[0].querySelector('h3').textContent = t.about.cards.focus.title;
        aboutCards[0].querySelector('p').textContent = t.about.cards.focus.text;
        aboutCards[1].querySelector('h3').textContent = t.about.cards.tech.title;
        aboutCards[1].querySelector('p').textContent = t.about.cards.tech.text;
        aboutCards[2].querySelector('h3').textContent = t.about.cards.transparent.title;
        aboutCards[2].querySelector('p').textContent = t.about.cards.transparent.text;
        aboutCards[3].querySelector('h3').textContent = t.about.cards.fast.title;
        aboutCards[3].querySelector('p').textContent = t.about.cards.fast.text;
    }
    
    // Services cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length >= 4) {
        serviceCards[0].querySelector('h3').textContent = t.services.cards.web.title;
        serviceCards[0].querySelector('p').textContent = t.services.cards.web.text;
        const webFeatures = serviceCards[0].querySelectorAll('.service-features li');
        t.services.cards.web.features.forEach((feature, i) => {
            if (webFeatures[i]) webFeatures[i].textContent = feature;
        });
        
        serviceCards[1].querySelector('h3').textContent = t.services.cards.design.title;
        serviceCards[1].querySelector('p').textContent = t.services.cards.design.text;
        const designFeatures = serviceCards[1].querySelectorAll('.service-features li');
        t.services.cards.design.features.forEach((feature, i) => {
            if (designFeatures[i]) designFeatures[i].textContent = feature;
        });
        
        serviceCards[2].querySelector('h3').textContent = t.services.cards.mobile.title;
        serviceCards[2].querySelector('p').textContent = t.services.cards.mobile.text;
        const mobileFeatures = serviceCards[2].querySelectorAll('.service-features li');
        t.services.cards.mobile.features.forEach((feature, i) => {
            if (mobileFeatures[i]) mobileFeatures[i].textContent = feature;
        });
        
        serviceCards[3].querySelector('h3').textContent = t.services.cards.support.title;
        serviceCards[3].querySelector('p').textContent = t.services.cards.support.text;
        const supportFeatures = serviceCards[3].querySelectorAll('.service-features li');
        t.services.cards.support.features.forEach((feature, i) => {
            if (supportFeatures[i]) supportFeatures[i].textContent = feature;
        });
    }
    
    // Update services section header
    const servicesSection = document.querySelector('#services .section-tag');
    if (servicesSection) servicesSection.textContent = t.services.tag;
    const servicesTitle = document.querySelector('#services .section-title');
    if (servicesTitle) servicesTitle.textContent = t.services.title;
    
    // Pricing section
    const pricingSection = document.querySelector('#pricing .section-tag');
    if (pricingSection) pricingSection.textContent = t.pricing.tag;
    const pricingTitle = document.querySelector('#pricing .section-title');
    if (pricingTitle) pricingTitle.textContent = t.pricing.title;
    const pricingSubtitle = document.querySelector('#pricing .section-description');
    if (pricingSubtitle) pricingSubtitle.textContent = t.pricing.subtitle;
    
    const priceAmounts = document.querySelectorAll('.price-amount');
    const pricePrefix = lang === 'en' ? 'from' : lang === 'pl' ? 'od' : lang === 'uk' ? 'від' : 'от';
    priceAmounts.forEach((el) => {
        const priceKey = el.dataset.price;
        if (priceKey && prices[priceKey]) {
            el.textContent = `${pricePrefix} $${prices[priceKey].toLocaleString()}`;
        }
    });
    
    // Update pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    if (pricingCards.length >= 5) {
        // Corporate
        pricingCards[0].querySelector('.pricing-header h3').textContent = t.pricing.cards.corporate.title;
        pricingCards[0].querySelector('.pricing-subtitle').textContent = t.pricing.cards.corporate.subtitle;
        const corporateFeatures = pricingCards[0].querySelectorAll('.pricing-features li');
        t.pricing.cards.corporate.features.forEach((feature, i) => {
            if (corporateFeatures[i]) corporateFeatures[i].textContent = feature;
        });
        
        // Landing
        pricingCards[1].querySelector('.pricing-header h3').textContent = t.pricing.cards.landing.title;
        pricingCards[1].querySelector('.pricing-subtitle').textContent = t.pricing.cards.landing.subtitle;
        const landingFeatures = pricingCards[1].querySelectorAll('.pricing-features li');
        t.pricing.cards.landing.features.forEach((feature, i) => {
            if (landingFeatures[i]) landingFeatures[i].textContent = feature;
        });
        const popularBadge = pricingCards[1].querySelector('.pricing-badge');
        if (popularBadge) popularBadge.textContent = t.pricing.popular;
        
        // CRM
        pricingCards[2].querySelector('.pricing-header h3').textContent = t.pricing.cards.crm.title;
        pricingCards[2].querySelector('.pricing-subtitle').textContent = t.pricing.cards.crm.subtitle;
        const crmFeatures = pricingCards[2].querySelectorAll('.pricing-features li');
        t.pricing.cards.crm.features.forEach((feature, i) => {
            if (crmFeatures[i]) crmFeatures[i].textContent = feature;
        });
        
        // Web App
        pricingCards[3].querySelector('.pricing-header h3').textContent = t.pricing.cards.webapp.title;
        pricingCards[3].querySelector('.pricing-subtitle').textContent = t.pricing.cards.webapp.subtitle;
        const webappFeatures = pricingCards[3].querySelectorAll('.pricing-features li');
        t.pricing.cards.webapp.features.forEach((feature, i) => {
            if (webappFeatures[i]) webappFeatures[i].textContent = feature;
        });
        
        // Enterprise
        pricingCards[4].querySelector('.pricing-header h3').textContent = t.pricing.cards.enterprise.title;
        pricingCards[4].querySelector('.pricing-subtitle').textContent = t.pricing.cards.enterprise.subtitle;
        const enterpriseFeatures = pricingCards[4].querySelectorAll('.pricing-features li');
        t.pricing.cards.enterprise.features.forEach((feature, i) => {
            if (enterpriseFeatures[i]) enterpriseFeatures[i].textContent = feature;
        });
    }
    
    // Update pricing buttons and period
    document.querySelectorAll('.pricing-card .btn').forEach(btn => {
        btn.textContent = t.pricing.button;
    });
    document.querySelectorAll('.price-period').forEach(el => {
        el.textContent = t.pricing.period;
    });
    
    // Update pricing note
    const pricingNote = document.querySelector('.pricing-note p');
    if (pricingNote) pricingNote.textContent = t.pricing.note;
    
    // Process section
    const processSection = document.querySelector('#process .section-tag');
    if (processSection) processSection.textContent = t.process.tag;
    const processTitle = document.querySelector('#process .section-title');
    if (processTitle) processTitle.textContent = t.process.title;
    const processSubtitle = document.querySelector('#process .section-description');
    if (processSubtitle) processSubtitle.textContent = t.process.subtitle;
    
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length >= 5) {
        processSteps[0].querySelector('h3').textContent = t.process.steps.analysis.title;
        processSteps[0].querySelector('p').textContent = t.process.steps.analysis.text;
        processSteps[1].querySelector('h3').textContent = t.process.steps.design.title;
        processSteps[1].querySelector('p').textContent = t.process.steps.design.text;
        processSteps[2].querySelector('h3').textContent = t.process.steps.development.title;
        processSteps[2].querySelector('p').textContent = t.process.steps.development.text;
        processSteps[3].querySelector('h3').textContent = t.process.steps.testing.title;
        processSteps[3].querySelector('p').textContent = t.process.steps.testing.text;
        processSteps[4].querySelector('h3').textContent = t.process.steps.launch.title;
        processSteps[4].querySelector('p').textContent = t.process.steps.launch.text;
    }
    
    // Contact section
    const contactSection = document.querySelector('#contact .section-tag');
    if (contactSection) contactSection.textContent = t.contact.tag;
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = t.contact.title;
    const contactSubtitle = document.querySelector('#contact .section-description');
    if (contactSubtitle) contactSubtitle.textContent = t.contact.subtitle;
    
    // Contact details
    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems.length >= 1) {
        const contactTitle = contactItems[0].querySelector('h4[data-translate="contact.email.title"]');
        if (contactTitle && t.contact && t.contact.email && t.contact.email.title) {
            contactTitle.textContent = t.contact.email.title;
        }
    }
    
    // Footer translations
    // Footer navigation
    const footerNavLinks = document.querySelectorAll('.footer-nav a');
    if (footerNavLinks.length >= 6) {
        footerNavLinks[0].textContent = t.nav.home;
        footerNavLinks[1].textContent = t.nav.about;
        footerNavLinks[2].textContent = t.nav.services;
        footerNavLinks[3].textContent = t.nav.pricing;
        footerNavLinks[4].textContent = t.nav.process;
        footerNavLinks[5].textContent = t.nav.contact;
    }
    
    
    // Contact form
    const formLabels = document.querySelectorAll('.form-group label');
    if (formLabels.length >= 5) {
        formLabels[0].textContent = t.contact.form.name + ' *';
        formLabels[1].textContent = t.contact.form.phone + ' *';
        const emailLabel = document.querySelector('label[for="email"]');
        if (emailLabel) emailLabel.textContent = t.contact.form.email + ' *';
        formLabels[3].textContent = t.contact.form.service;
        formLabels[4].textContent = t.contact.form.message + ' *';
    }
    
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = t.contact.form.name;
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        if (lang === 'pl') {
            phoneInput.placeholder = '+48 123 456 789';
        } else {
            phoneInput.placeholder = t.contact.form.phone;
        }
    }
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = t.contact.form.emailPlaceholder || 'your@email.com';
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = t.contact.form.messagePlaceholder;
    
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.options[0].textContent = t.contact.form.servicePlaceholder;
        serviceSelect.options[1].textContent = t.contact.form.services.web;
        serviceSelect.options[2].textContent = t.contact.form.services.design;
        serviceSelect.options[3].textContent = t.contact.form.services.mobile;
        serviceSelect.options[4].textContent = t.contact.form.services.support;
        serviceSelect.options[5].textContent = t.contact.form.services.other;
    }
    
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    if (submitButton) {
        const span = submitButton.querySelector('span');
        if (span) span.textContent = t.contact.form.submit;
    }
    
    const privacyText = document.querySelector('.checkbox-text[data-translate="contact.form.privacy"]');
    if (privacyText) {
        privacyText.textContent = t.contact.form.privacy;
    }
    
    // Footer
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = t.footer.tagline;
    
    const footerCopyright = document.querySelector('.footer-copyright[data-translate="footer.copyrightFull"]');
    if (footerCopyright) footerCopyright.textContent = t.footer.copyrightFull;
    
    // Update page title and meta tags
    const pageTitles = {
        ru: "WebCo Solutions - Разработка веб-сайтов и онлайн решений",
        uk: "WebCo Solutions - Розробка веб-сайтів та онлайн рішень",
        pl: "WebCo Solutions - Tworzenie stron internetowych i rozwiązań online",
        en: "WebCo Solutions - Web Development and Online Solutions"
    };
    
    document.title = pageTitles[lang] || pageTitles.ru;
    
    // Update meta description
    const metaDescriptions = {
        ru: "Профессиональная разработка веб-сайтов, веб-приложений и онлайн решений. Создаем современные цифровые продукты на Laravel, WordPress, React, Vue.js. Полный цикл разработки от дизайна до запуска.",
        uk: "Професійна розробка веб-сайтів, веб-додатків та онлайн рішень. Створюємо сучасні цифрові продукти на Laravel, WordPress, React, Vue.js. Повний цикл розробки від дизайну до запуску.",
        pl: "Profesjonalne tworzenie stron internetowych, aplikacji webowych i rozwiązań online. Tworzymy nowoczesne produkty cyfrowe na Laravel, WordPress, React, Vue.js. Pełny cykl rozwoju od projektu do uruchomienia.",
        en: "Professional web development, web applications and online solutions. We create modern digital products on Laravel, WordPress, React, Vue.js. Full development cycle from design to launch."
    };
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescriptions[lang] || metaDescriptions.ru);
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitles[lang] || pageTitles.ru);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metaDescriptions[lang] || metaDescriptions.ru);
    
    const ogLocales = {
        ru: 'ru_RU',
        uk: 'uk_UA',
        pl: 'pl_PL',
        en: 'en_US'
    };
    
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
        ogLocale = document.createElement('meta');
        ogLocale.setAttribute('property', 'og:locale');
        document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute('content', ogLocales[lang] || ogLocales.ru);
}

// Initialize language on page load
updateLangButton();
translatePage(currentLang);

// Set active language option
langOptions.forEach(option => {
    if (option.dataset.lang === currentLang) {
        option.classList.add('active');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleaned) && cleaned.length >= 7;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    if (field && errorElement) {
        field.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

function validateForm() {
    const t = translations[currentLang] || translations.ru;
    const validation = t.contact.form.validation;
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const privacy = document.getElementById('privacy');
    
    // Validate name
    clearError('name');
    if (!name) {
        showError('name', validation.nameRequired);
        isValid = false;
    } else if (name.length < 2) {
        showError('name', validation.nameMinLength);
        isValid = false;
    } else if (name.length > 50) {
        showError('name', validation.nameMaxLength);
        isValid = false;
    }
    
    // Validate phone
    clearError('phone');
    if (!phone) {
        showError('phone', validation.phoneRequired);
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phone', validation.phoneInvalid);
        isValid = false;
    }
    
    // Validate email
    clearError('email');
    if (!email) {
        showError('email', validation.emailRequired);
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', validation.emailInvalid);
        isValid = false;
    }
    
    // Validate message
    clearError('message');
    if (!message) {
        showError('message', validation.messageRequired);
        isValid = false;
    } else if (message.length < 10) {
        showError('message', validation.messageMinLength);
        isValid = false;
    } else if (message.length > 1000) {
        showError('message', validation.messageMaxLength);
        isValid = false;
    }
    
    // Validate privacy
    clearError('privacy');
    if (!privacy || !privacy.checked) {
        showError('privacy', validation.privacyRequired);
        isValid = false;
    }
    
    return isValid;
}

// Form handling
const contactForm = document.getElementById('contactForm');
// Modal elements
const modalOverlay = document.getElementById('modalOverlay');
const modalMessage = document.getElementById('modalMessage');
let scrollPosition = 0;

if (contactForm) {
    // Real-time validation
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const privacyInput = document.getElementById('privacy');
    
    if (nameInput) {
        nameInput.addEventListener('blur', () => {
            const t = translations[currentLang] || translations.ru;
            const validation = t.contact.form.validation;
            const name = nameInput.value.trim();
            
            clearError('name');
            if (name && name.length < 2) {
                showError('name', validation.nameMinLength);
            } else if (name && name.length > 50) {
                showError('name', validation.nameMaxLength);
            }
        });
        
        nameInput.addEventListener('input', () => {
            const name = nameInput.value.trim();
            if (name && name.length >= 2 && name.length <= 50) {
                clearError('name');
            }
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', () => {
            const t = translations[currentLang] || translations.ru;
            const validation = t.contact.form.validation;
            const phone = phoneInput.value.trim();
            
            clearError('phone');
            if (phone && !validatePhone(phone)) {
                showError('phone', validation.phoneInvalid);
            }
        });
        
        phoneInput.addEventListener('input', () => {
            const phone = phoneInput.value.trim();
            if (phone && validatePhone(phone)) {
                clearError('phone');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const t = translations[currentLang] || translations.ru;
            const validation = t.contact.form.validation;
            const email = emailInput.value.trim();
            
            clearError('email');
            if (email && !validateEmail(email)) {
                showError('email', validation.emailInvalid);
            }
        });
        
        emailInput.addEventListener('input', () => {
            const email = emailInput.value.trim();
            if (email && validateEmail(email)) {
                clearError('email');
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', () => {
            const t = translations[currentLang] || translations.ru;
            const validation = t.contact.form.validation;
            const message = messageInput.value.trim();
            
            clearError('message');
            if (message && message.length < 10) {
                showError('message', validation.messageMinLength);
            } else if (message && message.length > 1000) {
                showError('message', validation.messageMaxLength);
            }
        });
        
        messageInput.addEventListener('input', () => {
            const message = messageInput.value.trim();
            if (message && message.length >= 10 && message.length <= 1000) {
                clearError('message');
            }
        });
    }
    
    if (privacyInput) {
        privacyInput.addEventListener('change', () => {
            if (privacyInput.checked) {
                clearError('privacy');
            }
        });
    }
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Clear all errors
        clearError('name');
        clearError('phone');
        clearError('email');
        clearError('message');
        clearError('privacy');
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const formData = new FormData(contactForm);
        
        // Show loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // Send email to sales@webco-solutions.online
        try {
            await sendEmail(formData);
            
            // Reset form and clear errors
            contactForm.reset();
            clearError('name');
            clearError('phone');
            clearError('email');
            clearError('message');
            clearError('privacy');
            
            // Show success message in modal
            const t = translations[currentLang] || translations.ru;
            
            if (modalMessage && modalOverlay) {
                // Save scroll position and lock scroll
                scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                document.body.style.top = `-${scrollPosition}px`;
                modalMessage.textContent = t.contact.form.success;
                modalMessage.className = 'modal-message success';
                modalOverlay.classList.add('show');
                document.body.classList.add('modal-open');
                
                // Hide modal after 3 seconds
                setTimeout(() => {
                    if (modalOverlay) {
                        modalOverlay.classList.remove('show');
                        document.body.classList.remove('modal-open');
                        document.body.style.top = '';
                        window.scrollTo(0, scrollPosition);
                    }
                }, 3000);
            }
            
        } catch (error) {
            // Show error message in modal
            const t = translations[currentLang] || translations.ru;
            
            if (modalMessage && modalOverlay) {
                // Save scroll position and lock scroll
                scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                document.body.style.top = `-${scrollPosition}px`;
                modalMessage.textContent = t.contact.form.error;
                modalMessage.className = 'modal-message error';
                modalOverlay.classList.add('show');
                document.body.classList.add('modal-open');
                
                // Hide modal after 3 seconds
                setTimeout(() => {
                    if (modalOverlay) {
                        modalOverlay.classList.remove('show');
                        document.body.classList.remove('modal-open');
                        document.body.style.top = '';
                        window.scrollTo(0, scrollPosition);
                    }
                }, 3000);
            }
        } finally {
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    });
}

// Send email function with domain validation
async function sendEmail(formData) {
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS is not loaded');
    }
    
    if (typeof EMAILJS_CONFIG === 'undefined') {
        throw new Error('config.js file is missing. Please create it from config.example.js');
    }
    
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || !EMAILJS_CONFIG.PUBLIC_KEY) {
        throw new Error('Please configure EmailJS credentials in config.js');
    }
    
    // Domain validation - only allow requests from your domain
    const allowedDomains = EMAILJS_CONFIG.ALLOWED_DOMAINS || [];
    const currentDomain = window.location.hostname;
    const isAllowed = allowedDomains.length === 0 || allowedDomains.some(domain => 
        currentDomain === domain || currentDomain.endsWith('.' + domain)
    );
    
    // if (!isAllowed) {
    //     console.error('Domain not allowed:', currentDomain);
    //     throw new Error('Unauthorized domain');
    // }
    
    try {
        await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            {
                to_email: 'sales@webco-solutions.online',
                from_name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                service: formData.get('service') || 'Not specified',
                message: formData.get('message'),
                reply_to: formData.get('email'),
                domain: currentDomain,
                timestamp: new Date().toISOString()
            }
        );
        return { success: true };
    } catch (error) {
        console.error('EmailJS error:', error);
        throw error;
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.about-card, .service-card');
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value[0] === '8') {
                value = '7' + value.slice(1);
            }
            if (value[0] === '7') {
                let formatted = '+7';
                if (value.length > 1) {
                    formatted += ' (' + value.slice(1, 4);
                }
                if (value.length >= 4) {
                    formatted += ') ' + value.slice(4, 7);
                }
                if (value.length >= 7) {
                    formatted += '-' + value.slice(7, 9);
                }
                if (value.length >= 9) {
                    formatted += '-' + value.slice(9, 11);
                }
                e.target.value = formatted;
            }
        }
    });
}

// Parallax effects for multiple sections (hero section disabled for performance)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // About section parallax
    const about = document.querySelector('.about');
    if (about) {
        const aboutRect = about.getBoundingClientRect();
        const aboutTop = aboutRect.top + scrolled;
        const aboutBottom = aboutTop + aboutRect.height;
        
        if (scrolled >= aboutTop - windowHeight && scrolled <= aboutBottom) {
            const progress = (scrolled - aboutTop + windowHeight) / (windowHeight + aboutRect.height);
            const parallaxOffset = (progress - 0.5) * 100;
            
            const aboutBefore = about.querySelector('::before');
            if (aboutBefore) {
                about.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
            }
        }
    }
    
    // Services section parallax
    const services = document.querySelector('.services');
    if (services) {
        const servicesRect = services.getBoundingClientRect();
        const servicesTop = servicesRect.top + scrolled;
        
        if (scrolled >= servicesTop - windowHeight && scrolled <= servicesTop + servicesRect.height) {
            const progress = (scrolled - servicesTop + windowHeight) / (windowHeight + servicesRect.height);
            const parallaxOffset = (progress - 0.5) * 80;
            services.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
        }
    }
    
    // Process section parallax
    const process = document.querySelector('.process');
    if (process) {
        const processRect = process.getBoundingClientRect();
        const processTop = processRect.top + scrolled;
        
        if (scrolled >= processTop - windowHeight && scrolled <= processTop + processRect.height) {
            const progress = (scrolled - processTop + windowHeight) / (windowHeight + processRect.height);
            const parallaxOffset = (progress - 0.5) * 60;
            process.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
        }
    }
    
    // Contact section parallax
    const contact = document.querySelector('.contact');
    if (contact) {
        const contactRect = contact.getBoundingClientRect();
        const contactTop = contactRect.top + scrolled;
        
        if (scrolled >= contactTop - windowHeight && scrolled <= contactTop + contactRect.height) {
            const progress = (scrolled - contactTop + windowHeight) / (windowHeight + contactRect.height);
            const parallaxOffset = (progress - 0.5) * 50;
            contact.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
        }
    }
    
    // Parallax for cards
    const cards = document.querySelectorAll('.about-card, .service-card');
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top + scrolled;
        
        if (scrolled >= cardTop - windowHeight && scrolled <= cardTop + cardRect.height) {
            const progress = (scrolled - cardTop + windowHeight) / (windowHeight + cardRect.height);
            const cardOffset = (progress - 0.5) * 30;
            card.style.transform = `translateY(${cardOffset}px)`;
        }
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Animate counters when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            
            if (!isNaN(number)) {
                let suffix = '';
                if (hasPlus) suffix = '+';
                if (hasPercent) suffix = '%';
                
                entry.target.textContent = '0' + suffix;
                animateCounter(entry.target, number, 2000, suffix);
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Animate process steps on scroll - trigger when bottom of section reaches top of viewport
const processSection = document.querySelector('.process');
const processSteps = document.querySelectorAll('.process-step');

if (processSection && processSteps.length > 0) {
    const processSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When process section's bottom reaches top of viewport, animate steps
                processSteps.forEach((step, index) => {
                    setTimeout(() => {
                        step.classList.add('visible');
                    }, index * 150);
                });
                // Unobserve after animation starts
                processSectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: '0px 0px -100% 0px' // Trigger when bottom of section reaches top of viewport
    });
    
    processSectionObserver.observe(processSection);
    
    // Initialize steps as hidden
    processSteps.forEach(step => {
        step.classList.remove('visible');
    });
}

// Close modal on overlay click
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('show');
            document.body.classList.remove('modal-open');
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }
    });
}

