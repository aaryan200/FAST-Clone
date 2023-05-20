const toggleButton = document.getElementsByClassName('fast__navbar-toggle-button')[0];
const navbarLinks = document.getElementsByClassName('fast__navbar_menu')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});