window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach((section) => {
        const offset = window.scrollY;
        const speed = section.getAttribute('data-speed');
        const yPos = -(offset * speed);
        
        section.style.backgroundPosition = 'center ' + yPos + 'px';
    });
});
function updateGreeting() {
    const greetingElement = document.querySelector('.greeting-message');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = "Good Morning, Love!";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon, Sweetheart!";
    } else {
        greetingElement.textContent = "Good Evening, My Heart!";
    }
}

updateGreeting();  // Update on load
window.addEventListener('scroll', () => {
    document.body.classList.add('scrolled');
});