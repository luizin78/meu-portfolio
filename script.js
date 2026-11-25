// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const aberto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "✕" : "☰";

});

// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});

// ANO AUTOMÁTICO NO RODAPÉ

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// ANIMAÇÃO DAS SEÇÕES

const elementos = document.querySelectorAll(
    ".section, .hero-content, .hero-decoration"
);

elementos.forEach(elemento => {
    elemento.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});