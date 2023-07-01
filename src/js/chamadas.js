// Botão Ver Mais

const escondido = document.getElementById('div-escondido');
const ver = document.getElementById('ver');

function vermais() {
    if (escondido.style.display == "none") {
    escondido.style.display='flex';
    ver.innerHTML='ver menos';
    } else {
        escondido.style.display='none';
        ver.innerHTML='ver mais';
    }
}

// Botões do menu responsivo

function openMenu() {
    document.querySelector(".menu-responsivo").style.height = '100%';
    document.querySelector(".btn-menu").style.display='none';
}

function fechaMenu() {
    document.querySelector(".menu-responsivo").style.height = '0';
    document.querySelector(".btn-menu").style.display='block';
}

function removerBtn() {
    const x = document.querySelector(".menu-responsivo");
    const btn = document.querySelector(".btn-menu");
    if (window.innerWidth >= 650) {
        btn.style.display='none';
    } else if (window.innerWidth >= 650 || x.style.height=='100%') {
        btn.style.display='none';
    } else {
        btn.style.display='block';
    }
}

// Chamada dos botões de redes sociais e projetos

const linkedin = 'https://www.linkedin.com/in/livia-sperandio-gutter-35a88920b';
const instagram = 'https://instagram.com/liviasperandiog?igshid=MzRlODBiNWFlZA=='

function chamarlinkedin(){
    window.location = linkedin;
}
function chamarInstagram() {
    window.location = instagram
}

