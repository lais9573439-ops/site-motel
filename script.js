```javascript id="motel-script-js"
// ==============================
// MOTEL DOCE TENTAÇÃO
// script.js
// ==============================

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ==============================
// Animação ao aparecer na tela
// ==============================

const elementos = document.querySelectorAll(
    '.card, .suite, .preco-card, .galeria-grid img'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('mostrar');
        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});


// ==============================
// Cabeçalho dinâmico
// ==============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){
        header.classList.add('header-scroll');
    }else{
        header.classList.remove('header-scroll');
    }

});


// ==============================
// Menu ativo conforme seção
// ==============================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(
            link.getAttribute('href') === `#${current}`
        ){
            link.classList.add('active');
        }

    });

});


// ==============================
// Efeito de zoom nas fotos
// ==============================

const imagens = document.querySelectorAll('.galeria-grid img');

imagens.forEach(img => {

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });

});


// ==============================
// Mensagem de boas-vindas
// ==============================

window.addEventListener('load', () => {

    console.log(
        'Motel Doce Tentação - Sistema carregado com sucesso.'
    );

});


// ==============================
// Botão WhatsApp
// ==============================

const botaoWhatsapp = document.querySelector('.btn');

if(botaoWhatsapp){

    botaoWhatsapp.addEventListener('click', () => {

        console.log(
            'Cliente clicou para fazer reserva.'
        );

    });

}
```
