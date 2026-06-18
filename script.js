```javascript id="8tq1ms"
/* ==========================================
   MOTEL DOCE TENTAÇÃO - SCRIPT.JS
========================================== */

/* MENU MOBILE */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* CONTADORES ANIMADOS */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = Number(counter.getAttribute("data-target"));
        const increment = target / 80;

        let count = 0;

        const updateCounter = () => {

            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !counterStarted) {

        startCounters();
        counterStarted = true;

    }

});


/* CALCULADORA DE RESERVA */

function calcularReserva() {

    const suite = document.getElementById("suite").value;
    const horas = parseInt(document.getElementById("horas").value);

    let total = 0;

    if (suite === "comum") {

        if (horas === 1) {
            total = 90;
        } else {
            total = 90 + ((horas - 1) * 30);
        }

    } else {

        if (horas === 1) {
            total = 140;
        } else {
            total = 140 + ((horas - 1) * 45);
        }

    }

    document.getElementById("resultado").innerHTML =
        `Total estimado: <strong>R$ ${total.toFixed(2).replace(".", ",")}</strong>`;
}


/* SWIPER GALERIA */

const swiper = new Swiper(".mySwiper", {

    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        }

    }

});


/* AOS ANIMAÇÕES */

AOS.init({

    duration: 1200,
    once: true,
    offset: 100

});


/* PARTICLES JS */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: ["#d4af37", "#8b001a", "#7d0b1f"]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4,
            random: true
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#5c0012",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true

        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.8
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});


/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,.85)";
        navbar.style.boxShadow = "none";

    }

});


/* SCROLL SUAVE BOTÕES */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* EFEITO DE ENTRADA DA HERO */

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(50px)";

        setTimeout(() => {

            heroContent.style.transition = "all 1.2s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 300);

    }

});


/* BOTÃO RESERVA RÁPIDA */

function reservarWhatsapp() {

    const suite = document.getElementById("suite").value;
    const horas = document.getElementById("horas").value;

    const mensagem =
        `Olá! Gostaria de reservar uma Suíte ${suite.toUpperCase()} por ${horas} hora(s).`;

    const url =
        `https://wa.me/5533985835555?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}


/* TECLA ENTER CALCULAR */

const horasInput = document.getElementById("horas");

if (horasInput) {

    horasInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            calcularReserva();
        }

    });

}

console.log("%cMotel Doce Tentação",
"color:#d4af37;font-size:20px;font-weight:bold;");

console.log("%cSite Premium carregado com sucesso.",
"color:#8b001a;font-size:14px;");
```
