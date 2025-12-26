// ===================================
// MOBILE MENU FUNCTIONALITY
// ===================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===================================
// SKILL BAR ANIMATIONS
// ===================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('#skills').forEach(el => {
    skillObserver.observe(el);
});

// ===================================
// PARTICLE EFFECT
// ===================================
function createParticle() {
    const particles = document.getElementById('particles');
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `floating ${3 + Math.random() * 2}s ease-in-out infinite`;
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 500);

// ===================================
// CONTACT FORM SUBMISSION
// ===================================
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add success animation
    const button = this.querySelector('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
    button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        this.reset();
    }, 3000);
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// ===================================
// TYPING EFFECT FOR TAGLINE
// ===================================
const taglines = [
    "Aspiring Software Developer",
    "Full-Stack Enthusiast",
    "Problem Solver",
    "Continuous Learner"
];

let taglineIndex = 0;
let charIndex = 0;
let isDeleting = false;
const taglineElement = document.querySelector('.text-xl.text-gray-400');

function typeEffect() {
    const currentTagline = taglines[taglineIndex];
    
    if (isDeleting) {
        taglineElement.textContent = currentTagline.substring(0, charIndex - 1) + " | Passionate About Building Smart Solutions";
        charIndex--;
    } else {
        taglineElement.textContent = currentTagline.substring(0, charIndex + 1) + " | Passionate About Building Smart Solutions";
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTagline.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        taglineIndex = (taglineIndex + 1) % taglines.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect after 2 seconds
setTimeout(typeEffect, 2000);
