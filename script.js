// script.js

// Smooth Scrolling Functionality
const smoothScroll = (target, duration) => {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

// Form Validation Functionality
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return valid;
};

// Animation Trigger Functionality
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            el.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Event Listener for Form Submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        if (validateForm(form)) {
            // Handle valid form submission
            console.log('Form submitted successfully!');
        } else {
            console.log('Form validation failed. Please fill out all fields.');
        }
    });
}

// Example Usage for Smooth Scrolling
const scrollBtn = document.querySelector('.scroll-btn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        smoothScroll('#target-section', 1000);
    });
}