document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navButtons = document.querySelector('.nav-buttons');

    hamburger.addEventListener('click', () => {
        navButtons.classList.toggle('active'); // Toggle the 'active' class
    });
});
