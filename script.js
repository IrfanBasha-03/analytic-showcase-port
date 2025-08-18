// Typing Animation
class TypingAnimation {
    constructor(element, texts, typingSpeed = 100, erasingSpeed = 50, delaySpeed = 2000) {
        this.element = element;
        this.texts = texts;
        this.typingSpeed = typingSpeed;
        this.erasingSpeed = erasingSpeed;
        this.delaySpeed = delaySpeed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isErasing = false;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (!this.isErasing && this.charIndex < currentText.length) {
            // Typing
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
            setTimeout(() => this.type(), this.typingSpeed);
        } else if (this.isErasing && this.charIndex > 0) {
            // Erasing
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
            setTimeout(() => this.type(), this.erasingSpeed);
        } else {
            // Switch between typing and erasing
            this.isErasing = !this.isErasing;
            
            if (!this.isErasing) {
                this.textIndex = (this.textIndex + 1) % this.texts.length;
            }
            
            setTimeout(() => this.type(), this.delaySpeed);
        }
    }
}

// Intersection Observer for animations
class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.observerOptions
        );
        
        this.init();
    }
    
    init() {
        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.skill-card, .project-card, .timeline-item, .contact-item, .contact-form'
        );
        
        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
        
        // Observe skills section for progress bars
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            this.observer.observe(skillsSection);
        }
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills-section')) {
                    this.animateSkillBars();
                } else {
                    this.animateElement(entry.target);
                }
            }
        });
    }
    
    animateElement(element) {
        element.classList.add('animate-in');
        
        // Add staggered animation for multiple elements
        if (element.parentElement.children.length > 1) {
            const siblings = Array.from(element.parentElement.children);
            const index = siblings.indexOf(element);
            element.style.transitionDelay = `${index * 100}ms`;
        }
    }
    
    animateSkillBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, index * 100);
        });
    }
}

// Smooth scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Scroll indicator functionality
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const skillsSection = document.querySelector('#skills');
                if (skillsSection) {
                    skillsSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
}

// Contact form handler
class ContactForm {
    constructor() {
        this.form = document.querySelector('#contactForm');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show success message (you can replace this with actual form submission)
        this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.form.reset();
    }
    
    showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        
        // Style the message
        Object.assign(messageEl.style, {
            padding: '1rem',
            marginTop: '1rem',
            borderRadius: '0.5rem',
            backgroundColor: type === 'success' ? 'hsl(142, 76%, 36%, 0.1)' : 'hsl(0, 84%, 60%, 0.1)',
            color: type === 'success' ? 'hsl(142, 76%, 36%)' : 'hsl(0, 84%, 60%)',
            border: `1px solid ${type === 'success' ? 'hsl(142, 76%, 36%, 0.2)' : 'hsl(0, 84%, 60%, 0.2)'}`,
            opacity: '0',
            transform: 'translateY(10px)',
            transition: 'all 0.3s ease'
        });
        
        // Insert message
        this.form.appendChild(messageEl);
        
        // Animate in
        setTimeout(() => {
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 5000);
    }
}

// Particle animation
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.init();
    }
    
    init() {
        // Add additional floating particles
        this.createFloatingParticles();
    }
    
    createFloatingParticles() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        // Create additional particles
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Random positioning
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 4 + 2;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            Object.assign(particle.style, {
                position: 'absolute',
                left: x + '%',
                top: y + '%',
                width: size + 'px',
                height: size + 'px',
                backgroundColor: 'hsl(195, 100%, 50%, 0.2)',
                borderRadius: '50%',
                animation: `float ${duration}s ease-in-out infinite`,
                animationDelay: delay + 's',
                pointerEvents: 'none'
            });
            
            heroSection.appendChild(particle);
        }
    }
}

// Theme controller (for future dark/light mode toggle)
class ThemeController {
    constructor() {
        this.theme = 'dark'; // Default theme
        this.init();
    }
    
    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
    }
    
    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy load images if any
        this.lazyLoadImages();
        
        // Debounce scroll events
        this.debounceScrollEvents();
        
        // Preload critical resources
        this.preloadResources();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    debounceScrollEvents() {
        let ticking = false;
        
        function updateScrollEffects() {
            // Add scroll-based effects here
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
    
    preloadResources() {
        // Preload critical fonts
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        link.as = 'style';
        document.head.appendChild(link);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing animation
    const typedTextElement = document.querySelector('#typed-text');
    if (typedTextElement) {
        const roles = [
            "Aspiring DevOps Engineer",
            "Data Analytics Enthusiast", 
            "Cloud Computing Student",
            "Tech Innovation Seeker"
        ];
        new TypingAnimation(typedTextElement, roles);
    }
    
    // Initialize other components
    new AnimationController();
    new SmoothScroll();
    new ContactForm();
    new ParticleSystem();
    new ThemeController();
    new PerformanceOptimizer();
    
    // Add loading animation complete
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingCSS = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded) .hero-content {
        opacity: 0;
        transform: translateY(50px);
    }
    
    body.loaded .hero-content {
        opacity: 1;
        transform: translateY(0);
        transition: all 1s ease-out;
    }
    
    .floating-particle {
        z-index: 1;
    }
    
    .form-message {
        font-size: 0.875rem;
        font-weight: 500;
    }
`;

// Inject loading CSS
const style = document.createElement('style');
style.textContent = loadingCSS;
document.head.appendChild(style);