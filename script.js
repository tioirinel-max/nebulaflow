document.addEventListener('DOMContentLoaded', () => {
    // Inicializa Lucide Icons
    lucide.createIcons();

    // Smooth Scroll para links de navegação
    document.querySelectorAll('nav a[href^="#"], .footer-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fechar o menu mobile se estiver aberto
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Funcionalidade do FAQ (Accordion)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            // Fecha todos os outros itens abertos
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = 0;
                    item.querySelector('.faq-question').classList.remove('active');
                }
            });

            // Alterna o item clicado
            faqItem.classList.toggle('active');
            question.classList.toggle('active');

            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            } else {
                faqAnswer.style.maxHeight = 0;
            }
        });
    });

    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Trocar ícone do menu (opcional, requer mais CSS para animação)
        // const icon = menuToggle.querySelector('i');
        // if (navLinks.classList.contains('active')) {
        //     icon.setAttribute('data-lucide', 'x');
        // } else {
        //     icon.setAttribute('data-lucide', 'menu');
        // }
        // lucide.createIcons();
    });
});
