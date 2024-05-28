document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById('title');
    const titleText = title.innerText;
    title.innerHTML = '';

    const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];

    for (let i = 0; i < titleText.length; i++) {
        const char = titleText[i];
        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add(colors[i % colors.length]); // Asigna una clase de color
        title.appendChild(span);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    function appearOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.4;

            if (sectionTop < screenPosition) {
                section.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', appearOnScroll);
    appearOnScroll();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});