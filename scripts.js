// Scroll animation for Languages section
const languageItems = document.querySelectorAll('.language-item');
const aboutBtn = document.getElementById('aboutBtn');
const languagesBtn = document.getElementById('languagesBtn');
const projectsBtn = document.getElementById('projectsBtn');
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const contactBtn = document.getElementById('contactBtn');


// Observer to trigger scroll animation when the elements come into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Observe each language item
languageItems.forEach(item => {
    observer.observe(item);
});

// Function to trigger the animation manually (simulate scroll)
function triggerLanguageAnimations() {
    languageItems.forEach(item => {
        item.classList.add('visible');
    });
}

// Function to scroll to a specific section with offset
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const headerOffset = 70; // Adjust this value based on your header's height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Add event listeners for each button
aboutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection("#about");
});

languagesBtn.addEventListener('click', (event) => {
    event.preventDefault();
    triggerLanguageAnimations(); // Trigger animations
    scrollToSection("#languages");
});

projectsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection("#projects");
});

contactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToSection("#contact");
});



viewProjectsBtn.addEventListener( 'click' , (event) =>{
    event.preventDefault();
    scrollToSection("#projects");
}
);



let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-100px"; // Adjust to hide the navbar
    } else {
        // Scrolling up
        header.style.top = "0"; // Show the navbar
    }

    lastScrollTop = scrollTop;
});

document.getElementById('show-more-btn').addEventListener('click', function() {
    // Select all hidden project cards
    const hiddenProjects = document.querySelectorAll('.project-card.hidden');
    
    hiddenProjects.forEach(project => {
        project.classList.remove('hidden'); // Make them visible
    });

    // Hide the "Show More" button after all projects are shown
    this.style.display = 'none';
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the fade-in class
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check
document.addEventListener('DOMContentLoaded', handleScroll);

