// Scroll animation for Languages section
const languageItems = document.querySelectorAll('.language-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

languageItems.forEach(item => {
    observer.observe(item);
});
