document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const profiles = document.querySelectorAll('.profile');
    
    function showProfile(index) {
        profiles.forEach((profile, i) => {
            profile.style.display = i === index ? 'block' : 'none';
            profile.style.transition = 'transform 0.5s ease';
            profile.style.transform = i === index ? 'translateX(0)' : 'translateX(-100%)';
        });
    }
    function swipeLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            showProfile(currentIndex);
        }
    }

    function swipeRight() {
        if (currentIndex < profiles.length - 1) {
            currentIndex++;
            showProfile(currentIndex);
        }
    }

    document.getElementById('xButton').addEventListener('click', swipeLeft);
    document.getElementById('heartButton').addEventListener('click', swipeRight);

    // Initialize the first profile
    showProfile(currentIndex);
});