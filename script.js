// MODO ESCURO
const chk = document.getElementById('chk');

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('dark');
});
// FIM MODO ESCURO

// MENU RESPONSIVO
const hamgurguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamgurguer.addEventListener("click",()=>{
    hamgurguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// FIM MENU RESPONSIVO





// MODO SCROLL
window.sr = ScrollReveal({reset: true});

sr.reveal('.scroll-portifolio', {
    rotate: {
        x: 80, y: 10, z: 80
    },
    duration: 3000
});

sr.reveal('.scroll-nome', {
    rotate: {
        x: 80, y: 0, z: 80
    },
    duration: 3000
});


sr.reveal('.scroll-button', {
    rotate: {
        x:25, y:0, z:0
    },
    duration: 5000
   
});

sr.reveal('.scroll-foto, .scroll-sobre-mim', {
    rotate: {
        x: 10, y: 10, z: 0
    },
    duration: 3000
});

sr.reveal('.scroll-habilidades', {
    rotate: {
        x: 0, y:10, z:0
    },
    duration: 3000
});

sr.reveal('.scroll-projetos', {
    rotate: {
        x:0, y:0, z:0
    },
    duration: 3000
   
});

sr.reveal('.scroll-contatos', {
    rotate: {
        x:0, y:80, z:0
    },
    duration: 3000
});
// FIM MODO SCROLL




