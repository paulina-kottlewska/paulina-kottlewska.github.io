const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

window.addEventListener('pageshow', () => {
    let introName = document.getElementById('intro-name');
    let introImage = document.getElementById('intro-image');

    introName.style.transform = 'translateX(0)';
    introImage.style.transform = 'translateX(0)';
});