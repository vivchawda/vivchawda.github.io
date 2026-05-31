// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stop observing once revealed
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target all timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Magnetic effect for the download button
const magneticBtn = document.querySelector('.btn-download');

magneticBtn.addEventListener('mousemove', (e) => {
    const position = magneticBtn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    
    magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
});

magneticBtn.addEventListener('mouseout', () => {
    magneticBtn.style.transform = 'translate(0px, 0px)';
});